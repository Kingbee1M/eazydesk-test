import React from 'react'

const BillingandTax = () => {
  return (
    <div className='settings_main_after'>
    <div className='settings_main_after_sup'>
        <h3>Billing & Tax</h3>
        <p>Lorem ipsum dolor sit amet consectetur</p>
    </div>

    <h4 className='settings_main_credit_card'>Credit Card</h4>
    <p>Manage your credit cards</p>

    <div className='settings_credit_card_btn'>
					<button className='btn'>Update</button>
	</div>

    <h5 className='settings_main_invoice'>Invoices</h5>
    <p>Manage your invoices</p>

    <div className='settings_main_invoice_btn'>
                    <button className='btn'>Update</button>        
    </div>

    <h6 className='settings_main_tax_information'>Tax information</h6>
    <p>Manage your tax information</p>

    <div className='settings_main_tax_information_btn'>
                    <button className='btn'>Update</button>
    </div>

    
        

    </div>
  )
}

export default BillingandTax