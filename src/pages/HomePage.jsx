

import IMG from "../components/photos";
import { getToken } from "../utils/local-storage";

export default function HomePage() {
    


    return <div className="flex-col min-h-100% w-100%">
        <div className="flex justify-between w-100% mt-2">
            <div className="text-6xl">
                <div>Your Community</div>
                <div className="font-bold text-5xl">Your Choice</div>
            </div>
            

        </div>
        <div className="flex">
            <a href='/news/1'>
                <IMG link={'../../access/valorant.jpg'}>
                </IMG></a>
            <a href='/news/1'>
                <IMG link={'../../access/fifa-online4.png'}>
                </IMG></a>
            <a href='/news/1'>
                <IMG link={'../../access/LOL.jpg'}>
                </IMG></a>
            <a href='/news/1'>
                <IMG link={'../../access/Dragonica.jpg'}>
                </IMG></a>

        </div>
    </div>
}