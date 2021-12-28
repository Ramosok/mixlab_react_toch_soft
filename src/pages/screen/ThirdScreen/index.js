//components
import ButtonTypical from "../../../components/ButtonTypical";
import ImageTextComponent from "./ImageTextComponent";
//data
import {ImageTextComponentList, tittleComponent} from "./data";
//styles
import './thirdScreen.css';




const ThirdScreen = () => {

    return (
        <div className='third__screen__container'>
            <h2 className='third__screen__tittle'>{tittleComponent}</h2>
            <div className='image_text_component_list'>
                {ImageTextComponentList.map(({img, tittle, body}) => <ImageTextComponent
                    key={tittle}
                    img={img}
                    tittle={tittle}
                    body={body}
                />)}
            </div>
            <ButtonTypical
                tittle={'Learn More'}
            />
        </div>
    );
};

export default ThirdScreen;