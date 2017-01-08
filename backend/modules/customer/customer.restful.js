/**
 * Created by huangsihuan on 2017/1/7.
 */
/**
 * Created by huangsihuan on 2016/11/20.
 */
'use strict'
module.exports = function (app) {
    let async = require('async'),
        _q = require('q'),
        moment = require('moment'),
        url = require('url');


    //_personnel = require('../personnel/personnel.model')(app),
    //_permission = require('../permission/permission.model')(app)

    // Authenticate Against to create session auth
    app.get('/customers/', function(req, res) {
        let  db = app.locals.db.get('demos');
        db.knex('customer').select('*').timeout(1000)
            .then(rows=>{
                return res.status(200).send(rows);
            })
            .catch(e=> console.log(e))
    })
    app.post('/customers/', function(req, res) {
        let  db = app.locals.db.get('demos');

        db.knex('customer').insert(req.body)
            .then(function (rows) {

                req.body.c_id = rows[0]
                return res.status(200).send(req.body);
            })
            .catch(function (error) { Promise.reject(error); })

       // req.body.customerId = "1"

    })
}

