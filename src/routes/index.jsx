import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import CommunityPage from "../pages/CommunityPage";
import NewsPage from "../pages/NewsPage";
import SharePage from "../pages/SharePage";
import ProblemPage from "../pages/ProblemPage";
import { RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
    {path:'/',element: <HomePage />},
    {path:'/community/:userId',element: <CommunityPage />},
    {path:'/news/:userId',element: <NewsPage />},
    {path:'/share/:userId',element: <SharePage />},
    {path:'/problem/:userId',element: <ProblemPage />}
])


export default function Router(){
    return <RouterProvider router={router} />
}