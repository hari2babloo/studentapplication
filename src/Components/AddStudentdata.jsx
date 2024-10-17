import React from 'react'
import axios from 'axios';
import { useState } from 'react'

function AddStudentdata() {
  const [stdname, setname] = useState();
  const [stdemail, setemail] = useState();
  const [stdage, setage] = useState();

  const senddata = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post('http://localhost:3000/poststudentdata',
        {
          stdname,
          stdemail,
          stdage
        }
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  
    return (
    <>
    <h1>AddStudentdata</h1>
    <form onSubmit={senddata}>
    <input type="text" name='stdname'
    onChange={(e) => setname(e.target.value)} />
      <input type="text" name="stdemail" 
      onChange={(e) => setemail(e.target.value)} />
      <input type='number' name="stdage" 
      onChange={(e) => setage(e.target.value)} />
      <button type="submit">Submit</button>
    </form>
    </>
    
  )
}

export default AddStudentdata