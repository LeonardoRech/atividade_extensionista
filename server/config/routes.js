const admin = require('./admin')

module.exports = app => {
    app.post('/signup', app.api.user.save)
    app.post('/signin', app.api.auth.signin)
    app.post('/validateToken', app.api.auth.validateToken)

    app.route('/users')
        .all(app.config.passport.authenticate())
        .post(app.api.user.save)
        .get(app.api.user.get)

    app.route('/users/:id')
        .all(app.config.passport.authenticate())
        .put(app.api.user.save)
        .get(app.api.user.getById)
        .delete(app.api.user.remove)

    app.route('/eletronics')
        .get(app.api.eletronic.get)
        .post(app.api.eletronic.save)

    app.route('/eletronics/:id')
        .get(app.api.eletronic.getById)
        .put(app.api.eletronic.save)
        .delete(app.api.eletronic.remove)

    app.route('/students')
        .get(app.api.student.get)
        .post(app.api.student.save)

    app.route('/students/:id')
        .get(app.api.student.getById)
        .put(app.api.student.save)
        .delete(app.api.student.remove)
}