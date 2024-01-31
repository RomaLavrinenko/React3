import UserDetails from "./UserInfo/UserDetails";
import UserAddress from "./UserInfo/UserAddress";
import Company from "./UserInfo/Company";
import style from './User.module.css';
function User(props){
    return(
        <div className={style.card}>
            <UserDetails user={props.user} />
            <UserAddress user={props.user}/>
            <Company user={props.user}/>

            
        </div>
    );
}

export default User;