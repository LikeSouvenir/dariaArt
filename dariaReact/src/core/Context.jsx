import {createContext} from "react";

const AppContext = createContext({})
const AppProvider = ({ children }) => {
    // const [wallet, setWallet] = useState(null);
    // const [userInfo, setUserInfo] = useState([]);
    // useEffect(() => {
    //     getUserInfo()
    // }, [wallet])

    const value = {
        // wallet, login, logout, getUserInfo, userInfo
    }
    return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}
export { AppProvider, AppContext }