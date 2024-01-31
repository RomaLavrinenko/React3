import { useContext } from "react";
import { AppContext } from "../../App";
function UserDetails(props){
    const newName = useContext(AppContext);
    return(
        <div style={{border: '1px solid black', borderRadius: '5px', textAlign: 'center'}}>
            <h1>{newName} {props.user.id}</h1>
            <h2>{props.user.name} -- {props.user.username}</h2>
            <h4>{props.user.email}</h4>
            <h4>{props.user.phone}</h4>
            <h4>{props.user.website}</h4>

        </div>
    );
}

export default UserDetails;