import React from 'react';

const banners =[
    {
        title:"Affordable Price For Car Servicing",
        description:'There are many variations of passages of  available, but the majority have suffered alteration in some form',
        next:"#slide2",
        prev:"#slide4",
        
    },
    {
        title:"Affordable Price For Car Servicing",
        description:'There are many variations of passages of  available, but the majority have suffered alteration in some form',
        next:"#slide3",
        prev:"#slide1",
        
    },
    {
        title:"Affordable Price For Car Servicing",
        description:'There are many variations of passages of  available, but the majority have suffered alteration in some form',
        next:"#slide4",
        prev:"#slide2",
        
    },
    {
        title:"Affordable Price For Car Servicing",
        description:'There are many variations of passages of  available, but the majority have suffered alteration in some form',
        next:"#slide1",
        prev:"#slide3",
        
    },
]

const Banner = () => {
    return (
      <div className='container mx-auto'>
          <div className="carousel w-full">
      {
        banners.map((slide,index)=>
             {
            return <div  style={{
                backgroundImage: `linear-gradient(45deg,rgba(7,25,82,0.7),rgba(0,0,0,0.3)), url(/assets/images/banner/${index+1}.jpg)`,
              }} key={index} id={`slide${index+1}`} className="carousel-item  bg-cover rounded-xl h-[85vh] relative w-full">

                <div className='pl-44 space-y-4 text-white mt-20'>
                    <h1 className='text-6xl w-1/2 font-semibold'>{slide.title}</h1>
                    <p className=' w-1/2'>{slide.description}</p>
                    <div className='flex gap-x-3'>
                        <button className='btn btn-primary px-4'>Discover More</button>
                        <button className='btn btn-primary px-4 btn-outline'>Latest Project</button>
                    </div>
                </div>
           
             <div className="absolute  right-5 bottom-5 flex gap-x-5 transform justify-between">
               <a href={slide.prev} className="btn btn-circle">❮</a>
               <a href={slide.next} className="btn btn-circle btn-primary">❯</a>
             </div>
           </div>
        })
      }
       
      </div>
      </div>
    );
};

export default Banner;