import SignIn from "./sign-in.component";
import Sign_up_fun from "./signup.component";
import './sign.styles.scss';


const Sign = () => {

    return (
        <div className="sign-container--">
            <SignIn></SignIn>
            <Sign_up_fun></Sign_up_fun>
        </div>

    );


};

export default Sign;