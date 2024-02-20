import { useState } from "react";
import LoginForm from "../auth/LoginForm";
import Button from "./Button";
import Modal from "./Modals";

export default function LoginContainer({onClose }) {
    const [open,setOpen] = useState(false)
    return (<div className="w-100%">
    <div className="w-100%">
    <Button width={100}  onClick={ () =>setOpen(true)}>Log in</Button>
    </div>
    {open && (<Modal title="Log in" onClose={() => setOpen(false)} width={30}><LoginForm /></Modal>)}
    </div>
)
}