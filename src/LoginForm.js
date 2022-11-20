import './App.css';
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
    email: yup
      .string()
      .email()
      .required("email is required"),
    password: yup
      .string()
      .min(8)
      .max(15)
      .required("password must be 8 - 15 characters."),
}).required();

function Form(){
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });
   
    const addItem = () => {
        // ...
      };

    return (
        <>
        <form onSubmit={handleSubmit((data) => console.log(data))} className="App">
            <div className="ipt-forms">
                <TextField 
                    id="email" 
                    name="confirmPassword"
                    className="ipt-form" 
                    label="Email" 
                    variant="outlined" 
                    placeholder="email"
                    {...register('email')}
                />
                <p className="message">{errors.email?.message}</p>
            </div>
            <div className="ipt-forms">
                <TextField 
                    id="password" 
                    className="ipt-form" 
                    type="password" 
                    label="Password" 
                    variant="outlined" 
                    placeholder="password"
                    {...register('password')}
                />
                <p className="message">{errors.password?.message}</p>
            </div>
            <Button variant="contained" type="submit" className="btn-cta">Login</Button>
        </form>
        </>
    );
  }
  
  export default Form;