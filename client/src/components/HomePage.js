import {useOutletContext} from 'react-router-dom';
import { useNavigate, NavLink } from "react-router-dom";

import Button from 'react-bootstrap/Button';

function HomePage(){
    const navigate = useNavigate()

    return(
        <div>
            <h1>Welcome to Pack Assist!</h1>
            <p>instructions how to use app...</p>
        </div>
    )
}

export default HomePage