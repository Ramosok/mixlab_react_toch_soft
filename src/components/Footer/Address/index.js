const Arddess = ({city, address, MonSat}) => {
    return (
        <div className='address_block'>
            <h3>{city}</h3>
            <p>{address}</p>
            <p>{MonSat}</p>
        </div>
    );
};

export default Arddess;