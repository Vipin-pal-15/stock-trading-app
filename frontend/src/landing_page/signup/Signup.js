import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from 'axios';
import swal from 'sweetalert2';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


function Signup() {

 const nav= useNavigate()

  const schema = yup
    .object()
    .shape({
      name: yup.string().required().min(3).max(30),
      email: yup.string().required().matches(/^[^\s@]+@[^\s]+\.(com|in|org|net)$/,"Enter valid email"),
      password: yup.string().required().min(5).max(20),
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
    nav("/signin")
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
        <div className="col-sm-4 mt-4 " style={{boxShadow:"0 5px 15px",borderRadius:"10px"}}>
          <form onSubmit={handleSubmit(handlleRegister)}>
            <h2 className="text-primary text-center">Register here</h2>
            <hr/>
            <input type="text" style={{border:"none",outline:"none",borderBottom:"2px solid black"}} {...register('name')} className="form-control mb-3" placeholder="Enter Your Name"></input>
            {errors?.name && <p className="text-danger">{errors?.name?.message}</p>}
            <input type="email" style={{border:"none",outline:"none",borderBottom:"2px solid black"}}  {...register('email')} className="form-control mb-3" placeholder="Enter Your Email"></input>
             {errors?.email && <p className="text-danger">{errors?.email?.message}</p>}
            <input type="password" style={{border:"none",outline:"none",borderBottom:"2px solid black"}} {...register('password')} className="form-control mb-3" placeholder="Enter Your Password"></input>
            {errors?.password && <p className="text-danger">{errors?.password?.message}</p>}
            <input
              type="submit"
              className="form-control mb-3 bg-primary text-light"
              value="Register"
            ></input>
          </form>
           <p className="text-center" style={{textDecoration:"none"}}>User already have an account <Link to="/signin" className="login">Signin</Link></p>
        </div>
        <div className="col-sm-4"></div>
      </div>
    </>
  );
}

export default Signup;
