import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from 'axios';
import Services from '../services/Services';

const WorkerShow = ({}) => {
  const [worker, setWorker] = useState({name: '', phone: 0, email: ''})
  let params = useParams()

  useEffect( () => {
    axios.get(`/api/workers/${params.workerId}`)
      .then( res => {
        setWorker(res.data)
      }) 
      .catch( err => console.log(err))
  }, [])

  return (
    <>
      <h1>{worker.name}</h1>
      <p>{worker.phone}</p>
      <p>{worker.email}</p>
      <p>{params.workerId}</p>
      <button>Edit</button>
      <button>Delete</button>
      <Services workerId={params.workerId} />
    </>
  )
} 

export default WorkerShow;