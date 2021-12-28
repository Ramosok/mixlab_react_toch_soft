
const Card = ({img, date, tittle, body, link}) => {
    return (
        <div className='card'>
            <div>
                <img src={img} alt=""/>
            </div>
            <div>{date}</div>
            <div>{tittle}</div>
            <div>{body}</div>
            <div><a href="#">{link}</a></div>
        </div>
    );
};

export default Card;