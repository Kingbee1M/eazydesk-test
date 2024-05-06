import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";
import "../../src/css/Checkout.css";
import { Dropdown, DropdownButton } from "react-bootstrap";

const Checkout = () => {
  const [selectedCountry, setSelectedCountry] = useState("Nigeria");

  const handleCountrySelect = (country: any) => {
    setSelectedCountry(country);
  };

  const countries = [
    "Nigeria",
    "USA",
    "Canada",
    "UK",
    "Australia",
    // Add more countries as needed
  ];
  return (
    <div className='main-body'>
      <Header />
      <div className='body-container row gap-0'>
        <div className='first-container-div col-lg-7 col-md-12 col-sm-12 col-xs-12'>
          <div className='first-div'>
            <h1>Checkout</h1>
            <h2>Billing Address</h2>
            <p className='country'>
              <span>Country</span> <span className='required'>Required</span>
            </p>
            <DropdownButton
              id='country-dropdown'
              title={selectedCountry}
              className='custom-dropdown' // Add a custom class for styling
            >
              {countries.map((country, index) => (
                <Dropdown.Item
                  key={index}
                  onClick={() => handleCountrySelect(country)}
                  className='custom-dropdown-item' // Add a custom class for styling dropdown items
                >
                  {country}
                </Dropdown.Item>
              ))}
            </DropdownButton>
          </div>
        </div>
        <div className='second-container-div col-lg-5 col-md-12 col-sm-12 col-xs-12 bg-secondary'>
          <p>box 1</p>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
