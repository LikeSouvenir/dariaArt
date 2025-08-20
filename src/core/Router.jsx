import {createBrowserRouter} from "react-router-dom";
import Welcome from "../ui/main/Welcome";
import Examples from "../ui/main/Examples.jsx";
import About from "../ui/main/About.jsx";
import Contacts from "../ui/main/Contacts.jsx";
const router = createBrowserRouter([
    {
        path: "/",
        element: <Welcome/>
    },
    {
        path: "/examples",
        element: <Examples/>
    },
    {
        path: "/about",
        element: <About/>
    },
    {
        path: "/contacts",
        element: <Contacts/>
    }
])
export {router};