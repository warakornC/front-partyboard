import { useState } from "react";
import Button from "../components/Button";
import ModalLogin from "../components/ModalsLogin";
import LoginForm from "../auth/LoginForm";

export default function HomePage() {
    const [open,setOpen] = useState(false)
    return <div className="m-auto flex justify-between min-h-768 w-768">
        <div className="flex justify-between">
            <div className="font-size-64">
                <div>Your Community</div>
                <div className="font-bold">Your Choice</div>
            </div>
            <div>
                <Button onClick={ () =>setOpen(true)}>Log in</Button>
                </div>
                {open && (<ModalLogin onClose={() =>setOpen(false)}><LoginForm /></ModalLogin>)}
           
        </div>
        <div>
            <a></a>
            <a></a>
            <a></a>
            <a></a>
        </div>
    </div>
}