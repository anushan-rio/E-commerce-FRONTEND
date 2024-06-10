import React,{useState}from "react"
import Base from "../core/Base"
import {Link,Navigate} from "react-router-dom"
import {signin,isAutheticated,authenticate} from "../auth/helper/index"





const Sigin=()=>{

  const [values, setValues] = useState({
    email: "",
    password: "",
    error: "",
    loading:false,
    didRedirect: false
  });

const {email,password,error,loading,didRedirect}=values;
const {user}=isAutheticated();

const handleChange = name => event => {
  setValues({ ...values, error: false, [name]: event.target.value });
};

const onSubmit = event => {
  event.preventDefault();
  setValues({ ...values, error: false, loading: true });
  signin({ email, password })
    .then(data => {
      if (data.error) {
        console.log("data.error-----"+data.error)
        setValues({ ...values, error: data.error, loading: false });
      } else {
        console.log("isAutheticated----2")
        authenticate(data, () => {
          console.log("isAutheticated----1")
          setValues({
            ...values,
            didRedirect: true
          });
        });
      }
    })
    .catch(console.log("signin request failed"));
};

const performRedirect = () => {
  console.log("TTTdidRedirect---"+didRedirect)
  if (didRedirect) {
   console.log("user.role -------"+typeof(user.role) )
    if (user && user.role === "1") {
      console.log("TT------inside if")
      return <p>Redirect to Admin dahboard</p>;
    } else {
      console.log("TT------inside else")
      return <p>Redirect to user dahboard</p>;
    }
  }
  if (isAutheticated()) {
    return  <p>Redirect to user Home</p>;
  }
};

const loadingMessage = () => {
  return (
    loading && (
      <div className="alert alert-info">
        <h2>Loading...</h2>
      </div>
    )
  );
};


const errorMessage = () => {
console.log("TERROR----"+error)
  return (
    <div className="row">
      <div className="col-md-6 offset-sm-3 text-left">
        <div
          className="alert alert-danger"
          style={{ display: error ? "" : "none" }}
        >
          {error}
        </div>
      </div>
    </div>
  );
};

 const Signinform=()=>{
    return (
        <div className="row">
          <div className="col-md-6 offset-sm-3 text-left">
            <form>
              
              <div className="form-group">
                <label className="text-light">Email</label>
                <input
                  className="form-control"
                  onChange={handleChange("email")}
                  type="email"
                 value={email}
                />
              </div>
  
              <div className="form-group">
                <label className="text-light">Password</label>
                <input
                  onChange={handleChange("password")}
                  className="form-control"
                  type="password"
                  value={password}
                />
              </div>
              <div></div>
              <button onClick={onSubmit}  id="buttonstyle" className="btn btn-success btn-block form-control">
                Submit
              </button>
            </form>
          </div>
        </div>
      );
}


    return(
        <Base title="Sign In" description="Page For User To SignIn">
            {loadingMessage()}
            {errorMessage()}
            {Signinform()}
            {performRedirect()}
            <p className="text-white text-center">{JSON.stringify(values)}</p>
            </Base>

    )
}
export default Sigin