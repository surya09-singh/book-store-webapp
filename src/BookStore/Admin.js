
import { useEffect,useState } from 'react';
import { Table,Button } from "react-bootstrap";
import {  RingLoader } from "react-spinners";
import { toast } from "react-toastify";
import { useNavigate } from 'react-router-dom';




 function Admin(){
    const [users,setUsers] = useState();
    const [loading,setLoading] = useState();
    const [refrash,setRefrash] = useState();
    const navigate = useNavigate();
    function handleDelete(Name) {
        setLoading(true);
        fetch(`http://localhost:5000/bookmodel/${Name}`, {
          method: "DELETE",
        })
          .then((response) => response.json())
          .then((data) => {
            setRefrash(!refrash);
            setLoading(false);
            showToast();
           
          });
      }
      const showToast=()=>{
        toast.success('🦄 Delete Succesfully', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          });
      }
      function handleEdit(Name) {
        navigate("/updateadmin", {state: Name})
        setLoading(true);
      }


    useEffect(()=>{
      setLoading(true);
        fetch('http://localhost:5000/bookmodel')
        .then((response) => response.json())
        .then((data)=>{
            console.log(data)
            setUsers(data)
            setLoading(false);
        }).catch((err) => {
            console.log("please start json server", err)
          })
    },[])


    return(
        <div>
            <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Name</th>
            <th>ISBN</th>
            <th>Publish year</th>
            <th>Volume</th>
            <th>Author ID</th>
            <th>Category ID</th>
            <th>Rack ID</th>
            <th>Copies Count</th>
            <th>ID</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <RingLoader color="#d65836" loading={loading} size={50} />
        <tbody>
            {users &&
            users.map((item,index)=>{
                return(
                    <tr key={index}>
                        <td>{item?.name}</td>
                        <td>{item?.isbn}</td>
                        <td>{item?.publisheryear}</td>
                        <td>{item?.volume}</td>
                        <td>{item?.authorid}</td>
                        <td>{item?.categoryid}</td>
                        <td>{item?.rackid}</td>
                        <td>{item?.copiescount}</td>
                        <td>{item?.id}</td>
                        <td>
                    <Button onClick={() => handleEdit(item.id)}>
                      {" "}
                      Update{" "}
                    </Button>
                  </td>
                  <td>
                    <Button onClick={() => handleDelete(item.id)}>
                      {" "}
                      Delete
                    </Button>
                  </td>
                        
                    </tr>
                )
            })}
            </tbody>
            </Table>
        </div>
    )
 }
 export default Admin;