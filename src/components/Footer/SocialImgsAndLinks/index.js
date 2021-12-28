const SocialImgsAndLinks = ({linkTo, img}) => {
    return (

        <a className='social_link' href={linkTo}><img src={img} alt=""/></a>

    );
};

export default SocialImgsAndLinks;