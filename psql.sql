CREATE DATABASE hackmhs2022;

CREATE ROLE hackmhsadmin WITH LOGIN PASSWORD 'hackmhspass';

GRANT ALL PRIVILEGES ON TABLE users TO michelle;

CREATE TABLE users (
    id VARCHAR PRIMARY KEY,
    org_code VARCHAR,
    display_name VARCHAR,
    email VARCHAR(255) UNIQUE,
    account_type VARCHAR,
    photo_url VARCHAR,
    todos json
);

CREATE TABLE teams (
    id SERIAL PRIMARY KEY,
    name VARCHAR NOT NULL,
    bio VARCHAR,
    default_tasks VARCHAR []
);

CREATE TABLE timeline_items (
    id SERIAL PRIMARY KEY,
    teamID INTEGER,
    title VARCHAR NOT NULL,
    description VARCHAR,
    users INTEGER []
);

INSERT INTO
    users (
        id,
        student_id,
        first_name,
        last_name,
        email,
        grad_class,
        is_teacher
    )
VALUES
    (
        1,
        452060,
        'Michelle',
        'Nguyen',
        'nguye452060@student.aisd.net',
        2022,
        false
    ) RETURNING *;

INSERT INTO
    users (id, first_name, last_name, email, is_teacher)
VALUES
    (
        2,
        'Marianne',
        'Varner',
        'mvarner@aisd.net',
        true
    ) RETURNING *;

INSERT INTO
    events (name, time_start, time_end, teacher_id)
VALUES
    (
        'Event1',
        '2022-04-10 01:02',
        '2022-04-10 02:02',
        2
    ) RETURNING *;

-- to login: psql -U postgres -d academy
--  \l to list databases
-- \dt to list tables
-- \d and \d+ Display columns (field names) of a table
SELECT
    *
FROM
    users;

DELETE FROM
    users
WHERE
    ID = 1;