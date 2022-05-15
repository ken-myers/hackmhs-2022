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
    id VARCHAR PRIMARY KEY,
    team_name VARCHAR NOT NULL,
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
    teams (
        id,
        team_name,
        bio,
        default_tasks
    )
VALUES
    (
        'martin',
        'Martin HS',
        'Home of the Martin Warriors. We are a high school dedicated to excellence in all areas.',
        ARRAY [ 'Get to know teachers', 'Read the district website', 'Learn common instructional tools' ]
    ) RETURNING *;

INSERT INTO
    users (id, display_name, email, account_type, org_code, photo_url)
VALUES
    (
        '1',
        'Marianne Varner',
        'mvarner@aisd.net',
        'admin',
        'martin',
        'https://picsum.photos/200'
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

SELECT users.*, teams.team_name FROM users JOIN teams ON email = 'michellehwin@gmail.com' and teams.id = users.org_code;