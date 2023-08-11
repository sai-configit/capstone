import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as Logo } from "./crown.svg"
import './navigation.styles.scss'

const Navigation = () => {

    return (
        <Fragment>
            <div class="navigation">
                <Link to="/">
                    <div>
                        <Logo></Logo>
                    </div>
                </Link>

                <div className="nav-links-container">
                    <Link className="nav-link" to="/shop">
                        Shop
                    </Link>
                    <Link className='nav-link' to="/sign-in"> Sign-in</Link>
                </div>

            </div>
            <Outlet></Outlet>
        </Fragment>

    );

}
export default Navigation;