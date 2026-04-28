import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from 'axios';
import swal from 'sweetalert2'
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Signin() {
 const nav= useNavigate();

  const schema = yup
    .object()
    .shape({
      email: yup.string().required().email(),
      password: yup.string().required().min(5).max(20),
    })
    .required();

    const { register, handleSubmit,formState:{errors} } = useForm({
    resolver: yupResolver(schema),
  });

  const handlleRegister=async(data)=>{
   const res=await axios.post("http://localhost:3000/login",data);
   if(res.data.success==true){
    swal.fire({
      title:"Login",
      text:res.data.message,
      icon:"success"
    });
    localStorage.setItem("token",res.data.token);
    window.dispatchEvent(new Event("authChange"));
    window.location.href="http://localhost:5173"
   }else{
    swal.fire({
      title:"Not Login",
      text:res.data.message,
      icon:"error"
    })
   }
  }

  return (
    <>
      <div className="row">
        <div className="col-sm-4"></div>
        <div className="col-sm-4 mt-4" style={{boxShadow:"0 5px 15px",borderRadius:"10px"}}>
          <form onSubmit={handleSubmit(handlleRegister)}>
            <h1 className="text-primary text-center">Login here</h1>
            <hr/>
            <input type="email" style={{border:"none",outline:"none",borderBottom:"2px solid black"}} {...register('email')} className="form-control mb-3" placeholder="Enter Your Email"></input>
             {errors?.email && <p className="text-danger">{errors?.email?.message}</p>}
            <input type="password" style={{border:"none",outline:"none",borderBottom:"2px solid black"}} {...register('password')} className="form-control mb-3" placeholder="Enter Your Password"></input>
            {errors?.password && <p className="text-danger">{errors?.password?.message}</p>}
            <input
              type="submit"
              className="form-control mb-3 bg-primary text-light"
              value="Login"
            ></input>
          </form>
           <p className="text-center" style={{textDecoration:"none"}}>Don't have an account <Link to="/signup">Signup</Link></p>
        </div>
        <div className="col-sm-4"></div>
      </div>
    </>
  );
}

export default Signin;
