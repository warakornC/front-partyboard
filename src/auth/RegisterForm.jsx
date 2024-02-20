import { useState } from 'react';
import { toast } from 'react-toastify';
import useAuth from '../hooks/useAuth';
import Input from '../components/Input';
import Button from '../components/Button';
import validateRegister from '../validations/validate-register';




const initial = {
  firstName: '',
  lastName: '',
  citizenIdentifyNumber: '',
  email: '',
  mobile:'',
  password: '',
  confirmPassword: ''
};

export default function RegisterForm({ onSuccess }) {
  const [input, setInput] = useState(initial);
  const [error, setError] = useState({});

  const { register } = useAuth();

  const handleSubmitForm = async e => {
    try {
      console.log("first")
      e.preventDefault();
      const validateError = validateRegister(input);
      if (validateError) {
        return setError(validateError);
      }
      // delete input.confirmPassword
      await register(input);
      toast.success('register successfully');
      onSuccess();
    } catch (err) {
      if (err.response?.data.message === 'EMAIL_IN_USE') {
        return setError({ email: 'already in use' });
      }
      toast.error(err.response?.data.message);
    }
  };

  const handleChangeInput = e => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmitForm}>
      <div className="grid grid-cols-2 p-4 gap-4" >
        <div>
          <Input
            placeholder="First name"
            value={input.firstName}
            name="firstName"
            onChange={handleChangeInput}
            errorMessage={error.firstName}
          />
        </div>
        <div>
          <Input
            placeholder="Last name"
            value={input.lastName}
            name="lastName"
            onChange={handleChangeInput}
            errorMessage={error.lastName}
          />
        </div>
        <div>
          <Input
            placeholder="Citizen Identify Number"
            value={input.citizenIdentifyNumber}
            name="citizenIdentifyNumber"
            onChange={handleChangeInput}
            errorMessage={error.citizenIdentifyNumber}
          />
        </div>
        <div className="col-span-full">
          <Input
            placeholder="Email address"
            value={input.email}
            name="email"
            onChange={handleChangeInput}
            errorMessage={error.emailOrMobile}
          />
        </div>
        <div className="col-span-full">
          <Input
            placeholder="Mobile"
            value={input.mobile}
            name="mobile"
            onChange={handleChangeInput}
            errorMessage={error.mobile}
          />
        </div>
        <div className="col-span-full">
          <Input
            placeholder="Password"
            value={input.password}
            name="password"
            onChange={handleChangeInput}
            type="password"
            errorMessage={error.password}
          />
        </div>
        <div className="col-span-full">
          <Input
            placeholder="Confirm password"
            value={input.confirmPassword}
            name="confirmPassword"
            onChange={handleChangeInput}
            type="password"
            errorMessage={error.confirmPassword}
          />
        </div>
        <div className="col-span-full text-center">
          <Button type="submit" bg="green" color="white">
            Sign up
          </Button>
        </div>
      </div>
    </form>
  );
}