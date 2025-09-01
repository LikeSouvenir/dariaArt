import {Pool} from "pg";

const pool = new Pool({
    user: 'website_user',
    host: 'localhost',
    database: 'mywebsite_db',
    password: 'secure_password_123',
    port: 5432,
});

// Пример использования
const check = async () => {
    return await new Promise(function (resolve,reject) {
        // pool.query('SELECT NOW()', (err, res) => {
        //     if (err) {
        //         console.error('Ошибка подключения:', err);
        //     } else {
        //         console.log('Подключение успешно:', res.rows[0]);
        //     }
        // });
        return resolve('');

    })
}

export { check }