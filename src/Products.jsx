import React from 'react';
import data from "./Data";
import { useState } from "react";

function Products() {


  
        
    }
    data.map((elem,idx)=>{

        return <>
 
        <div className="display" key={idx} >
         <h2>{elem.name}</h2>
         <img src={elem.image}/>
         <h3>{elem.price}</h3>
         {/* <button onClick={()=>addTocart(elem)}>Add to cart</button> */}
         </div>
 
         </>
 
        })


export default Products
