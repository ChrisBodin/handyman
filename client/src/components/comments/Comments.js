import { useState, useEffect } from 'react';
import axios from 'axios';
import CommentForm from './CommentForm';
import CommentList from './CommentList';

const Comments = ({ serviceId }) => {
  const [comments, setComments] = useState([])

  useEffect( () => {
    axios.get(`/api/services/${serviceId}/comments`)
      .then( res => setComments(res.data))
      .catch( err => console.log(err))
  }, [])

  const addComment = (comment) => {
    axios.comment(`/api/services/${serviceId}/comments`, { comment })
      .then( res => setComments([ ...comments, res.data ]))
      .catch( err => console.log(err))
  }

  const deleteComment = (id) => {
    axios.delete(`/api/services/${serviceId}/comments/${id}`)
      .then( res => {
        alert(res.data.message)
        setComments(comments.filter( p => p.id !== id ))
      })
      .catch( err => console.log(err))
  }

  const updateComment = (id, comment) => {
    axios.put(`/api/workers/${serviceId}/comments/${id}`, { comment })
      .then( res => {
        const newUpdatedComments = comment.map( p => {
          if (p.id === id) {
            return res.data
          }
          return p
        })
        setComments(newUpdatedComments)
      })
      .catch( err => console.log(err))
  }

  return (
    <>
      <h1>Comments</h1>
      <CommentForm addComment={addComment} />
      <CommentList 
        comments={comments} 
        serviceId={serviceId} 
        deleteComment={deleteComment}
        updateComment={updateComment}
      />
    </>
  )
}

export default Comments;