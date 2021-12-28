//components
import TextComponent from "./TextComponent";
//static
import dog from './../../../static/DOG.svg'
//data
import {textRight, tittleLeftBlock} from "./data";
//styles
import './secondSceen.css';

const SecondScreen = () => {


    return (
        <div className='second__screen'>
            <div className='left__block'>
                <h2>{tittleLeftBlock}</h2>
                <div>
                    <img className='dog' src={dog} alt=""/>
                </div>
            </div>
            <div className="right__block">
                {textRight.map(({tittle, body}) =>
                    <TextComponent
                        key={tittle}
                        tittle={tittle}
                        body={body}
                    />)}
            </div>
        </div>
    );
};

export default SecondScreen;