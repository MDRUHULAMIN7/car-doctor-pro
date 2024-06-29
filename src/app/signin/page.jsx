"use client"

import Image from 'next/image';
import Link from 'next/link';
import {signIn} from 'next-auth/react';
import React from 'react';
import { useRouter } from 'next/navigation';



const Page = () => {
  const router = useRouter()
    const handleLogin=async(e)=>{
      e.preventDefault();
      const email = e.target.email.value;
      const password = e.target.password.value;
      const resp =await signIn("credentials",{
        email,
        password,
        redirect:false,
      });
    console.log(resp);
    if(resp.status ===200){
      router.push('/')
    }
    }
    return (
        <div className="h-5/6">
        <div className="mx-5 md:mx-10 h-full  ">
          <div className="hero-content flex-col lg:flex-row justify-center gap-x-10">
            <div className="text-center lg:text-left">
              <Image src={"/assets/images/login/login.svg"} alt="" width={400} height={400} />
            </div>
            <div className="card shrink-0 w-full max-w-sm border-2 border-base-300 rounded-none bg-base-100">
              <h1 className="text-3xl font-bold text-center mt-2">Login</h1>
              <form onSubmit={handleLogin} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    name="email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="password"
                    name="password"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Login</button>
                </div>
              </form>
              <div></div>
              <p className="text-center m-3">
                New To Cars-Doctor
                <Link href={"/signup"} className="ml-3 text-accent font-bold">
                  Sign Up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Page;