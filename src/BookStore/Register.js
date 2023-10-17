import{Form,Button} from 'react-bootstrap';
import { useForm} from "react-hook-form";
import { login } from './AuthSlice';
import {useDispatch } from 'react-redux';


 function Register(){
  const dispatch = useDispatch()
  
    const{
        register,
        handleSubmit,
    }= useForm()
    const RegisterPage = (data) =>{
            let formdata = {
                name:data.name,
                email:data.email,
                password:data.password,
                role:data.role,
            }
            console.log(formdata);
            fetch(' http://localhost:5000/register',{
              method: 'POST',
              body: JSON.stringify(formdata),
              headers: {'Content-Type': 'application/json'},
            })
            .then(res => res.json())
            .then(response =>{
              console.log(response)
              if(response.accessToken){
                dispatch(login({token:response.accessToken, role:response.role}))
              }
              
            })
    }

    return(
        <div>
        <Form onSubmit={handleSubmit(RegisterPage)}>
        <Form.Group className="mb-3" controlId="formGroupName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="name" placeholder="Enter Name"  {...register('name')}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" {...register('email')}  />
      </Form.Group> 
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" {...register('password')} />
      </Form.Group>
      
      <Form.Label>Role</Form.Label>
      <Form.Select {...register('role')} aria-label="Default select example">
      <option name='role'>Open this select menu</option>
      <option value="admin">Admin</option>
      <option value="user">User</option>
    </Form.Select>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
        </div>
    )
 }
 export default Register;