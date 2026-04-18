import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import axios from 'axios';

function EditEmployee() {
  const {
    register,
    handleSubmit,
    setValue, // Added this to fill the form
    formState: { errors }, // Fixed casing (formState, not formstate)
  } = useForm();
  
  const { state } = useLocation();
  const navigate = useNavigate(); // Fixed variable name casing

  useEffect(() => {
    // Fill the form with data from the Location state
    if (state) {
      setValue("Name", state.Name);
      setValue("email", state.email);
      setValue("mobile", state.mobile);
      setValue("designation", state.designation);
      setValue("companyName", state.companyName);
    }
  }, [state, setValue]); // Added dependencies

  const savedModifiedEmp = async (modifiedEmp) => {
    try {
      // 1. Pass 'modifiedEmp' as the body of the PUT request
      const res = await axios.put(`http://localhost:4000/EmployeeAPI/employees/${state._id}`, modifiedEmp);
      if (res.status === 200) {
        navigate("/list"); // Fixed casing
      }
    } catch (err) {
      console.error("Update failed", err);
    }
  };
  
  return (
    <div>
      <h1 className="text-5xl text-center text-yellow-600">Edit Employee</h1>
      {/* Fixed: Use savedModifiedEmp in handleSubmit */}
      <form className="max-w-md mx-auto mt-10" onSubmit={handleSubmit(savedModifiedEmp)}>
        <input type="text" {...register("Name")} className="mb-3 border-2 p-3 w-full rounded-2xl" />
        <input type="email" {...register("email")} className="mb-3 border-2 p-3 w-full rounded-2xl" />
        <input type="number" {...register("mobile")} className="mb-3 border-2 p-3 w-full rounded-2xl" />
        <input type="text" {...register("designation")} className="mb-3 border-2 p-3 w-full rounded-2xl" />
        <input type="text" {...register("companyName")} className="mb-3 border-2 p-3 w-full rounded-2xl" />

        <button type="submit" className="text-2xl rounded-2xl bg-yellow-600 text-white block mx-auto p-4">
          Save Changes
        </button>
      </form>
    </div>
  );
}

export default EditEmployee;
