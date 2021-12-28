
const TextComponent = ({body,tittle}) => {
    return (
        <div className='right_block_container'>
            <h2 className='right_block_tittle font_roboto_medium'>{tittle}</h2>
            <p className='right_block_body'>{body}</p>
        </div>
    );
};

export default TextComponent;