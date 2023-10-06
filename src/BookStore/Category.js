import{Form,Button} from 'react-bootstrap';
import { useForm} from "react-hook-form";
function Category(){
    const CategoryPage= (data) =>{
        let formdata={
            categoryname:data.categoryname,
            code:data.code,
        }
        fetch(' http://localhost:5000/category',{
            method: 'POST',
            body: JSON.stringify(formdata),
            headers: {'Content-Type': 'application/json'},
        })
        .then(res => res.json())
        .then(response=>{
            console.log(response)
        })
    }
    const{
        register,
        handleSubmit,
    }= useForm()
    return(
        <div>
            <Form onSubmit={handleSubmit(CategoryPage)}>
            <Form.Group className="mb-3" controlId="formGroupcategoryname">
        <Form.Label>Name</Form.Label>
        <Form.Control type="categoryname" placeholder="Name" {...register('categoryname')} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupcode">
        <Form.Label>Code</Form.Label>
        <Form.Control type="code" placeholder="Code" {...register('code')} />
      </Form.Group>
      <Button variant="primary" type="submit" >
        Submit
      </Button>
      </Form>

        </div>
    )
}
export default Category;