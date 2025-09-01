CREATE DATABASE daria_react;

CREATE TABLE examples
    (
        id         serial primary key,
        img_path   varchar(255) not null,
        created    date not null,
        deleted    date,
        is_visible boolean default true
    );
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
values ('/background/img/a1', current_timestamp, true),
       ('/background/img/a2', current_timestamp, true),
       ('/background/img/a3', current_timestamp, true),
       ('/background/img/a4', current_timestamp, true),
       ('/background/img/s1', current_timestamp, true),
       ('/background/img/s2', current_timestamp, true),
       ('/background/img/s3', current_timestamp, true),
       ('/background/img/s4', current_timestamp, true),
       ('/background/img/a5', current_timestamp, true),
       ('/background/img/s6', current_timestamp, true)
;