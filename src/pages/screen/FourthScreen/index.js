//components
import ButtonTypical from "../../../components/ButtonTypical";
//static
import gerlAndDog from './../../../static/gerlAndDog.svg'

//styles
import './fourthScreen.css';

const FourthScreen = () => {
    return (
        <div className='fourth_screen_container'>
            <div className='fourth_screen_left_block'>
                <img src={gerlAndDog} alt=""/>
            </div>
            <div className='fourth_screen_right_block'>
                <p className='uppercase_text'>For Veterinarians</p>
                <h2 className='fourth_screen_tittle'>We're here to support you and your practice</h2>
                <p className='fourth_screen_body'>
                    Mixlab offers a simple, fast, reliable (and fun) home delivery pharmacy service for your clients.
                    No more delays, no more miscommunications, no more grumpy pets.
                    It’s time to partner with a pharmacy that cares about customer experience as much as you do.
                </p>
                <ButtonTypical
                    tittle={'Learn More'}
                />
            </div>

        </div>
    );
};

export default FourthScreen;