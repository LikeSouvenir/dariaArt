import {pool} from './conf/db.js';

// получение конкретной работы
const getExamples = (mail) => {
    return new Promise(function (resolve, reject) {
        resolve("db writing email (" + mail + ") to send examples")
    })
}

const sendMessage = async (mail, message) => {
    return await new Promise(function (resolve, reject) {
        resolve( "db writing message from the = " + mail + " :  " + message);
    })
}

const check = async () => {
    return await new Promise(function (resolve, reject) {
        pool.query('SELECT NOW()', (err, res) => {
            if (err) {
                console.error('Ошибка подключения:', err);
            } else {
                console.log('Подключение успешно:', res.rows[0]);
            }
        });
        return resolve(' db.js ');
    })
}

export {check, sendMessage, getExamples};