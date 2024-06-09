import React,{useState}from "react"
import Base from "../core/Base"
import Link from "react-router-dom"


const Signinform=()=>{
    return (
        <div className="row">
          <div className="col-md-6 offset-sm-3 text-left">
            <form>
              
              <div className="form-group">
                <label className="text-light">Email</label>
                <input
                  className="form-control"
                  
                  type="email"
                 // value={email}
                />
              </div>
  
              <div className="form-group">
                <label className="text-light">Password</label>
                <input
                  
                  className="form-control"
                  type="password"
                  //value={password}
                />
              </div>
              <div></div>
              <button id="buttonstyle" className="btn btn-success btn-block form-control">
                Submit
              </button>
            </form>
          </div>
        </div>
      );
}


const Sigin=()=>{
    return(
        <Base title="Sign In" description="Page For User To SignIn">
            {Signinform()}
            </Base>

    )
}
export default Sigin