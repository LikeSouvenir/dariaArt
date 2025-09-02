import pool from './conf/db.js';

// получение конкретной работы
const getExamples = async (mail) => {
    return new Promise(function (resolve, reject) {
        pool.query('INSERT INTO want_examples (email) VALUES ($1)',
            [mail],
            function (err, results) {
                if (err) {
                    reject(err);
                }
                resolve(results);
            });
    })
}

const sendMessage = async (mail, message) => {
    return await new Promise(function (resolve, reject) {
        resolve("db writing message from the = " + mail + " :  " + message);
    })
}

const check = async () => {
    return await new Promise(function (resolve, reject) {
        pool.query('SELECT NOW()', (err, res) => {
            if (err) {
                reject('Ошибка подключения:', err);
            } else {
                resolve('Подключение успешно:', res.rows);
            }
        });
    })
}

export {check, sendMessage, getExamples};