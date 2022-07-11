import React, { useEffect, useState } from "react";
import { postFanApi } from "../../api/api";


const SignUp = () => {
  const [first_name, setFirstname] = useState("");
  const [last_name, setLastname] = useState("");
  const [username, setusername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const data = { first_name, last_name, username, email, password };

  const handleTalentApi = async () => {
    const res = await postFanApi(data)
    console.log(res);
  };
useEffect(()=>{
  // handleTalentApi()
})
  return (
    <>
      <div>
        <h3>Create Your Fan Account</h3>
        <form>
          <label>First name*</label>
          <input
            type="text"
            value={first_name}
            onChange={(e) => setFirstname(e.target.value)}
            required
          />

          <label>Last name*</label>
          <input
            type="text"
            value={last_name}
            onChange={(e) => setLastname(e.target.value)}
            required
          />

          <label>Username*</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setusername(e.target.value)}
            required
          />

          <label htmlFor="email">Email*</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label>Password*</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

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

export default SignUp;
