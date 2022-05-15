// TODO: figure out logs

const Pool = require('pg').Pool;
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'hackmhs2022',
    password: 'rbarg5Htme',
    port: 5432,
});

const getUsers = (request, response) => {
    pool.query('SELECT * FROM pg_catalog.pg_tables', function (err, result) {
        console.log(err, result);
    });
    pool.query('SELECT * FROM users', (error, results) => {
        if (error) {
            throw error;
        }
        response.status(200).json(results.rows);
    });
};

const getUserById = (request, response) => {
    const id = parseInt(request.params.id);

    pool.query('SELECT * FROM users WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error;
        }
        response.status(200).json(results.rows);
    });
};

const getEvents = (request, response) => {
    pool.query('SELECT * FROM events', (error, results) => {
        if (error) {
            throw error;
        }
        response.status(200).json(results.rows);
    });
};

const createUser = (request, response) => {
    const { id, student_id, first_name, last_name, grad_class, is_teacher, email } = request.body;

    pool.query('INSERT INTO users (id, student_id, first_name, last_name, grad_class, is_teacher, email) VALUES ($1, $2, $3, $4, $5, $6)', [id, student_id, first_name, last_name, grad_class, is_teacher, email], (error, result) => {
        if (error) {
            throw error;
        }
        response.status(201).send(`User added with ID: ${result.insertId}`);
    });
};

const deleteUser = (request, response) => {
    const id = parseInt(request.params.id);

    pool.query('DELETE FROM users WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error;
        }
        response.status(200).send(`User deleted with ID: ${id}`);
    });
};

const deleteEvent = (request, response) => {
    const id = parseInt(request.params.id);

    pool.query('DELETE FROM events WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error;
        }
        response.status(200).send(`User deleted with ID: ${id}`);
    });
};

module.exports = {
    getUsers,
    getUserById,
    getEvents,
    createUser,
    deleteUser,
    deleteEvent
};