//components
import ItemMenu from "../Navigation/ItemMenu";
import ButtonTypical from "../../ButtonTypical";
//styles
import './userAction.css'

const UserActions = () => {
    return (
        <div className='user__action'>
            <ItemMenu
                tittle={'Veterinarian login'}
                linkTo={'#'}
            />
            <ButtonTypical
              tittle={'Try Mixlab'}
            />
        </div>
    );
};

export default UserActions;