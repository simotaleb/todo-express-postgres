
const promise = require('bluebird');

var options = {
    promiseLib: promise
};

const pgp = require('pg-promise')(options);
const connectionString = 'postgres://localhost:5432/todo';
const db = pgp(connectionString);



createTodo  = (req, res, next) => {
    req.body.index = parseInt(req.body.index);
    req.body.text = req.body.text
    db.none('insert into todo_data(index, task)' +
        'values(${index}, ${text})',
        req.body)
        .then(function () {
        res.status(200)
            .json({
            status: 'success',
            message: 'Inserted one puppy'
            });
        })
        .catch(function (err) {
        return next(err);
        });
}

module.exports = {
    createTodo: createTodo
    //getTodos : getTodos
};


