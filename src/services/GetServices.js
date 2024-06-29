export const GetServices =async()=>{
    const res = await fetch('http://localhost:3000/services/api/getall')
    const services =res.json()
    return services
  }
export const GetServiceDetail =async(id)=>{
    const res = await fetch(`http://localhost:3000/services/api/${id}`)
    const service =res.json()
    return service
  }