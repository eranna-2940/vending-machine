import { useState } from 'react';
import './index.css';

function App() {
      const listings =[
        {
          "id" : 1,
          "price":20,
          "quantity":12,
          "image":require('./images/d1.jpg')
        },
        {
          "id" : 2,
          "price":20,
          "quantity":10,
          "image":require('./images/d2.jpg')
        },
        {
          "id" : 3,
          "price":20,
          "quantity":10,
          "image":require('./images/d3.jpg')
        },
        {
          "id" : 4,
          "price":20,
          "quantity":10,
          "image":require('./images/d4.jpg')
        },
        {
          "id" : 5,
          "price":20,
          "quantity":10,
          "image":require('./images/d5.jpg')
        },
        {
          "id" : 6,
          "price":30,
          "quantity":10,
          "image":require('./images/d6.jpg')
        },
        {
          "id" : 7,
          "price":30,
          "quantity":10,
          "image":require('./images/d7.jpg')
        },
        {
          "id" : 8,
          "price":10,
          "quantity":10,
          "image":require('./images/d8.jpg')
        },
        {
          "id" : 9,
          "price":10,
          "quantity":10,
          "image":require('./images/las1.jpg')
        },
        {
          "id" : 10,
          "price":10,
          "quantity":10,
          "image":require('./images/las2.jpg')
        },
        {
          "id" : 11,
          "price":10,
          "quantity":10,
          "image":require('./images/las3.jpg')
        },
        {
          "id" : 12,
          "price":5,
          "quantity":10,
          "image":require('./images/lays4.jpg')
        },
        
      ]
const [data] = useState(listings);
const getitem =()=>
{
   document.getElementById('display').innerHTML=''
   document.getElementById('des').innerHTML=''
  const prices = document.getElementById('price').value;
  const codes  = document.getElementById('code').value;
  const result = document.getElementById('display');
  const des = document.getElementById('des');
  const  quantity = document.getElementById('quantity').value;
  
  if(prices === '' || codes === '' || quantity === ''){
    alert('please enter the values')
  }else{
   data.map(e =>{
        const qprice = e.price  * quantity;
        
       if(e.id.toString() === codes && qprice<=prices){
          const remaingbal = prices - qprice;
          const remquantity = document.getElementById(e.quantity).innerHTML;
          for(let i=0;i<quantity;i++){
            result.innerHTML+=`<img src=${e.image}  width='90px' height='90px' />`
          }
          des.innerHTML=`<p> Remaining Balance : ${remaingbal} </p>
          <span> Purchased : ${quantity} </span>
          <h4>Please take your product </h4>`
          document.getElementById('price').value =''
          document.getElementById('code').value =''
          document.getElementById('quantity').value=''
          document.getElementById(e.quantity).innerHTML = remquantity - quantity;
          // console.log(e.quantity)
          count = 0;
       
        }else if(e.id.toString() === codes && qprice>prices){
         des.innerHTML  = ``
          result.innerHTML=''
          // document.getElementById('Add').addEventListener("click",getvalue);
        }
        return result;
   })
  }
}
var count = 0;
const getquant =(e)=>{
 var id = e.currentTarget.id
  if(document.getElementById('code').value === id.toString()){
    count++
    // document.getElementById('quant').value = document.getElementById('quant').value -1;
    // console.log( document.getElementById('quantity').value )
     quantitycount(id,count);
  }  
}

  const quantitycount=(id,count)=>{
    
    data.map(e =>{
         if(e.quantity < count && e.id.toString() === id){
          // console.log(count)
            document.getElementById('des').innerHTML = 'invalid quantity'
         }else if(e.id.toString() === id){
          //  console.log("else")
          document.getElementById('quantity').value = count;
         }
    })


  }
 
function validprice(){
  let fname = document.getElementById('price').value;
  let errorname = document.getElementById("name1");
  var letterNumber = /^[0-9/,/" "/]+$/;

  if((fname.match(letterNumber)) || fname.length===0){
      errorname.innerHTML =""
  }else{
      errorname.innerHTML = 'Enter only Numbers only'
  }
}
function validcode(){
  let code  = document.getElementById('code').value;
  let errorname = document.getElementById("name2");
  var letterNumber = /^[0-9/,/" "/]+$/;

  if((code.match(letterNumber)) || code.length === 0){
      errorname.innerHTML =""
  }else{
      errorname.innerHTML = 'Enter only Numbers only'
  }
  

}

 return (
    <div className="App">
         <div className='main1'>
         <h2>Vending Machine</h2>
         </div>
          <div className='main'>
            {
              data.map(({id,image,price,quantity}) =>(
                  <div className='card'>
                    <h1>{id}</h1>
                    <img onClick={getquant} src={image}  id={id} alt={price}/>
                     <p>{price}</p>
                     <span id={quantity}>{quantity}</span>
                  </div>  
              ))
            }
         </div>
         <div className='getitems'>
          <br/>
              <label>Enter Price </label>
              <input type='text' id='price' placeholder='Enter a price' onKeyUp={validprice} />
              <p id='name1'></p>
              <label>Enter Code </label>
              <input type='text' id='code' placeholder='Enter a code' onKeyUp={validcode} />
              <p id='name2'></p>
              <label>Enter quatity </label>
              <input type='number' placeholder='Enter quantity' id='quantity'/>
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