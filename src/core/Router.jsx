import {createBrowserRouter} from "react-router-dom";
import Welcome from "../ui/main/Welcome";
const router = createBrowserRouter([
    {
        path: "/",
        element: <Welcome/>
    }
])
export {router};