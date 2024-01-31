import './App.css';
import { useEffect, useState , createContext} from "react";
import Users from './Users/Users';
import Child from './Child/Child';

export const AppContext = createContext(null);
function App() {
  const [name, setName] = useState('');
  const [users, setUsers] = useState([])
  const reName = (string) => setName(string);
  useEffect(() =>{
    getUsers();
  },[])
  
  const getUsers = async() =>{
    try{
      let response = await fetch('https://jsonplaceholder.typicode.com/users')
      let date = await response.json()
      setUsers(date)
    }catch{}
  }

  return (
    <>
    <header>Users list</header>
    <AppContext.Provider value={name}>
      <Users users ={users} />
      <Child reName={reName}/>
    </AppContext.Provider>
    
    </>
  );
}

export default App;
