import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../pages/Home";
import Video from "../pages/Video";


const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: 'video/:videoId',
                element: <Video/>
            }
        ]
    }
])

export default router;