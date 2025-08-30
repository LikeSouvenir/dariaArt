SELECT 'CREATE DATABASE daria_react'
WHERE NOT EXISTS (SELECT FROM daria_react WHERE datname = 'daria_react')\gexec;

CREATE TABLE IF NOT EXISTS examples (
    id int primary key not null,
    img_path varchar(255) not null,
    created date not null,
    deleted date,
    is_visible boolean default true
);
CREATE TABLE want_examples (
    id int primary key not null,
    email varchar(128) not null,
    created date not null
);
CREATE TABLE send_message(
    id int primary key not null,
    email varchar(128) not null,
    message character(512),
    created date not null
);
CREATE TABLE is_book(
    example_id int not null,
    author varchar(128),
    name varchar(128)
)
CREATE TABLE is_illustration (
    example_id int not null
)
-- счетчик на иконки соц.сетей?
INSERT INTO examples (

)