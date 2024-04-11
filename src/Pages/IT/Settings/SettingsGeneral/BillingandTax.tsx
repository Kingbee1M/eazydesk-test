import React from 'react'

const BillingandTax = () => {
  return (
    <div className='settings_main_after'>
      <div className='settings_main_after_sup'>
        <h3>Billing & Tax</h3>
        <p>Lorem ipsum dolor sit amet consectetur</p>
      </div>

      <div className="container_linked_shopify">
        <div className='settings_credit_card_btn'>
          <h4 className='settings_main_credit_card'>Credit Card</h4>
          <p>Manage your credit cards</p>
          <button className='btn'>Update</button>
        </div>
        <div className='settings_credit_card_btn'>
          <h4 className='settings_main_credit_card'>Invoices</h4>
          <p>Manage your invoices</p>
          <button className='btn'>Update</button>
        </div>
      </div>
    </div>
  )
}

export default BillingandTax