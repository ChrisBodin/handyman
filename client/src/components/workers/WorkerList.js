import { Link } from 'react-router-dom';
import Worker from './Worker';

const WorkerList = ({ workers, updateWorker, deleteWorker }) => {
  return (
    <>
      { workers.map( b => 
        <>
          <Worker 
            {...b} 
            key={b.id} 
            updateWorker={updateWorker} 
            deleteWorker={deleteWorker} 
          />
          <Link to={`/workers/${b.id}`}>Show</Link>
          <br />
        </>
      )}
    </>
  )
}

export default WorkerList;