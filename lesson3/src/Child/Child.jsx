import SubChildOne from './SubChildOne';
import SubChildTwo from './SubChildTwo';
function Child(props){
    const {reName} = props;
    return(
        <>
           <SubChildOne /> 
           <SubChildTwo reName={reName}/> 
        </>
    );
}

export default Child;