import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";


const ServiceCard = ({service}) => {
console.log(service);
    const{img,price,title,service_id,_id}=service;
    // console.log(service);
    return (
        <div className="  bg-base-100 shadow-xl">
            <div className="h-2/3">
            <Image src={img} alt="" width={220} height={220}  className="h-full w-full"  />
            </div>
       
        <div className="card-body  h-1/3">
          <h2 className="card-title">{title}</h2>
          <div className="flex justify-between">
          <p className="text-primary">price:{price}$</p> <Link href={`/checkout/${service_id}`}><button className=" "><FaArrowRight></FaArrowRight></button></Link>

          </div>
       <div>
        <Link href={`services/${_id}`}><button className="btn btn-primary">View Details</button></Link>
       </div>
          
        </div>
      </div>
    );
};

export default ServiceCard;