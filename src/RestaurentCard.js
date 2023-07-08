import React from 'react'

function RestaurentCard(restaurent) {
  return (
    
  //  console.log( restaurent?.restaurent.map((x)=>x.menu.map((X)=>X.name)))
      restaurent?.restaurent.map((x)=>x.menu.map((x,index)=>(
        <div key={index} style={{display : "flex ", flexDirection:"column", border:"1px solid black", padding:"0.2rem", margin:"0.5rem"}}>
          <img src={x.imgSrc} width={500} height={300} alt={x.name}/>
          <div>Name : {x.name}</div>
          <div>Price : {x.price}</div>
          
        </div>
  
   ) )) 
     
     
     
  
     
  
  )
}

export default RestaurentCard