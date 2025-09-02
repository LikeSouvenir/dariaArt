import {createContext} from "react";

const AppContext = createContext({})
const AppProvider = ({children}) => {


    async function getExamples(mail) {
        return await fetch('http://localhost:5012/getExamples', {
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
        getExamples
    }
    return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}
export {AppProvider, AppContext}
// клик -> front -> context -> express(localhost:3001) -> db(query)