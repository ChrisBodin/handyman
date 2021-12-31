import { useState } from 'react';
import WorkerForm from './WorkerForm';

const Worker = ({ id, name, phone, email, updateWorker, deleteWorker }) => {
  const [editing, setEdit] = useState(false)

  return (
    <>
      <h2>{name}</h2>
      <p>{phone}</p>
      <p>{email}</p>
      {
        editing ?
        <>
          <WorkerForm
            id={id}
            name={name}
            email={email}
            phone={phone}
            updateWorker={updateWorker}
            setEdit={setEdit}
          />
          <button onClick={ () => setEdit(false) }>Cancel</button>
        </>
        :
        <button onClick={ () => setEdit(true) }>Edit</button>
      }
      <button onClick={ () => deleteWorker(id) }>Delete</button>
    </>
  )
}

export default Worker;