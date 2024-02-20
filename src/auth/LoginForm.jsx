
import { useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import validateLogin from "../validations/validate-login";
import useAuth from "../hooks/useAuth";
import Modal from "../components/Modals";
import RegisterForm from "./RegisterForm";
import { toast } from "react-toastify";


export default function LoginForm() {
  const [input, setInput] = useState({ email: '', password: '' });
  const [error, setError] = useState({});
  const [open,setOpen] = useState(false)

  const { login } = useAuth();

  const handleSubmitForm = async e => {
    try {
      e.preventDefault();
      console.log('123s')
      const validationError = validateLogin(input);
      if (validationError) {
        return setError(validationError);
      }
      await login(input);
      toast.success('login successfully');
    } catch (err) {
      console.log(err);
      toast.error(err.response?.data.message);
    }
  };

  const handleChangeInput = e => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  return (<>
    <form onSubmit={handleSubmitForm}>
      <div className="grid gap-4 ">
        <div>
          <Input
            placeholder="Email address"
            value={input.email}
            name="email"
            onChange={handleChangeInput}
            errorMessage={error.email}
          />
        </div>
        <div>
          <Input
            placeholder="Password"
            value={input.password}
            name="password"
            onChange={handleChangeInput}
            errorMessage={error.password}
          />
        </div>
        <div className="flex justify-center">
          <div>
            <Button type="submit">
              Log in
            </Button>
          </div>
          <div><Button type='button' bg="green" color="white" onClick={() => {setOpen(true)}}>
            Register
          </Button>
          </div>
        </div>
      </div>
    </form>
        
          {open && (
        <Modal title="Sign up" onClose={() => setOpen(false)} width={30}>
          <RegisterForm onSuccess={() => setOpen(false)} />
        </Modal>
      )}
      </>
  );
}