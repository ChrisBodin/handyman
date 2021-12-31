import { useState, useEffect } from 'react';
import axios from 'axios';
import WorkerForm from './WorkerForm';
import WorkerList from './WorkerList';

const Workers = ({}) => {
  const [workers, setWorkers] = useState([])

  useEffect( () => {
    axios.get('/api/workers')
      .then( res => {
        setWorkers(res.data)
      })
      .catch( err => console.log(err))
  }, [])

  const addWorker = (worker) => {
    axios.post('/api/workers', { worker })
      .then( res => {
        setWorkers([...workers, res.data])
      })
      .catch( err => console.log(err))
  }

  const updateWorker = (id, worker) => {
    axios.put(`/api/workers/${id}`, { worker})
      .then( res => {
        const newUpdatedWorkers = workers.map( b => {
          if (b.id === id) {
            return res.data
          }
          return b 
        })
        setWorkers(newUpdatedWorkers)
      })
      .catch( err => console.log(err))
  }

  const deleteWorker = (id) => {
    axios.delete(`/api/workers/${id}`)
      .then( res => setWorkers( workers.filter( b => b.id !== id )))
      .catch( err => console.log(err))
  }

  return (
    <>
      <h1>Workers Page</h1>
      <WorkerForm addWorker={addWorker} />
      <WorkerList 
        workers={workers} 
        updateWorker={updateWorker}
        deleteWorker={deleteWorker}
      />
    </>
  )
}

export default Workers;