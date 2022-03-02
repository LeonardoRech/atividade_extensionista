module.exports = app => {
    const { existsOrError, notExistsOrError } = app.api.validation

    const save = (req, res) => {
        const eletornic = { ...req.body }
        if(req.params.id) eletornic.id = req.params.id

        try{
            existsOrError(eletornic.name, "Nome não informado")
            existsOrError(eletornic.email, "Email não informado")
            existsOrError(eletornic.eletronic, "Eletrônico não informado")
            existsOrError(eletornic.description, "Descrição não informada")
        } catch (msg) {
            res.status(400).send(msg)
        }

        if(eletornic.id) {
            app.db('eletronics')
                .update(eletornic)
                .where({ id: eletornic.id })
                .then(_ => res.status(204).send())
                .catch(err => res.status(500).send(err))
        } else {
            app.db('eletronics')
                .insert(eletornic)
                .then(_ => res.status(204).send())
                .catch(err => res.status(500).send(err))
        }
    }

    const remove = async (req, res) => {
        try {
            const rowsDeleted = await app.db('eletronics')
                .where({ id: req.params.id }).del()
            existsOrError(rowsDeleted, 'eletornico não foi encontrado.')
            
            res.status(204).send()
        } catch(msg) {
            res.status(500).send(msg)
        }
    }

    const limit = 10
    const get = async(req, res) => {
        const page = req.query.page || 1

        const result = await app.db('eletronics').count('id').first()
        const count = parseInt(result.count)

        app.db('eletronics')
            .select('id', 'name', 'email', 'eletronic', 'description')
            .limit(limit).offset(page * limit - limit)
            .then(eletornic => res.json({ data: eletornic, count, limit }))
            .catch(err => res.status(500).send(err))
    }

    const getById = (req, res) => {
        app.db('eletronics')
            .where({ id: req.params.id })
            .first()
            .then(eletronic => {
                eletronic.description = eletronic.description.toString()
                return res.json(eletronic)
            })
            .catch(err => res.status(500).send(err))
    }

    return { save, remove, get, getById}
}