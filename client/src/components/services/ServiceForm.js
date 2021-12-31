import { useState, useEffect } from 'react';

const ServiceForm = ({ addService, id, title, cost, time, updateService, setEdit }) => {
  const [service, setService] = useState({ title: '', cost: 0.0, time: 0.0 })

  useEffect( () => {
    if (id) {
      setService({ title, cost, time })
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (id) {
      updateService(id, service)
      setEdit(false)
    } else {
      addService(service)
    }
    setService({ title: '', cost: 0.0, time: 0.0 })
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input 
          name='title'
          value={service.title}
          onChange={(e) => setService({ ...service, title: e.target.value })}
          required
        />
        <br />
        <label>Cost:</label>
        <textarea
          name='cost'
          value={service.cost}
          onChange={(e) => setService({ ...service, cost: e.target.value })}
          required
        ></textarea>
        <br />
        <label>Time to Complete:</label>
        <input 
          name='time'
          value={service.time}
          onChange={(e) => setService({ ...service, time: e.target.value })}
          required
          type="number"
        />
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default ServiceForm;