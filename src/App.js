import { useState } from 'react';
import './index.css';

function App() {
      const listings =[
        {
          "id" : 1,
          "price":20,
          "image":require('./images/d1.jpg')
        },
        {
          "id" : 2,
          "price":20,
          "image":require('./images/d2.jpg')
        },
        {
          "id" : 3,
          "price":20,
          "image":require('./images/d3.jpg')
        },
        {
          "id" : 4,
          "price":20,
          "image":require('./images/d4.jpg')
        },
        {
          "id" : 5,
          "price":20,
          "image":require('./images/d5.jpg')
        },
        {
          "id" : 6,
          "price":30,
          "image":require('./images/d6.jpg')
        },
        {
          "id" : 7,
          "price":30,
          "image":require('./images/d7.jpg')
        },
        {
          "id" : 8,
          "price":10,
          "image":require('./images/d8.jpg')
        },
        {
          "id" : 9,
          "price":10,
          "image":require('./images/las1.jpg')
        },
        {
          "id" : 10,
          "price":10,
          "image":require('./images/las2.jpg')
        },
        {
          "id" : 11,
          "price":10,
          "image":require('./images/las3.jpg')
        },
        {
          "id" : 12,
          "price":5,
          "image":require('./images/lays4.jpg')
        },
        
      ]

const [data] = useState(listings);

const getitem =()=>
{
  const prices = document.getElementById('price').value;
  const codes  = document.getElementById('code').value;
  const result = document.getElementById('display');
  const des = document.getElementById('des');
   
  const  quantity = document.getElementById('quantity').value;
  if(prices === '' && codes === '' && quantity === ''){
    alert('please enter the values')
  }

   data.map(e =>{
        const qprice = e.price * quantity;
       if(e.id.toString() === codes && qprice<=prices){
          const remaingbal = prices - qprice;
          result.innerHTML=`<img src=${e.image}  width='100px' height='100px' />
           <p> Enter amount : ${prices} </p>
           <p className='balance'> Remaining Balance : ${remaingbal} </p>
           <span> Received : ${quantity} </span>
  
          `
        }else if(e.id.toString() === codes && qprice>prices){
          des.innerHTML  = 'insufficent funds'

        }

    
        // if(e.id.toString() === codes && e.price.toString() === prices){
        //   
        // }
        //  return result;
   })



} 
  return (
    <div className="App">
         <div className='main'>
         <h2>Vending Machine</h2>
          <div className='main'>
         
            {
              data.map(({id,image,price}) =>(
                  <div className='card'>
                    <h1>{id}</h1>
                    <img src={image} alt={price}/>
                     <p>{price}</p>
                  </div>  
              ))
            }
           
         

         </div>
         </div>
         <div className='getitems'>
          <br/>
              <label>Enter Price </label>
              <input type='text' id='price' placeholder='enter a price' />
              <label>Enter Code </label>
              <input type='text' id='code' placeholder='enter a code' />
              <label>Enter quatity </label>
              <input type='num' placeholder='enter quantity' id='quantity'/>
              <button onClick={getitem}>GET</button><br/>
           <span id='des'>
            
           </span>
          <ul id='display'>
            
         </ul>
           </div>
    </div>
  );
}

export default App;
