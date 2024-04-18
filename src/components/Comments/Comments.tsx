import React, { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { fetchComments } from '../../features/comments/commentsSlice';
import Navbar from '../Navbar';
import useStyles from '../Posts/style';

const CommentsComponent: React.FC = () => {
  const style = useStyles();  
  const dispatch = useAppDispatch();
  const comments = useAppSelector((state: any) => state.comments.comments);
  const status = useAppSelector((state: any) => state.comments.status);
  const error = useAppSelector((state: any) => state.comments.error);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchComments());
    }
  }, [status, dispatch]);

  if (status === 'loading') return <div>Loading...</div>;
  if (status === 'failed') return <div>Error: {error}</div>;

  return (
    <div className={style.container}>
      <Navbar />
      {comments.map((comment: any) => (
        <div key={comment.id} className={style.body}>
          <p>Post ID : {comment.id}</p>
          <p>Name :{comment.name}</p>
          <p>Email : <span>{comment.email}</span></p>
          <p>Comments . </p>
          <p>{comment.body}</p>
        </div>
      ))}
    </div>
  );
};

export default CommentsComponent;
