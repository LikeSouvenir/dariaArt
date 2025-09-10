import {createContext} from "react";

const AppContext = createContext({})
const AppProvider = ({children}) => {

    async function getExamples(email) {
        return await fetch('http://localhost:5012/getExamples', {
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
        return await fetch('http://localhost:5012/sendMessage', {
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
        return await fetch(`http://localhost:5012/getWorks`)
        .then(async response => {
            return await response.json();
        }).then(data => {
            console.log(data);
            return data;
        });
    }

    async function getImages(path) {
        console.log("getImages")
        return await fetch(`http://localhost:5012/getPathsImages/${path}`).then(response => {
            return response.json();
        }).then(data => {
            return data;
        });
    }

    const value = {
        getExamples, sendMessage, getImages, getWorks
    }
    return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}
export {AppProvider, AppContext}
// клик -> front -> context -> express(localhost:3001) -> db(query)