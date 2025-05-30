import React from "react";
import { Link } from "react-router-dom";


const Navbar = ()=>{
    return(
        <>
        <div className='bg-[#222222] 1/10   py-4 border-b-1 border-[#585757] flex text-white justify-around gap-15'>
            <Link to="/"><p className='text-3xl text-white font-bold'>AWS Security Hub</p></Link>
            <div className="list flex gap-5 text-2xl px-2 py-1">
                 <h1>Controls</h1>
                 <Link to="/Findings">Findings</Link>
            </div>
            <button class="bg-blue-500 hover:bg-blue-700 text-white  font-bold text-xl py-2 px-4 rounded-xl w-1/10">
  Login
</button>
        </div>
        </>
    );
}

export default Navbar