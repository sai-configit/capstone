
import { useState } from "react";

import Forminput from "../../Routes/sign-in/formelement.component";
import Button from "../button/button-component";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";



var obja = {
    "email": "",
    "dn": "",
    'pass': '',
    "confpass": ""
};



var Sign_up_fun = () => {

    console.log(getAuth());


    var [obj, setobj] = useState(obja);
    // console.log("obj:", obj);

    var { email, dn, pass, confpass } = obj;

    var handlechange = (event) => {
        var { name, value } = event.target;
        // console.log('name:', name);
        // console.log('val:', value);
        // console.log("obj in handle change before set:", obj);

        setobj({ ...obj, [name]: value });
        // console.log("obj in handle change after set:", obj);

    }

    // console.log("obj:", obj, ":obj");


    var handlesubmit = async (event) => {

        event.preventDefault();

        console.log("in hand submiyt");
        var auth = getAuth();
        console.log("sigup button clicked");
        console.log(auth);
        var response = await createUserWithEmailAndPassword(auth, email, pass);
        console.log(response);
        // create an account on firebase
    }

    return (
        <div className="sign-up-container">

            <h2>Don't have an account?</h2>
            <span>Sign up with your email and password</span>

            <form onSubmit={handlesubmit}>


                <Forminput
                    label='display name'
                    required={true}

                    type="text"
                    onChange={handlechange}
                    value={dn}
                    name="dn"
                ></Forminput>
                <Forminput
                    label='email'
                    required={true}

                    type="text"
                    onChange={handlechange}
                    value={email}
                    name="email"
                ></Forminput>
                <Forminput
                    label='password'
                    required={true}
                    type="password"
                    onChange={handlechange}
                    value={pass}
                    name="pass"
                ></Forminput>
                <Forminput
                    label='confirm password'
                    required={true}
                    type="password"
                    onChange={handlechange}
                    value={confpass}
                    name="confpass"
                ></Forminput>
                <Button type="submit">Sign up</Button>


            </form>
        </div >


    );
}

export default Sign_up_fun;
