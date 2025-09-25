import {createContext, useCallback} from "react";

const AppContext = createContext({})
const AppProvider = ({children}) => {
    const BASE_URL = import.meta.env.VITE_API_URL;

    async function getExamples(email) {
        return await fetch(`${BASE_URL}/getExamples`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
            })
        }).then(response => {
            return response.ok;
        })
    }

    async function sendMessage(email, message) {
        return await fetch(`${BASE_URL}/sendMessage`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                message,
            })
        }).then(response => {
            return response.text();
        }).then(data => {
            return data;
        });
    }

    async function getWorks() {
        return await fetch(`${BASE_URL}/getWorks`)
            .then(async response => {
                return await response.json();
            }).then(data => {
                console.log("getworks");
                console.log(data);
                return data;
            });
    }

    const getImages = useCallback(async(path) => {
        return await fetch(`${BASE_URL}/getPathsImages/${path}`)
            .then(async response => {
                return await response.json();
            }).then(data => {
                console.log(data);
                return data;
            }).catch(err => {
                console.log(err);
                throw err;
            });
    }, [BASE_URL]);

    const getSamplesImage = useCallback(async() => {
        return await fetch(`${BASE_URL}/getSamplesImage`)
            .then(async response => {
                return await response.json();
            }).then(data => {
                console.log(data);
                return data;
            }).catch(err => {
                console.log(err);
                throw err;
            });
    }, [BASE_URL]);
    const value = {
        getExamples, sendMessage, getImages, getWorks, getSamplesImage
    }
    return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}
export {AppProvider, AppContext}
