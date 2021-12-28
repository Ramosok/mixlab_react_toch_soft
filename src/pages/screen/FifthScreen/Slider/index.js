//components
import CardSlider from "./CardSlider";
//data
import {cardSliderList} from "./data";
//styles
import './slider.css';



const Slider = () => {

    return (
        <div className="carousel">
            <ul className="card_container">
                {cardSliderList.map(({img, text, logoSocial, Link}) =>
                    <li key={Math.random()} className='card_carousel'>
                        <CardSlider
                            img={img}
                            text={text}
                            logoSocial={logoSocial}
                            Link={Link}
                        />
                    </li>)}
            </ul>
        </div>
    );
};

export default Slider;