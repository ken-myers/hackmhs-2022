// TODO: figure out logs

const Pool = require('pg').Pool;
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'hackmhs2022',
    password: 'rbarg5Htme',
    port: 5432,
});

const getUserById = (request, response) => {
    const id = request.params.id;

    pool.query('SELECT * FROM users WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error;
        }
        response.status(200).json(results.rows[0]);
    });
};

const getUserByEmail = (request, response) => {
    const id = request.params.email;

    pool.query('SELECT users.*, teams.team_name FROM users JOIN teams ON email = $1 AND teams.id = users.org_code', [id], (error, results) => {
        if (error) {
            throw error;
        }
        response.status(200).json(results.rows[0]);
    });
};

const getTeamById = (request, response) => {
    const id = request.params.id;

    pool.query('SELECT * FROM teams WHERE id = $1', (error, results) => {
        if (error) {
            throw error;
        }
        response.status(200).json(results.rows[0]);
    });
};

const getTeamTimelineItems = (request, response) => {
    const id = request.params.id;

    pool.query('SELECT * FROM timeline_items WHERE id = $1', (error, results) => {
        if (error) {
            throw error;
        }
        response.status(200).json(results.rows);
    });
};

const createUser = (request, response) => {
    const { id, display_name, email, org_code, account_type, photo_url } = request.body;

    pool.query('INSERT INTO users (id, display_name, email, org_code, account_type, photo_url) VALUES ($1, $2, $3, $4, $5, $6)', [id, display_name, email, org_code, account_type, photo_url], (error, result) => {
        if (error) {
            throw error;
        }
        response.status(201).send(`User added with ID: ${result.id}`);
    });
};

const createTeam = (request, response) => {
    const { name, bio, default_tasks } = request.body;

    pool.query('INSERT INTO users (name, bio, default_tasks) VALUES ($1, $2, $3)', [name, bio, default_tasks], (error, result) => {
        if (error) {
            throw error;
        }
        response.status(201).send(`User added with ID: ${result.insertId}`);
    });
};

const createTimelineItem = (request, response) => {
    const { teamID, title, description, users } = request.body;

    pool.query('INSERT INTO timeline_items (teamID, title, description, users) VALUES ($1, $2, $3, $4)', [teamID, title, description, users], (error, result) => {
        if (error) {
            throw error;
        }
        response.status(201).send(`User added with ID: ${result.insertId}`);
    });
};

const deleteUser = (request, response) => {
    const id = request.params.id;

    pool.query('DELETE FROM users WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error;
        }
        response.status(200).send(`User deleted with ID: ${id}`);
    });
};

const deleteTeam = (request, response) => {
    const id = request.params.id;

    pool.query('DELETE FROM teams WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error;
        }
        response.status(200).send(`User deleted with ID: ${id}`);
    });
};


const getTeamUsers = (request, response) => {
    const id = request.params.id;
    
    pool.query('SELECT * FROM users WHERE users.org_code = $1', [id], (error, results) => {
        if (error) {
            throw error;
        }
        response.status(200).json(results.rows);
    });
};

const getDefaultTodoItems = (request, response) => {
    const id = request.params.id;

    pool.query('SELECT default_tasks FROM teams WHERE teams.id = $1', [id], (error, results) => {
        if (error) {
            throw error;
        }
        response.status(200).json(results.rows[0]['default_tasks']);
    });
};

const addDefaultTodoItem = (request, response) => {
    const id = request.params.id;
    const { task } = request.body;

    pool.query('UPDATE teams SET default_tasks = array_append(default_tasks, $1) WHERE teams.id = $2', [task, id], (error, results) => {
        if (error) {
            throw error;
        }
        response.status(200).json({ message: `Added item ${task} to team with ID: ${id}` });
    });
};

const deleteDefaultTodoItem = (request, response) => {
    const id = request.params.id;
    const { task } = request.body;

    pool.query('UPDATE teams SET default_tasks = array_remove(default_tasks, $1) WHERE teams.id = $2', [task, id], (error, results) => {
        if (error) {
            throw error;
        }
        response.status(200).json({ message: `Retrieved users from team with ID: ${id}` });
    });
};
module.exports = {
    getUserById,
    getUserByEmail,
    getTeamById,
    getTeamTimelineItems,
    createUser,
    createTeam,
    createTimelineItem,
    deleteUser,
    deleteTeam,
    getTeamUsers,
    addDefaultTodoItem,
    deleteDefaultTodoItem,
    getDefaultTodoItems
};