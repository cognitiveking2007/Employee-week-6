import { useState, useEffect } from "react";
import {useNavigate} from "react-router";
import axios from 'axios'

function ListOfEmps() {
  const [emps, setEmps] = useState([]);
  const navigate = useNavigate();

  const  gotoEmployee = (empObj) =>{
       // 
       navigate("/employee",{state:empObj});
  };
   const  gotoEditEmployee = (empObj) =>{
       // 
       navigate("/edit-emp",{state:empObj});
  }; 
  const deleteEmpByID= async (id)=>{
    let res = await axios.delete(`http://localhost:4000/EmployeeAPI/employees/${id}`);
    if (res.status === 200) {
        //get latest emps data
       getEmps();
      }
  };
  //get all emps
  /*async function getEmps() {
      let res = await axios.get("http://localhost:4000/EmployeeAPI/employees");
      if (res.status === 200) {
        let data = res.data;

        setEmps(data);
      }
    }*/
   async function getEmps() {
  try {
    let res = await axios.get("http://localhost:4000/EmployeeAPI/employees");
    
    // Check if the array is inside a property (common in Express)
    // If your backend sends { payload: [...] }, use res.data.payload
    const data = res.data.payload || res.data; 

    if (Array.isArray(data)) {
      setEmps(data);
    } else {
      console.error("Data is not an array:", data);
      setEmps([]); // Fallback to empty array
    }
  } catch (err) {
    console.error("Error fetching emps:", err);
  }
}
    
  

  useEffect(() => {
    getEmps();
  },[]);

  return (
    <div>
      <h1 className="text-4xl text-center">List of Employees</h1>
      <div className=" text-center grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 justify-center">
        {emps.map((empObj) => (
          <div key={empObj._id} className=" bg-white p-5 rounded-2xl  gap-10">
            <p>{empObj.Name}</p>
            <p className="mb-2">{empObj.email}</p>
            <div className="flex justify-around">
            <button onClick={() => gotoEmployee(empObj)} className="bg-blue-400 p-2 rounded-2xl text-white">View</button>
            <button onClick={() => gotoEditEmployee(empObj)} className="bg-orange-400 p-2 rounded-2xl text-white">Edit</button>
            <button onClick={() => deleteEmpByID(empObj._id)} className="bg-red-600 p-2 rounded-2xl text-white">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListOfEmps;