import { useState } from 'react';
import Avatar from '../components/Avatar';
import { RightFromBracketIcon } from '../icons';
import { useEffect } from 'react';
import { useRef } from 'react';
import useAuth from '../hooks/useAuth';
import { Link } from 'react-router-dom';

export default function Dropdown() {
  const [open, setOpen] = useState(false);

  const dropdownEl = useRef(null);

  if (!useAuth) {

    return null;
  }
  const authUser = useAuth()
  const id = authUser?.id || 1
  const profileImage = authUser?.profileImage || "../../access/profile.png"
  const firstName = authUser?.firstName || 1
  const lastName = authUser?.lastName || 1
  const { logout } = useAuth()


  useEffect(() => {
    if (open) {
      const handleClickOutside = e => {
        if (dropdownEl.current && !dropdownEl.current.contains(e.target))
          setOpen(false);
      };

      document.addEventListener('mouseup', handleClickOutside);
      return () => document.removeEventListener('mouseup', handleClickOutside);
    }
  }, [open]);

  return (
    <div className="relative" ref={dropdownEl}>
      <div role="button" onClick={() => setOpen(!open)}>
        <Avatar src={profileImage} />
      </div>
      {open && (
        <div className="absolute right-0 translate-y-1.5">
          <div style={{ backgroundColor: 'white' }} className="w-96 rounded-lg shadow-[0_0_6px_rgb(0,0,0,0.2)] p-2">
            <Link to={`/profile/${id}`} onClick={() => setOpen(false)}>
              <div
                className="flex gap-2 items-center hover:bg-gray-100 p-2 rounded-lg"
                role="button"
              >
                <Avatar size={3.75} src={profileImage} />
                <div className="flex flex-col">
                  <span className="font-semibold">
                    {firstName} {lastName}
                  </span>
                  <span className="text-sm text-gray-500">
                    See your profile
                  </span>
                </div>
              </div>
            </Link>
            <hr className="my-2 border border-gray-300" />
            <div
              className="flex gap-2 items-center hover:bg-gray-100 p-2 rounded-lg"
              role="button"
              onClick={logout}
            >
              <div className="bg-gray-300 w-9 h-9 rounded-full flex items-center justify-center">
                <RightFromBracketIcon />
              </div>
              <span className="font-semibold text-sm">Log out</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}