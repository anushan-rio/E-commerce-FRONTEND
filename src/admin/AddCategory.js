import React,{useState} from "react"
import Base from "../core/Base"
import {isAutheticated} from "../auth/helper/index"
import {Link} from "react-router-dom"
import {createCategory} from "../admin/helper/adminapicall"
const AddCategory=()=>{

    const [name,setName]=useState("");
    const [error,setError]=useState(false);
    const [success,setSuccess]=useState(false);

    const { user, token } = isAutheticated();

    const myCategoryForm = () => (
        <form>
          <div className="form-group">
            <p className="lead">Enter the category</p>
            <input
              type="text"
              className="form-control my-3"
              onChange={handleChange}
              value={name}
              autoFocus
              required
              placeholder="For Ex. Summer"
            />
            <button onClick={onSubmit} className="btn btn-outline-info">
              Create Category
            </button>
          </div>
        </form>
      );
    
      const onSubmit = event => {
        event.preventDefault();
        setError("");
        setSuccess(false);
    
        //backend request fired
        createCategory(user._id, token, { name }).then(data => {
          console.log("name------name---",name);
          console.log("token------cate---",token);
          console.log("user._id------cate---",user._id);
          if (data.error) {
           console.log("inside if-----",data.error)
            setError(true);
          } else {
            console.log("inside else")
            setError("");
            setSuccess(true);
            setName("");
          }
        });
      }; 

      const successMessage = () => {
        if (success) {
          return <h4 className="text-success">Category created successfully</h4>;
        }
      };
    
      const warningMessage = () => {
        if (error) {
          console.log("error------error----",error)
          return <h4 className="text-success">Failed to create category</h4>;
        }
      };

      const goBack = () => (
        <div className="mt-5">
          <Link className="btn btn-sm btn-success mb-3" to="/admin/dashboard">
            Admin Home
          </Link>
        </div>
      );

      const handleChange = event => {
        setError("");
        setName(event.target.value);
      };
    

    return(
        <Base title="Add category" description="create a Category"  className="container bg-info p-4">
        <div className="row bg-white rounded">
            <div className="col-md-8 offset-md-2">
                {successMessage()}
                {warningMessage()}
               {myCategoryForm()}
               {goBack()}
            </div>
        </div>
        </Base>
    )
}

export default  AddCategory;