import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from 'axios';
import swal from 'sweetalert2';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


function Signup() {
  const schema = yup
    .object()
    .shape({
      name: yup.string().required().min(3).max(30),
      mobile: yup.string().required().max(10),
      problem: yup.string().required().min(5).max(20),
    })
    .required();

    const { register, handleSubmit,formState:{errors} } = useForm({
    resolver: yupResolver(schema),
  });

  const handlleRegister=async(data)=>{
   const res=await axios.post("http://localhost:3000/register",data);
   if(res.data.success==true){
    swal.fire({
      title:"Register",
      text:res.data.message,
      icon:"success"
    });
   }else{
    swal.fire({
      title:"Not Register",
      text:res.data.message,
      icon:"error"
    })
   }
  }

  return (
    <>
      <div className="row">
        <div className="col-sm-4"></div>
        <div className="col-sm-4 mt-4 " style={{boxShadow:"0 4px 13px",borderRadius:"10px"}}>
          <form onSubmit={handleSubmit(handlleRegister)}>
            <h2 className="text-primary text-center">Contact Us</h2>
            <hr/>
            <input type="text" style={{border:"none",outline:"none",borderBottom:"2px solid black"}} {...register('name')} className="form-control mb-3" placeholder="Enter Your Name"></input>
            {errors?.name && <p className="text-danger">{errors?.name?.message}</p>}
            <input type="mobile" style={{border:"none",outline:"none",borderBottom:"2px solid black"}}  {...register('mobile')} className="form-control mb-3" placeholder="Enter Your Mobile"></input>
             {errors?.mobile && <p className="text-danger">{errors?.mobile?.message}</p>}
            <textarea type="text" style={{border:"none",outline:"none",borderBottom:"2px solid black"}} {...register('problem')} className="form-control mb-3" placeholder="Share Your Problem"></textarea>
            {errors?.problem && <p className="text-danger">{errors?.problem?.message}</p>}
            <input
              type="submit"
              className="form-control mb-3 bg-primary text-light"
              value="Send"
            ></input>
          </form>
           <p className="text-center" style={{textDecoration:"none"}}>Don't have an account <Link to="/signup" className="login">Signup</Link></p>
        </div>
        <div className="col-sm-4"></div>
      </div>
    </>
  );
}

export default Signup;
