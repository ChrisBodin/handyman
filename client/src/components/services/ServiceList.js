import { Link } from 'react-router-dom';
import ServiceShow from './ServiceShow';

const ServiceList = ({ services, workerId, deleteService, updateService }) => {
  return (
    <>
      { services.map( p => 
        <>
          
          <ServiceShow 
            {...p} 
            workerId={workerId} 
            deleteService={deleteService} 
            updateService={updateService}
          />
        </> 
      )}
    </>
  )
}

export default ServiceList;