import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import '../css/Signup.css'

const Signup = (props) => {


  const [credentials, setCredentials] = useState({ name: "", email: "", password: "", cpassword: "" })
  const [error, setError] = useState("");  // To store the error message
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Check if passwords match
    if (credentials.password !== credentials.cpassword) {
      setError("Passwords do not match!");  // Set error message if passwords don't match
      return;  // Exit the function early to prevent submission
    }

    const host = "http://localhost:5000"
    const response = await fetch(`${host}/api/auth/createuser`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name: credentials.name, email: credentials.email, password: credentials.password })
    })
    const json = await response.json()
    console.log(json)

    if (json.success) {
      // Save the auth token and redirect
      localStorage.setItem('token', json.authToken)

      // Redirect korar jonno useNavigate hook er sahajjo nebo...
      props.showAlert("Account Created Successfully.", "success")
      navigate("/")

    }
    else {
      props.showAlert("Invalid credentials!", "danger")  // Display error if signup fails   
    }
  }

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
    setError("");  // Clear error when input is modified
  }

  return (
    <div className='container mt-2 '>
      <h2 className='my-3'>Create an account to use iNotebook</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" className="form-control" name="name" id="name" onChange={onChange} aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="email" className="form-control" name="email" id="email" onChange={onChange} aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" name="password" id="password" onChange={onChange} minLength={5} required />
        </div>
        <div className="mb-3">
          <label htmlFor="cpassword" className="form-label">Confirm Password</label>
          <input type="password" className="form-control" name="cpassword" id="cpassword" onChange={onChange} minLength={5} required />
        </div>

        {/* Show error message if passwords don't match */}
        {error && <div className="alert alert-danger" role="alert">
          {error}
        </div>}

        <button type="submit" className="btn btn-primary btn-signup">Sign Up</button>
      </form>
    </div>
  )
}

export default Signup
