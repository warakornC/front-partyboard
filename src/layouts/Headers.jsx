import { Link } from 'react-router-dom';
import Dropdown from './Dropdown';
import { getToken } from '../utils/local-storage';
import LoginContainer from '../components/LoginContainer';



export default function Header() {
  const existUser = getToken()
  return (
    <header className="flex justify-between px-4">
      <div >
        <Link to="/">
          <img src="../../access/me.png" className='w-10' />
        </Link>
      </div>
     
      <div className="justify-self-end">
      {existUser ? <Dropdown /> : <LoginContainer />}
      </div>
    </header>
  );
}