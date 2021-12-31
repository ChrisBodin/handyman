import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import CommentForm from './CommentForm';


const CommentShow = ({ id, author, tools, request, deleteComment, updateComment }) => {
  const [editing, setEdit] = useState(false)

  return(
    <>
      <h2>{author}</h2>
      <h4>Tools to Complete: {tools}</h4>
      <p>{request}</p>
      { editing ?
        <>
          <CommentForm
            id={id}
            author={author}
            tools={tools}
            request={request}
            updateComment={updateComment}
            setEdit={setEdit}
          />
          <button onClick={() => setEdit(false)}>Cancel</button>
        </>
        :
        <button onClick={() => setEdit(true)}>Edit</button>
      }
      <button onClick={() => deleteComment(id)}>Delete</button>
    </>
  )
}

export default CommentShow;