import pool from './conf/db.js';

const sampleImagesMainWindow = [12, 11, 23, 13, 29, 32, 26, 15, 30, 27, 16, 24];
const getSamplesImage = async () => {
    try {
        const results = await pool.query("SELECT * FROM examples WHERE id = ANY ($1)",
            [sampleImagesMainWindow]);
        return results.rows;
    } catch (error) {
        throw error;
    }
}
//запрос на получение списка работ
const getWorks = async () => {
    try {
        const results = await pool.query("SELECT * FROM works");
        return results.rows;
    } catch (error) {
        throw error;
    }
}
// получение конкретной работы
const getPathsImages = async (path) => {
    const defPath = "/img/";
    const searchPath = `${defPath}${path}%`;
    try {
        const results = await pool.query('SELECT * FROM examples WHERE img_path LIKE $1', [searchPath])
        return results.rows;
    } catch (error) {
        throw error;
    }
}

const getExamples = async (mail) => {
    try {
        const results = await pool.query('INSERT INTO want_examples (email) VALUES ($1)',
            [mail])
        return results.rows;
    } catch (error) {
        throw error;
    }
}

const sendMessage = async (mail, message) => {
    try {
        const results = await pool.query('INSERT INTO send_message (email, message) VALUES ($1, $2)',
            [mail, message])
        return results.rows;
    } catch (error) {
        throw error;
    }
}


export {sendMessage, getExamples, getPathsImages, getWorks, getSamplesImage};