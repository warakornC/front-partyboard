

import { useParams } from "react-router-dom"
import PostContextProvider from "../post/context/PostContext"
import CreatePostContainer from "../post/component/CreatePostContainer"
import PostList from "../post/component/PostList"

export default function NewsPage(){
    const { gameId } = useParams()
    console.log(gameId)
    

    return <div className="flex">
    <div className="flex flex-col justify-center gap-5 m-4">
        <a>News</a>
        <a>Share</a>
        <a>Community</a>
        <a>Problem</a>
    </div>
    <div>
        <div></div>
        <div>
        <div className="flex flex-col gap-4 px-4 py-8 max-w-[44rem] mx-auto">
      <PostContextProvider>
        <CreatePostContainer />
        <PostList />
      </PostContextProvider>
    </div>
        </div>
    </div>
    </div> 
}