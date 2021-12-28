const QuickLinks = ({linkTo, tittleLink}) => {

    return (
        <a className='color_text_link' href={linkTo}>{tittleLink}</a>
    );
};

export default QuickLinks;