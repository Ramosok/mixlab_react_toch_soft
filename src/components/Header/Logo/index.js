import {Link} from "react-router-dom";
//static
import logo from './../../../static/LOGO.svg'
//styles
import './logo.css'


const Logo = () => {
    return (
        <div className='logo'>
            <Link to="/"><img src={logo} alt="LOGO"/></Link>
        </div>
    );
};

export default Logo;