import React from 'react'

const LinkedShops = () => {
   return (
      <div className='settings_main_after'>
         <div className='settings_main_after_sup'>
            <h3>Linked Shops</h3>
            <p>Lorem ipsum dolor sit amet consectetur</p>
         </div>
         <div className="container_linked_shopify">
            <div className='settings_main_linked_shopify_container'>
               <h4 className='settings_main_linked_shopify_stores'>Linked Shopify Stores</h4>
               <p>Lorem ipsum dolor sit amet consectetur</p>
               <div className="input__box">
                  <h5 className='settings_main_link'>Link</h5>
                  <input type="text" placeholder="xyz.myshopify.com" className='settings_main_link_input' />
               </div>
               <button className='btn'>Link Shop</button>
            </div>

         </div>
      </div>
   )
}

export default LinkedShops