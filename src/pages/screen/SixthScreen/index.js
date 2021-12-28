//components
import Card from "./Card";
import ButtonTypical from "../../../components/ButtonTypical";
//data
import {CardsInfoList} from "./data";
//styles
import './sixthScreen.css';




const SixthScreen = () => {
    return (
        <div className='sixth_screen_container'>
            <h2 className='text_center'>In the Wild</h2>
            <p className='text_center'>
                In The Wild is a collection of pieces to help close the communication gap,<br/>
                while growing the love (and understanding) between you and your best pal.
            </p>
            <div className='card_container_six_screen'>
                {CardsInfoList.map(({img, date, tittle, body, link}) =>
                    <Card
                        key={date}
                        img={img}
                        date={date}
                        tittle={tittle}
                        body={body}
                        link={link}
                    />)}
            </div>
            <ButtonTypical
                tittle='View more'
            />
        </div>
    );
};

export default SixthScreen;