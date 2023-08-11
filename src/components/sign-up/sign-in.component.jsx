

import { resolvePath } from "react-router-dom";
import { signinwithgooglepopup, db_fun } from "../../utils/firebase/firebase.utils";
import { useState } from "react";
import Button from "../button/button-component";

import Formelement from "../../Routes/sign-in/formelement.component";

import Forminput from "../../Routes/sign-in/formelement.component";
import Sign_up_fun from "./signup.component";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

var login_fun = async () => {
    var response = await signinwithgooglepopup();


    var userdocrf = await db_fun(response.user)

}


var obja = {
    "email": "",

    'pass': '',

};

const SignIn = () => {

    var [obj, setobj] = useState(obja);
    // console.log("obj:", obj);

    var { email, dn, pass, confpass } = obj;

    var handlechange = (event) => {
        var { name, value } = event.target;
        console.log('name:', name);

        setobj({ ...obj, [name]: value });


    }



    var signinwithemail = async (event) => {
        event.preventDefault();

        console.log('sing in wmail');
        var auth = getAuth()
        console.log(auth);
        var response = await signInWithEmailAndPassword(auth, email, pass);
        console.log(response);


    }




    return (

        <div classname="sign-container">
            <h2>Arleady have an account?</h2>
            <span>Sigin with your email and password</span>
            <form>


                <Forminput
                    label='Email'
                    required={true}

                    type="text"
                    onChange={handlechange}
                    value={email}
                    name="email"
                ></Forminput>
                <Forminput
                    label='Password'
                    required={true}

                    type="text"
                    onChange={handlechange}
                    value={pass}
                    name="pass"
                ></Forminput>

                <div className="sign-buttons">
                    <Button onClick={login_fun}>Sign in with google</Button>
                    <Button btype='google' onClick={signinwithemail}> Sign in with email</Button>
                </div>

            </form>



        </div>
    );
}

export default SignIn;