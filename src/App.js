
import CategoryItem from './components/category-item/category-item.component'
import Directory from './components/directory/directory.component';

import { Routes, Route } from 'react-router-dom';
import Home from './Routes/home'
import Navigation from './Routes/navigation/navigation.component'
import SignIn from './components/sign-up/sign-in.component';
import Sign from './components/sign-up/sign.component';
const Shop = () => {

    return (
        <p>in shop page</p>
    );
}
const Mop = () => {

    return (
        <p>in Mop page</p>
    );
}


const App = () => {

    // return <Home></Home>
    return (
        <Routes>
            <Route path="/" element={<Navigation />}>

                <Route path="/" element={<Home></Home>} />
                <Route path="/shop" element={<Shop></Shop>} />
                <Route path="/sign-in" element={<Sign />}></Route>

            </Route>
        </Routes>);


}

export default App;
