//components
import Navigation from "./Navigation";
import UserAction from "./UserAction";
import Logo from "./Logo";
//styles
import './header.css'


const Header = () => {
    console.log('header')
    return (
        <div className='header__container flex_container'>
            <Navigation/>
            <Logo/>
            <UserAction/>
        </div>
    );
};

export default Header;