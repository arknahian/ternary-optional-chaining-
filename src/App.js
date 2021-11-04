import './App.css';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { useEffect, useState } from 'react';
import Ternary from './Ternary/Ternary';
import User from "./Ternary/Components/User/User";


function App() {
  const [likeColor, setLikeColor] = useState('');
  const [friend, setFriend] = useState(true);
  const [users, setUsers] = useState([]);

  const handleLikeColor = () => {
    const color = likeColor ? '' : 'primary';
    setLikeColor(color)
  }


  const toggleFriend = () => {
    setFriend(!friend)
  }

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  }, []);

  // food stuff

  const [meal, setMeal] = useState('');
  const [search, setSearch] = useState('');
  useEffect(() => {
    const url = `www.themealdb.com/api/json/v1/1/search.php?s=${search}`;
    fetch(url)
    .then(res => res.json())
    .then(data => setMeal(data));
  }, [search]);
  
  const handleSearch = (event) => {
    setSearch(event.target.value);
  }

  return (
    <div className="App">
    <ThumbUpIcon onClick={handleLikeColor} color={likeColor}></ThumbUpIcon>
    <h1>Is Familiar : {friend.toString()}</h1>
    <button onClick={toggleFriend}>Toggle</button>
    <button onClick={() => setFriend(!friend)}>Another toggle by the inline code</button>
    <Ternary friend={friend}></Ternary>

    {
      users.map(user => <User user={user} key={user.id}></User>)
    }
    <br />
    <br />
    <input onChange={handleSearch} type="text" />
    <h3>Searching: {search}</h3>
    <h4>Result Found: {meal.length}</h4>
    </div>
  );
}

export default App;
