import { useState } from 'react';
import { ImageIcon } from '../../icons/index';

import { useRef } from 'react';
import { toast } from 'react-toastify';
import Spinner from '../../components/Spinners';
import useAuth from '../../hooks/useAuth';

export default function PostForm({ onSubmit }) {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const fileInputEl = useRef(null);

  const authUser  = useAuth();
  const firstName = authUser?.firstName || 'Anonymous'
  const handleSubmitForm = async e => {
    try {
      e.preventDefault();

      if (!title.trim() && !image) {
        return toast.error('Please enter title or select image');
      }

      const formData = new FormData();

      if (title) {
        formData.append('title', title);
      }
      if (image) {
        formData.append('image', image);
      }
      setLoading(true);
      await onSubmit(formData);
      toast.success('create a new post successfully');
    } catch (err) {
      toast.error(err.response?.data.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading && <Spinner />}
      <form onSubmit={handleSubmitForm}>
        <div className="flex flex-col gap-4 p-4">
          <textarea
            className="block w-full outline-none resize-none"
            rows="5"
            placeholder={`What's on your mind, ${firstName}`}
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
          <input
            type="file"
            className="hidden"
            ref={fileInputEl}
            onChange={e => {
              if (e.target.files[0]) {
                setImage(e.target.files[0]);
              }
            }}
          />

          {image ? (
            <div
              className="relative"
              onClick={() => fileInputEl.current.click()}
            >
              <img
                src={URL.createObjectURL(image)}
                alt="post"
                className="mx-auto"
              />
              <button
                className="absolute top-1 right-1 font-black"
                onClick={e => {
                  e.stopPropagation();
                  setImage(null);
                  fileInputEl.current.value = '';
                }}
              >
                &#10005;
              </button>
            </div>
          ) : (
            <div
              className="bg-gray-100 hover:bg-gray-200 flex flex-col items-center py-12 rounded-lg"
              role="button"
              onClick={() => fileInputEl.current.click()}
            >
              <div className="h-10 w-10 bg-gray-300 flex justify-center items-center rounded-full">
                <ImageIcon />
              </div>
              <span>Add Photo</span>
            </div>
          )}

          <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-1.5 rounded-md text-sm font-medium">
            Post
          </button>
        </div>
      </form>
    </>
  );
}