//components
import ButtonTypical from "../../../../components/ButtonTypical";
//static
import rabbit from './../../../../static/first-screen-rabbit.svg'
//styles
import './centerComponent.css'

const CenterComponent = () => {

    return (
        <div className='center__component'>
            <h1>The pet pharmacy <br/> humans are jealous of.</h1>
            <p>5 stars on <a href="#">Yelp</a>,<a href="#">Google</a> and <a href="#">Facebook</a> because your<br/> best friend deserves only the best in pet care. </p>
            <ButtonTypical
                tittle={'Try Mixlab'}
            />
            <div className="rabbit">
                <img src={rabbit} alt=""/>
            </div>
        </div>
    );
};

export default CenterComponent;