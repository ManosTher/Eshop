import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div class="container mx-auto h-screen">
      <div class="container w-2/3 text-center mx-auto text-4xl py-12 space-y-10">
        <h1 class="text-5xl">Welcome to APHRODITE</h1>
        <p>Choose an option:</p>
      </div>
        <div class="h-full space-y-5 ">    
            <div class="container w-2/5  h-1/3 text-center mx-auto rounded-[12px] bg-gray hover:bg-sky-500">
                <Link to="/admin">
                    <button class="h-full w-full">Admin</button>
                </Link>
            </div>
            <div class="container w-2/5 h-1/3 text-center mx-auto rounded-[12px] bg-pink hover:bg-sky-500" >
                <Link to="/user">
                    <button class="h-full w-full">User or Guest</button>
                </Link>
            </div>
        </div>    
    </div>
  );
};

export default LandingPage;
