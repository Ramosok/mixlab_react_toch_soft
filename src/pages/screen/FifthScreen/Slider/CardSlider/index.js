const CardSlider = ({img, text, logoSocial, Link}) => {
    return (
        <>
            <img className='img_container' src={img} alt=""/>
            <div className='card_text_container'>
                <p className='card_text_container_slider'>{text}</p>
                <div className='logo_link_slider'><img src={logoSocial} alt=""/><a href="#">{Link}</a></div>
            </div>
        </>
    );
};

export default CardSlider;