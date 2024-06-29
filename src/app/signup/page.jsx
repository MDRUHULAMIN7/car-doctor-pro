"use client"
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const page = () => {
    const handleSignup=async(e)=>{
      e.preventDefault()
      const newUser = {
        name:e.target.name.value,
       email:e.target.email.value,
        password:e.target. password.value,
      }
      const resp = await fetch("http://localhost:3000/signup/api", {
        method: "POST",
        body: JSON.stringify(newUser),
        headers: {
          "content-type": "application/json",
        },
      });
      if(resp.status===200){
        e.target.reset();
        console.log(resp);
      }

    }
    return (
        <div>
              <div className="h-5/6 ">
          
          <div className=" px-5 h-full">
  <div className="h-full md:flex mt-5 mb-4 justify-center gap-x-5">
  <div className="text-center lg:text-left">
   
    <Image src={"/assets/images/login/login.svg"} width={500} height={500} alt="" />
    
  </div>
  <div className="card  w-full max-w-sm border-2 border-base-300 rounded-none bg-base-100">
  <h1 className="text-3xl font-bold text-center mt-2">SignUp</h1>
    <form onSubmit={handleSignup} className="card-body">
      <div className="form-control">
        <label className="label">
          <span className="label-text">Name</span>
        </label>
        <input type="text" name="name" placeholder="name" className="input input-bordered" required />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Email</span>
        </label>
        <input type="email" placeholder="email" name="email" className="input input-bordered" required />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Password</span>
        </label>
        <input type="password" placeholder="password" name="password" className="input input-bordered" required />
       
      </div>
      <div className="form-control mt-6">
        <button className="btn btn-primary">SigUp</button>
      </div>
    </form>
    <div>
  
    </div>
    <p className="text-center m-3">Have an account<Link href={'/signin'} className="ml-3 text-accent font-bold">Login</Link></p>
  </div>
  </div>
  </div>
      </div>
        </div>
    );
};

export default page;