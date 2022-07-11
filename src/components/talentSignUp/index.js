import React, { useState } from "react";
import {postTalentApi} from '../../api/api'


const TalentSignUp = () => {
  const[firstname,setFirstname] = useState('')
  const[lastname,setLastname] = useState('')
  const[username,setusername] = useState('')
  const[email,setEmail] = useState('')
  const[password,setPassword] = useState('')

  const data = {firstname, lastname, username, email, password}

  const handleTalentApi = async () =>{
    const res = await postTalentApi(data)
    console.log(res);
  }


  return (
    <>
      <div>
        <h3>Create Your Talent Account</h3>
        <form>
          <label>First name*</label>
          <input type="text" value={firstname} onChange={(e)=>setFirstname(e.target.value)} required />

          <label>Last name*</label>
          <input type="text" value={lastname} onChange={(e)=>setLastname(e.target.value)} required />

          <label>Username*</label>
          <input type="text" value={username} onChange={(e)=>setusername(e.target.value)} required />

          <label htmlFor="email">Email*</label>
          <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} required />

          <label>Password*</label>
          <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} required />

          <label style={{ display: "flex" }}>
            <input type="checkbox" />
            <p style={{ display: "flex", fontSize: 15 }}>
              I agree to the
              <div style={{ color: "#17db17a6" }}>Terms and Conditions</div>
            </p>
          </label>

          <button onClick={handleTalentApi}>Sign Up</button>
        </form>
      </div>
    </>
  );
};

export default TalentSignUp;
