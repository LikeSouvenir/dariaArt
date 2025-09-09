import pool from './conf/db.js';

//запрос на получение списка работ
const getWorks = async () => {
    return new Promise(async (resolve, reject) => {
        pool.query("SELECT * FROM works", (err, results) => {
            if (err)
                reject(err);
            resolve(results.rows);
        })
    })
}
// получение конкретной работы
const getPaths = async (name) => {
    // <Gallery_M path={'/src/assets/examples/*.{jpg,png,webp}'}/>
    const defPath = "/backend/img/";
    const imgExtensions = "/*.{jpg,png,webp}";
    return await new Promise(function (resolve, reject) {
        // pool.query('SELECT * FROM examples WHERE img_path LIKE $1', [defPath + name + imgExtensions],
        //     function (err, results) {
        //         if (err)
        //             reject(err);
        //         resolve(results);
        //     });
        resolve("GET PATH DATABASE; ");
    })
}

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
        pool.query('INSERT INTO send_message (email, message) VALUES ($1, $2)',
            [mail, message],
            function (err, results) {
                if (err)
                    reject(err);
                resolve(results);
            });
    })
}

export {sendMessage, getExamples, getPaths, getWorks};