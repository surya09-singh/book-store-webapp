import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";

function BookModel() {
  const [users, setUsers] = useState();
  const [dataitem, setdataitem] = useState();
  const [rackers, setRackers] = useState();
  const [refrash,setRefrash] = useState();

  const BookPage = (data) => {
    let formdata = {
      name: data.name,
      isbn: data.isbn,
      publisheryear: data.publisheryear,
      volume: data.volume,
      authorid: data.authorid,
      categoryid: data.categoryid,
      rackid: data.rackid,
      copiescount: data.copiescount,
    };
    fetch("http://localhost:5000/bookmodel", {
      method: "POST",
      body: JSON.stringify(formdata),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((response) => {
        console.log(response);
      });
  };

  useEffect(() => {
    fetch(" http://localhost:5000/author")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setUsers(data);
      });
  }, [!refrash]);

  useEffect(() => {
    fetch(" http://localhost:5000/rack")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setRackers(data);
      });
  }, [!refrash]);

  useEffect(() => {
    fetch("  http://localhost:5000/category")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setdataitem(data);
      });
  }, [!refrash]);

  const { register, handleSubmit } = useForm();

  return (
    <div onSubmit={handleSubmit(BookPage)}>
      <Form>
        <Form.Label>Book Model</Form.Label>
        <Form.Group className="mb-3" controlId="formGroupName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="name"
            placeholder="Enter Name"
            {...register("name")}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupIsbn">
          <Form.Label>ISBN</Form.Label>
          <Form.Control
            type="isbn"
            placeholder="Enter isbn"
            {...register("isbn")}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPublisherYear">
          <Form.Label>publisher Year</Form.Label>
          <Form.Control
            type="publisheryear"
            placeholder="Publisher Year"
            {...register("publisheryear")}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPublisherYear">
          <Form.Label>Volume</Form.Label>
          <Form.Control
            type="volume"
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
            placeholder="Copies Count"
            {...register("copiescount")}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}
export default BookModel;
