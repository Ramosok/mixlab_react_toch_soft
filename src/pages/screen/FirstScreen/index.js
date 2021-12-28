//components
import CenterComponent from "./CenterComponent";
//static
import imgLeft from './../../../static/first-screen-left.svg'
import imgRight from './../../../static/first-screen-right.svg'
//styles
import './firstScreen.css'


const FirstScreen = () => {
    return (
        <div className='first__screen flex_container max_width'>
            <div className='img_left'>
                <img src={imgLeft} alt=""/>
            </div>
            <CenterComponent/>
            <div className='img_right'>
                <img src={imgRight} alt=""/>
            </div>

        </div>
    );
};

export default FirstScreen;