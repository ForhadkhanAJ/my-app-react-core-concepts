import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const iamwebDeveloper = ["Alif Khan AJ", "Forhad Khan Aj"]
  const products = [
    {name: 'Photoshop', price: '$90.99'},
    {name: 'Illustrator', price: '$60.99'},
    {name: 'PDF Reader', price: '$6.99'},
    {name: 'Premiere El', price: '$249.99'}
  ]
  const productNames = products.map(product => product.name)
  console.log(productNames)

  return (
    <div className="App">
      <header className="App-header">
        <p>I am a React Person</p>
        <Person name={iamwebDeveloper[1]}></Person>
        <Product product={products[0]}></Product>
        <Product product={products[1]} ></Product>
        <Product product={products[2]} ></Product>
        <ul>
          {
            products.map(product => <li>{product.name}</li>)
          }
        </ul>
        {
          products.map(pd => <Product product= {pd}></Product>)
        }
        <Counter></Counter>
        <Users></Users>
        </header>
    </div>
  );
}
// function Person(props){
//   const personStyle={
//     border: '2px solid green',
//     margin: '10px'
//   }
//   console.log(props)
//   return (
//   <div style={personStyle}>
//   <h1>Name❤️❤️: {props.name}</h1>
//   <h3>nayka❤️❤️: {props.nayka}<h4>❤️❤️❤️❤️❤️Love❤️❤️❤️: {props.love}</h4></h3>
//   <h4>Love❤️: {props.love}</h4>
//   </div>
//   )
// }
//2, practice
function Person(props){
  return (
    <div>
      <h1>My Name is : {props.name} </h1>
      <h3>My Profession is web development</h3>
    </div>
  )
}
//3, practice
function Product(props){
  const productStyle ={
    border: '1px solid gray',
    borderRadius: '5px',
    backgroundColor: 'lightgray',
    height: '200px',
    width: '200px',
    float: 'left'
  }
  const {name, price}=props.product;
return(
  <div style={productStyle}>
    <h3>{name}</h3>
    <h5>{price}</h5>
    <button>Buy now</button>
  </div>
)
}
//4, practice
function Child(props){
const name = props.name;
return <h3>Child: {name}</h3>
}

//11lesson, Increase, Decrease
function Counter(){
  const [count, setCount] = useState(100);
  const handleIncrease = () => {
    const newCount = count + 1;
    setCount(newCount);
  };
  return(
    <div>
      <h1>Count: {count}</h1>
      <button onMouseMove={handleIncrease}>Increase</button>
      <button onMouseMove = {() => setCount(count -1)}>Decrease</button>
    </div>
  )
}
//12lesson
function Users (){
  const [users, setUsers] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data));
  }, [])

  return(
    <div>
      <h3>Dynamic Users {users.length}</h3>
      <ul>
        {
          users.map(user => <li>{user.name}</li> )
        }
      </ul>
    </div>
  )
}

export default App;
