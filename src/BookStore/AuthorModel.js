import{Form,Button,Table} from 'react-bootstrap';
import { useForm} from "react-hook-form";
import { useEffect,useState } from 'react';

function AuthorModel(){
    const [users,setUsers] = useState();
    const AuthorPage = (data) =>{
        let formdata={
            authorname:data.authorname,
            speciality:data.speciality,
        }
        fetch('http://localhost:5000/author',{
            method: 'POST',
            body: JSON.stringify(formdata),
            headers: {'Content-Type': 'application/json'},
        })
        .then(res => res.json())
        .then(response =>{
            console.log(response)
        })
    }

    useEffect(()=>{
        fetch('http://localhost:5000/author')
        .then((response) => response.json())
        .then((data) => {
        console.log(data);
        setUsers(data)
      });
    },[])
    const{
        register,
        handleSubmit,
    }= useForm()
    return(
        <div onSubmit={handleSubmit(AuthorPage)}>
            <Form>
      <Form.Group className="mb-3" controlId="formGroupauthorname">
        <Form.Label>Author Name</Form.Label>
        <Form.Control type="authorname" placeholder="Author Name" {...register('authorname')} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupspeciality">
        <Form.Label>Speciality</Form.Label>
        <Form.Control type="speciality" placeholder="Speciality" {...register('speciality')} />
      </Form.Group>
      <Button variant="primary" type="submit" >
        Submit
      </Button>
      </Form>
      <div>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Author Name</th>
            <th>Speciality</th>
            <th>ID</th>
          </tr>
        </thead>
        <tbody>
            {users && 
            users.map((item,index)=>{
                return(
                    <tr key={index}>
                        <td>{item?.authorname}</td>
                        <td>{item?.speciality}</td>
                        <td>{item?.id}</td>
                         
                    </tr>
                )

                
            })}
            </tbody>
            </Table>
      </div>
        </div>
    )
}
export default AuthorModel;