import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import ServiceForm from './ServiceForm';


const ServiceShow = ({ id, title, cost, time, deleteService, updateService }) => {
  const [editing, setEdit] = useState(false)

  return(
    <>
      <h2>{title}</h2>
      <h4>Time to Complete: {time}</h4>
      <p>{cost}</p>
      { editing ?
        <>
          <ServiceForm
            id={id}
            title={title}
            time={time}
            cost={cost}
            updateService={updateService}
            setEdit={setEdit}
          />
          <button onClick={() => setEdit(false)}>Cancel</button>
        </>
        :
        <button onClick={() => setEdit(true)}>Edit</button>
      }
      <button onClick={() => deleteService(id)}>Delete</button>
    </>
  )
}

export default ServiceShow;