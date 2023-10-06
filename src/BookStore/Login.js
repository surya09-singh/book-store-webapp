import { useForm} from "react-hook-form";
import { login } from './AuthSlice';
import {useDispatch } from 'react-redux';
import{Form,Button} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Login(){
  const dispatch = useDispatch();
  const navigate = useNavigate();

    const LoginPage = (data) =>{
        let formdata = {
          email:data.email,
          password:data.password,
        }
        fetch(' http://localhost:5000/signin',{
          method: 'POST',
            body: JSON.stringify(formdata),
            headers: {'Content-Type': 'application/json'},
        })
        .then(res => res.json())
        .then(response=>{
          console.log(response)
          if(response.accessToken){
            dispatch(login(response.accessToken))
           navigate('/bookpage')
          }
        })
    }
  const {
    register,
    handleSubmit,
  }= useForm()
    return(
        <div>
            <Form onSubmit={handleSubmit(LoginPage)}>
        <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" {...register('email')}  />
      </Form.Group> 
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" {...register('password')} />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
      </Form>
        </div>
    )
}
export default Login;