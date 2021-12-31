import { useState, useEffect } from 'react';
import axios from 'axios';
import ServiceForm from './ServiceForm';
import ServiceList from './ServiceList';

const Services = ({ workerId }) => {
  const [services, setServices] = useState([])

  useEffect( () => {
    axios.get(`/api/workers/${workerId}/services`)
      .then( res => setServices(res.data))
      .catch( err => console.log(err))
  }, [])

  const addService = (service) => {
    axios.service(`/api/workers/${workerId}/services`, { service })
      .then( res => setServices([ ...services, res.data ]))
      .catch( err => console.log(err))
  }

  const deleteService = (id) => {
    axios.delete(`/api/workers/${workerId}/services/${id}`)
      .then( res => {
        alert(res.data.message)
        setServices(services.filter( p => p.id !== id ))
      })
      .catch( err => console.log(err))
  }

  const updateService = (id, service) => {
    axios.put(`/api/workers/${workerId}/services/${id}`, { service })
      .then( res => {
        const newUpdatedServices = service.map( p => {
          if (p.id === id) {
            return res.data
          }
          return p
        })
        setServices(newUpdatedServices)
      })
      .catch( err => console.log(err))
  }

  return (
    <>
      <h1>Services</h1>
      <ServiceForm addService={addService} />
      <ServiceList 
        services={services} 
        workerId={workerId} 
        deleteService={deleteService}
        updateService={updateService}
      />
    </>
  )
}

export default Services;