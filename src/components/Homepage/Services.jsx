import React from 'react';

import Servicecard from '../ServiceCard.jsx';
import { GetServices } from '@/services/GetServices.js';



const Services =async () => {
const {services} = await GetServices()

    return (
        <div className='my-5'>
                   <div className="space-y-3 text-center">
                <h1 className="text-2xl font-bold text-primary">Services</h1>
                <h1 className="text-5xl font-bold">Our Services</h1>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable. </p>
                </div>

                <div className='grid grid-cols-1 gap-5 mt-10 lg:grid-cols-3 mx-auto'>
                  {
                    services?.map((service,index)=>{
                     return <Servicecard key={index} service={service}></Servicecard>
                    })
                  }
                </div>
            
        </div>
    );
};

export default Services;