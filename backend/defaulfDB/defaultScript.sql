CREATE DATABASE daria_react;

CREATE TABLE examples
    (
        id         serial primary key,
        img_path   varchar(255) not null,
        created    date not null,
        deleted    date,
        is_visible boolean default true
    );
CREATE TABLE works
    (
        id serial primary key,
        name varchar(255),
        description varchar(512),
        path varchar(100) not null
    );
INSERT INTO works (name, description, path) VALUES
    ('Френк Герберт - Дюна', '', '/a/'),
    ('Джон Стейнбек - Зима тревоги нашей', '', '/s/');
CREATE TABLE want_examples
    (
        id      serial primary key,
        email   varchar(128) not null,
        created date not null
    );
CREATE TABLE send_message
    (
        id      serial primary key,
        email   varchar(128) not null,
        message character(512),
        created date not null
    );
CREATE TABLE is_book
    (
        example_id int not null,
        author     varchar(128),
        name       varchar(128)
    );
CREATE TABLE is_illustration
    (
        example_id int not null
    );
-- счетчик на иконки соц.сетей?
INSERT INTO examples (img_path, created, is_visible)
VALUES ('/img/a/a', current_timestamp, true),
       ('/img/a/a1', current_timestamp, true),
       ('/img/a/a2', current_timestamp, true),
       ('/img/a/a3', current_timestamp, true),
       ('/img/a/a4', current_timestamp, true),
       ('/img/s/s1', current_timestamp, true),
       ('/img/s/s2', current_timestamp, true),
       ('/img/s/s3', current_timestamp, true),
       ('/img/s/s4', current_timestamp, true),
       ('/img/s/s6', current_timestamp, true)
;
