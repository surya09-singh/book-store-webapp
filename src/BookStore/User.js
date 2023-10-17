import { Table} from "react-bootstrap";
import { useState } from "react";
import { useEffect } from "react";



function User(){
    const[users,setUsers] = useState()

    useEffect(()=>{
        fetch('http://localhost:5000/bookmodel')
        .then((response) => response.json())
        .then((data)=>{
            console.log(data)
            setUsers(data)
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
          </tr>
        </thead>
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
                  </tr>
                )
            })}
            </tbody>
            </Table>
        </div>
    )
}
export default User;