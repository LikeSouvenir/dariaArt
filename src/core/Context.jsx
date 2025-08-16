import {createContext} from "react";

const AppContext = createContext({})
const AppProvider = ({ children }) => {
    // const [wallet, setWallet] = useState(null);
    // const [userInfo, setUserInfo] = useState([]);
    // useEffect(() => {
    //     getUserInfo()
    // }, [wallet])
    //
    // async function login() {
    //     return 1;
    // }
    // function logout() {
    //     setWallet(null);
    //
    // }
    // async function getUserInfo() {
    //     if (wallet) {
    //         return 1;
    //     }
    //     return 0;
    // }
    const value = {
        // wallet, login, logout, getUserInfo, userInfo
    }
    return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}
export { AppProvider, AppContext }