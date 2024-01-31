function UserAddress(props){
    return(
        <div style={{textAlign: 'center'}}>
            <h3>Address: {props.user.address.city} {props.user.address.street}  {props.user.address.suite} </h3>

        </div>
    );
}

export default UserAddress;