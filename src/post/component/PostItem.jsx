import { Link } from 'react-router-dom';

import Dropdown from './Dropdown';
import formatTimeAgo from '../../utils/time-ago';
import Avatar from '../../components/Avatar';

export default function PostItem({ post }) {
  const {
    createdAt,
    title,
    image,
    userId,
    user: { profileImage, firstName, lastName }
  } = post;
  return (
    <div className="bg-white rounded-lg px-4 pt-3 shadow">
      <div className="flex items-center">
        <div className="flex-1 flex gap-2 items-center">
          <Link to={`/profile/${userId}`}>
            <Avatar src={profileImage} />
          </Link>
          <div>
            <Link
              to={`/profile/${userId}`}
              className="text-sm font-medium hover:underline"
            >
              {firstName} {lastName}
            </Link>
            <small className="block text-xs text-gray-500">
              {formatTimeAgo(createdAt)}
            </small>
          </div>
        </div>
        <Dropdown />
      </div>

      <div className="mt-3">
        {title && <span className="text-sm">{title}</span>}
        {image && (
          <div className="-mx-4 mt-3 flex justify-center bg-gray-800">
            <img src={image} alt="post" />
          </div>
        )}
      </div>

      
    </div>
  );
}