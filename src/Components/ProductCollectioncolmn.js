import React from 'react'
import { BsArrowLeft } from 'react-icons/bs';
import { useHistory } from 'react-router';

const ProductCollectioncolmn = () => {
    let history =useHistory();
    return (
        <div>
             <div className="navbars">
               <div className="upper">
        <div className="left">
         <BsArrowLeft onClick={()=> {history.push("/Readymade");}} /> 
               Men collection
            </div> 
            </div>   
             
       </div>
       <div className="collection-product">
           <div className="collection-box col-lg-6 col-md-3 col-sm-6 col-12">
               <div className="product-box">
                   <div className="box-img">
                   <p>Bulgari</p>
                    <span>FAXTAX PRODUCT SAMPLE</span>
                   <img src="Images/pic4.jpg" alt="" />
                   </div>
                   
                     <span>$200</span>
                    
               </div>
               <div className="product-box">
                   <div className="box-img">
                   <p>Bulgari</p>
                    <span>FAXTAX PRODUCT SAMPLE</span>
                   <img src="Images/pic4.jpg" alt="" />
                   </div>
                   
                     <span>$200</span>
                    
               </div>
            
            
           </div>
           <div className="collection-box col-lg-6 col-md-3 col-sm-6 col-12">
               <div className="product-box">
                   <div className="box-img">
                   <p>Bulgari</p>
                    <span>FAXTAX PRODUCT SAMPLE</span>
                   <img src="Images/pic4.jpg" alt="" />
                   </div>
                   
                     <span>$200</span>
                    
               </div>
               <div className="product-box">
                   <div className="box-img">
                   <p>Bulgari</p>
                    <span>FAXTAX PRODUCT SAMPLE</span>
                   <img src="Images/pic4.jpg" alt="" />
                   </div>
                   
                     <span>$200</span>
                    
               </div>
            
            
           </div>
       </div>
        </div>
    )
}

export default ProductCollectioncolmn
