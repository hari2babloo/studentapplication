import React, { useEffect } from 'react'
import axios from 'axios';
import { useState } from 'react'


function Getstudentdata() {
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () =>{
      
      try {
        const {data: response} = await axios.get('http://localhost:3000/getstudentdata');
        setData(response);
      } catch (error) {
        console.error(error.message);
      }
      
    }
    fetchData();
  }, []);


  return (
<div>
    <h1>Student Data</h1>
    {/* <ul>
      {data.map((item) => (
        <li>Name:{item.stdname};  Email:{item.stdemail};  Age : {item.stdage}</li>
      ))}
    </ul> */}

    <table border='1px'>
      <thead>
    <tr>
      <th>Name</th>
      <th>Email</th>
      <th>age</th>
    </tr>
    </thead>
    <tbody>
      { data.map((r,i)=>(
        <tr key={i}>
          <td>{r.stdname}</td>
          <td>{r.stdemail}</td>
          <td>{r.stdage}</td>
        </tr>
      ))}


    </tbody>
    </table>
  </div>
  )
}

export default Getstudentdata