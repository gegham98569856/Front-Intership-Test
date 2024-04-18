import React, { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { fetchPosts } from '../../features/posts/postsSlice';
import Navbar from '../Navbar';
import useStyles from './style';

const PostsComponent: React.FC = () => {
  const style = useStyles()
  const dispatch = useAppDispatch();
  const posts = useAppSelector((state: any) => state.posts.posts);
  const status = useAppSelector((state: any) => state.posts.status);
  const error = useAppSelector((state: any) => state.posts.error);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchPosts());
    }
  }, [status, dispatch]);

  if (status === 'loading') return <div>Loading...</div>;
  if (status === 'failed') return <div>Error: {error}</div>;


  return (
    <div className={style.container}>
     <Navbar />
      {posts.map((post: any) => (
        <article key={post.id}>
                <div className={style.body}>
                    <h2>{post.title}</h2>
                    
                    <p>{post.body}</p>
                </div>
        </article>
      ))}
    </div>
  );
};

export default PostsComponent;


