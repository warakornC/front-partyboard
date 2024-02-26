import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import CommunityPage from "../pages/CommunityPage";
import NewsPage from "../pages/NewsPage";
import SharePage from "../pages/SharePage";
import ProblemPage from "../pages/ProblemPage";
import { RouterProvider } from "react-router-dom";
import RedirectIfAuthenticated from "../components/RedirectAuthenticated";
import Container from "../layouts/Container";


const router = createBrowserRouter([
    
    {path:'/',element: 
    <RedirectIfAuthenticated><Container /><HomePage />
    </RedirectIfAuthenticated>
    
},
{path:'/news/1/',
element: <><Container /><NewsPage /></>,
 },
{path:'/share/1',element:<><Container /><SharePage /></> },
{path:'/problem/1',element:<><Container /><ProblemPage /></>},
{path:'/community/1',element:<><Container /><CommunityPage /></>}
    // {path:'/valorant/news/',element: <NewsPage />},
    // {path:'/valorant/share/',element: <SharePage />},
    // {path:'/valorant/problem/',element: <ProblemPage />},
    // {path:'/valorant/community/',element: <CommunityPage />},
    // {path:'/fifaOnline4/news/',element: <NewsPage />},
    // {path:'/fifaOnline4/share/',element: <SharePage />},
    // {path:'/fifaOnline4/problem/',element: <ProblemPage />},
    // {path:'/fifaOnline4/community/',element: <CommunityPage />},
    // {path:'/LOL/news/',element: <NewsPage />},
    // {path:'/LOL/share/',element: <SharePage />},
    // {path:'/LOL/problem/',element: <ProblemPage />},
    // {path:'/LOL/community/',element: <CommunityPage />},
    // {path:'/dragonica/news/',element: <NewsPage />},
    // {path:'/dragonica/share/',element: <SharePage />},
    // {path:'/dragonica/problem/',element: <ProblemPage />},
    // {path:'/dragonica/community/',element: <CommunityPage />}
])


export default function Router(){
    return <RouterProvider router={router} />
}