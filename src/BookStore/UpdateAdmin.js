import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function UpdateAdmin(){
    const { register, handleSubmit,setValue } = useForm();
    const [users,setUsers] = useState([]);
    const [rackers,setRackers] = useState([]);
    const [dataitem,setDataitem] = useState([]);
    const [formdata,setFormdata] = useState([]);
    const location = useLocation();
    const navigate = useNavigate();

    function Updatedpage(data){
        const formdata = {
            name:data.name,
            isbn:data.isbn,
            publisheryear:data.publisheryear,
            volume:data.volume,
            authorid:data.authorid,
            categoryid:data.categoryid,
            rackid:data.rackid,
            copiescount:data.copiescount,
        }
        fetch(`http://localhost:5000/bookmodel/${location.state}`,{
            method: 'PUT',
            body: JSON.stringify(formdata),
            headers: {'Content-Type': 'application/json'},
        })
        .then(res => res.json())
    .then(data => {
        console.log(data)
        navigate('/admin')

    })
    }
    

useEffect(()=>{
    fetch(`http://localhost:5000/bookmodel/${location.state}`)
    .then((response) => response.json())    
    .then((data)=>{
        console.log(data);
        setFormdata(data);
        setValue('name',data.name)
        setValue('isbn',data.isbn)
        setValue('publisheryear',data.publisheryear)
        setValue('volume',data.volume)
        setValue('authorid',data.authorid)
        setValue('categoryid',data.categoryid)
        setValue('rackid',data.rackid)
        setValue('copiescount',data.copiescount)
        
        
    })
},[location])
useEffect(() => {
    fetch('http://localhost:5000/author')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setUsers(data);
      
      });
  }, []);

  useEffect(() => {
    fetch(" http://localhost:5000/rack")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setRackers(data);
      });
  }, []);
  useEffect(() => {
    fetch("  http://localhost:5000/category")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setDataitem(data);
      });
  }, []);


    return(
        <div>
            <Form onSubmit={handleSubmit(Updatedpage)}>
        <Form.Label>Book Model</Form.Label>
        <Form.Group className="mb-3" controlId="formGroupName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="name"
            // value={formdata.name}
            placeholder="Enter Name"
            {...register("name")}
          />
        </Form.Group>
       
          <Form.Group className="mb-3" controlId="formGroupIsbn" >
          <Form.Label>ISBN</Form.Label>
          <Form.Control
            type="isbn"
            // value={formdata.isbn}
            placeholder="Enter isbn"
            {...register("isbn")}
          />
        </Form.Group>
      
        
        <Form.Group className="mb-3" controlId="formGroupPublisherYear">
          <Form.Label>publisher Year</Form.Label>
          <Form.Control
            type="publisheryear"
            // value={formdata.publisheryear}
            placeholder="Publisher Year"
            {...register("publisheryear")}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPublisherYear">
          <Form.Label>Volume</Form.Label>
          <Form.Control
            type="volume"
            // value={formdata.volume}
            placeholder="Volume"
            {...register("volume")}
          />
        </Form.Group>
        <label>Auther ID </label>
        <Form.Select
          {...register("authorid")}
          aria-label="Default select example"
        >
          <option name="authorid">Select Author ID</option>
          {users &&
            users.map((item, index) => {
              return (
                <option key={index} value={item.id}>
                  {item.authorname}
                </option>
              );
            })}
        </Form.Select>
        <label>Category ID </label>
        <Form.Select
          {...register("categoryid")}
          aria-label="Default select example1"
        >
          <option name="categoryid">Select Category ID</option>
          {dataitem &&
            dataitem.map((item, index) => {
              return (
                <option key={index} value={item.id}>
                  {item.categoryname}
                </option>
              );
            })}
        </Form.Select>
        <label>Rack ID</label>
        <Form.Select
          {...register("rackid")}
          aria-label="Default select example2"
        >
          <option name="rackid"> Select Rack ID</option>
          {rackers &&
            rackers.map((item, index) => {
              return (
                <option key={index} value={item.id}>
               {item.racknumber}
                </option>
              );
            })}
        </Form.Select>

        <Form.Group className="mb-3" controlId="formGroupcategoryid">
          <Form.Label>Copies Count</Form.Label>
          <Form.Control
            type="copiescount"
            // value={formdata.copiescount}
            placeholder="Copies Count"
            {...register("copiescount")}
          />
        </Form.Group>
        
          <Button variant="primary" type="submit">
          Submit
        </Button>
  
        
      </Form>
        </div>
    )
}
export default UpdateAdmin;