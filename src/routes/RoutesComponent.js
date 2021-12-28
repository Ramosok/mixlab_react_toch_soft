import {Route,Routes} from "react-router-dom";
import {ROUTE_NAMES} from "./routeNames";
import HomePage from "../pages/HomePage";
import CounterComponent from "../pages/CounterComponent";


const RoutesComponent = () => {
    return (
        <Routes>
            <Route path={ROUTE_NAMES.HOME} element={<HomePage/>}/>
            <Route path={ROUTE_NAMES.COUNTER} element={<CounterComponent/>}/>
        </Routes>
    );
};

export default RoutesComponent;
