import {API} from "../../BackEnd"


export const signup=user=>{
  console.log("user----",user)
    return fetch(`${API}/signup`,{
       method:"Post",
       headers:{
           Accept:"application/json",
           "Content-Type":"application/json"
       },
        body:JSON.stringify(user)
    })
    .then(response=>{
      console.log("response----",response)    
      return response.json()
    })
    .catch(err=>{
        console.log("error---->"+err)
    })

}


export const signin=user=>{
    return fetch(`${API}/signin`,{
       method:"Post",
       headers:{
           Accept:"application/json",
           "Content-Type":"application/json"
       },
        body:JSON.stringify(user)
    })
    .then(response=>{
      console.log("response----",response)  
      return response.json()
    })
    .catch(err=>{
        console.log("error---->"+err)
    })

}

export const authenticate = (data, next) => {
  console.log("data------tt---tt---tt--",data)
    if (typeof window !== "undefined") {
      localStorage.setItem("jwt", JSON.stringify(data));
      next();
    }
  };

  export const signout = next => {
    console.log("typeof window------>",typeof window)
    if (typeof window !== "undefined") {
      localStorage.removeItem("jwt");
      next();
  
      return fetch(`${API}/signout`, {
        method: "GET"
      })
        .then(response => console.log("signout success"))
        .catch(err => console.log(err));
    }
  };

  export const isAutheticated = () => {
    if (typeof window == "undefined") {
      return false;
    }
    if (localStorage.getItem("jwt")) {
      return JSON.parse(localStorage.getItem("jwt"));
    } else {
      return false;
    }
  };