import { useState } from 'react'
import { GoogleLogin } from '@react-oauth/google';
import { useForm } from "react-cool-form";
import axios from 'axios';
import './App.css'

function App() {
  const [isSignin,setSign]=useState(false);

  return (
    <GoogleLogin
  onSuccess={credentialResponse => {
    console.log(credentialResponse);
  }}
  onError={() => {
    console.log('Login Failed');
  }}
/>
  )
  axios.get('http://localhost:4000/').then((Response)=>{
    console.log(Response.data);
  })
  .catch((err)=>console.log(err));
  // const { form } = useForm({
  //   // defaultValues: { username: "", email: "", password: "" },
  //   onSubmit: (values) => {const myData=values;
  //     axios.post('http://localhost:4000/reges',myData).then((res)=>console.log(res))
  //     .catch((err)=>console.log(err));
  //   }
  //   ,
  //   onError: (errors) => console.log("onError: ", errors)
  // });

  // return (
  //   <form ref={form} noValidate>
  //     <input name="username" placeholder="Username" required />
  //     <input name="email" type="email" placeholder="Email" required />
  //     <input
  //       name="password"
  //       type="password"
  //       placeholder="Password"
  //       required
  //       minLength={8}
  //     />
  //     <input type="submit" />
  //   </form>
  // );
}

export default App
