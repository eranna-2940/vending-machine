function getvalue(){
    console.log('hil')
    const rem = document.getElementById("rem").value.toString();
    const prices = document.getElementById("price").value.toString();
    const res = parseInt(rem) + parseInt(prices);
       data.map(e =>{
        console.log(res,e.price,codes,e.id)
           if(res >= e.price && parseInt(codes) === e.id){
           
            const remaingbal = res - qprice;
            for(let i=0;i<quantity;i++){
              result.innerHTML+=`<img src=${e.image}  width='90px' height='90px' />`
             
            }
            des.innerHTML=`<p> Remaining Balance : ${remaingbal} </p>
            <span> Purchased : ${quantity} </span>
            <h4>Please take your product </h4>
  
            `
            document.getElementById('price').value =''
            document.getElementById('code').value =''
            document.getElementById('quantity').value=''
            count = 0;
         
           }
          })
  }