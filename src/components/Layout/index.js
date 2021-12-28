import Header from "../Header";
import Footer from "../Footer";

//styles
import './loyout.css';


const Layout = ({children}) => {
    return (
        <>
            <Header/>
            <div className='wrapper max_width'>
                {children}
            </div>
            <Footer/>
        </>
    );
};

export default Layout;