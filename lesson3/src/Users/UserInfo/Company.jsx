 function Company(props){
    return(
        <div style={{border: '1px solid black', borderRadius: '5px', textAlign: 'center'}}>
            <h3>Companny: {props.user.company.name}    </h3>
            <h4>{props.user.company.catchPhrase}</h4>
            <h4>{props.user.company.bs}</h4>

        </div>
    );
}

export default Company;