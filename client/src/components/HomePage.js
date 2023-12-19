import {useOutletContext} from 'react-router-dom';
import { useNavigate, NavLink } from "react-router-dom";

import Button from 'react-bootstrap/Button';

function HomePage(){
    const navigate = useNavigate()

    return(
        <div>
            <Button onClick={()=>navigate('/locations')}> View Locations</Button>
        </div>
    )
}

export default HomePage