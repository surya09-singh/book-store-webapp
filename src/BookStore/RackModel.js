import{Form,Button,Table} from 'react-bootstrap';
import { useForm} from "react-hook-form";
import { useEffect,useState } from 'react';
function RackModel(){
    const [users,setUsers] = useState()
    const AuthorPage = (data) =>{
        let formdata ={
            racknumber:data.racknumber,
            sortoder:data.sortoder,
            rackcapacity:data.rackcapacity,
            rackcapacityutilized:data.rackcapacityutilized,
        }
        fetch(' http://localhost:5000/rack',{
            method: 'POST',
            body: JSON.stringify(formdata),
            headers: {'Content-Type': 'application/json'},
        })
        .then(res =>res.json())
        .then(response=>{
            console.log(response)
        })
    }
    useEffect(()=>{
        fetch('http://localhost:5000/rack')
        .then((response) => response.json())
        .then((data) => {
        console.log(data);
        setUsers(data);
      });
    },[])
    const{
        register,
        handleSubmit,
    }= useForm()

    return(
        <div onSubmit={handleSubmit(AuthorPage)}>
            <Form>
      <Form.Group className="mb-3" controlId="formGroupracknumber">
        <Form.Label>Rack Number</Form.Label>
        <Form.Control type="racknumber" placeholder="Rack Number" {...register('racknumber')} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupsortoder">
        <Form.Label>Sort Oder</Form.Label>
        <Form.Control type="sortoder" placeholder="Sort Oder" {...register('sortoder')} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGrouprackcapacity">
        <Form.Label>Rack Capacity</Form.Label>
        <Form.Control type="rackcapacity" placeholder="Rack Capacity" {...register('rackcapacity')} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGrouprackcapacityutilized">
        <Form.Label>Rack Capacity</Form.Label>
        <Form.Control type="rackcapacityutilized" placeholder="Rack_Capacity_Utilized" {...register('rackcapacityutilized')} />
      </Form.Group>
      <Button variant="primary" type="submit" >
        Submit
      </Button>
      </Form>
      <div>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Rack Number</th>
            <th>Sort Oder</th>
            <th>Rack Capacity</th>
            <th>Rack Capacity Utilizer</th>
          </tr>
        </thead>
        <tbody>
            {users && 
            users.map((item,index)=>{
                return(
                    <tr key={index}>
                        <td>{item?.racknumber}</td>
                        <td>{item?.sortoder}</td>
                        <td>{item?.rackcapacity}</td>
                        <td>{item?.rackcapacityutilized}</td>
                         
                    </tr>
                )

                
            })}
            </tbody>
            </Table>
      </div>
      
      </div>
    )
   
}
export default RackModel;