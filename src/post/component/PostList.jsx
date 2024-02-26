import PostItem from './PostItem';
import usePost from '../hooks/user-post';

export default function PostList() {
  const { posts } = usePost();

  return (
    <div className="flex flex-col gap-4">
      {posts.map(post => (
        <PostItem key={post.id} post={post} />
      ))}
    </div>
  );
}