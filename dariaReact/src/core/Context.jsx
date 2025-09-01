import {createContext, useState} from "react";

const AppContext = createContext({})
const AppProvider = ({children}) => {
    /**/const [merchants, setMerchants] = useState(false);/**/

    // тестовая
    /**/function getMerchant() {
        fetch('http://localhost:3001')
            .then(response => {
                return response.text();
            })
            .then(data => {
                setMerchants(data + " context.js ");
            });
    }/**/

    async function getExamples(mail) {
        return await fetch('http://localhost:3001/getExamples', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: mail,
            })
        }).then(response => {
            return response.text();
        }).then(data => {
            console.log("fetch       " + data);
            return data;
        });
    }

    const value = {
        /**/merchants/**/, getMerchant, getExamples
    }
    return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}
export {AppProvider, AppContext}
// клик -> front -> context -> express(localhost:3001) -> db(query)