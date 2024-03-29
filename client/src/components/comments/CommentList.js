import { Link } from 'react-router-dom';
import CommentShow from './CommentShow';

const CommentList = ({ comments, serviceId, deleteComment, updateComment }) => {
  return (
    <>
      { comments.map( p => 
        <>
          
          <CommentShow 
            {...p} 
            serviceId={serviceId} 
            deleteComment={deleteComment} 
            updateComment={updateComment}
          />
        </> 
      )}
    </>
  )
}

export default CommentList;