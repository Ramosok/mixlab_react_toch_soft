//components
import LogoCard from "./LogoCard";
//data
import {logoList} from "./data";
//styles
import './logoScreen.css';



const LogoScreen = () => {
    return (
        <div className='logo_screen_container'>
            {logoList.map(({img}) =>
                <LogoCard
                    key={Math.random()}
                    img={img}
                />)}
        </div>
    );
};

export default LogoScreen;