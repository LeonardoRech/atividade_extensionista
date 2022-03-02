module.exports = app => {
    const { existsOrError, notExistsOrError } = app.api.validation

    const save = (req, res) => {
        const student = { ...req.body }
        if(req.params.id) student.id = req.params.id

        try{
            existsOrError(student.name, "Nome não informado")
            existsOrError(student.email, "Email não informado")
            existsOrError(student.eletronic, "Eletrônico não informado")
        } catch (msg) {
            res.status(400).send(msg)
        }

        if(student.id) {
            app.db('students')
                .update(student)
                .where({ id: student.id })
                .then(_ => res.status(204).send())
                .catch(err => res.status(500).send(err))
        } else {
            app.db('students')
                .insert(student)
                .then(_ => res.status(204).send())
                .catch(err => res.status(500).send(err))
        }
    }

    const remove = async (req, res) => {
        try {
            const rowsDeleted = await app.db('students')
                .where({ id: req.params.id }).del()
            existsOrError(rowsDeleted, 'estudante não foi encontrado.')
            
            res.status(204).send()
        } catch(msg) {
            res.status(500).send(msg)
        }
    }

    const limit = 10
    const get = async(req, res) => {
        const page = req.query.page || 1

        const result = await app.db('students').count('id').first()
        const count = parseInt(result.count)

        app.db('students')
            .select('id', 'name', 'email', 'eletronic')
            .limit(limit).offset(page * limit - limit)
            .then(student => res.json({ data: student, count, limit }))
            .catch(err => res.status(500).send(err))
    }

    const getById = (req, res) => {
        app.db('students')
            .where({ id: req.params.id })
            .first()
            .then(student => {
                student.desc_apto = student.desc_apto.toString()
                student.desc_edificio = student.desc_edificio.toString()
                return res.json(student)
            })
            .catch(err => res.status(500).send(err))
    }

    return { save, remove, get, getById}
}