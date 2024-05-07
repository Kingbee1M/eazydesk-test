import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";
import "../../src/css/Checkout.css";
import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@material-ui/core";
import { IoIosLock } from "react-icons/io";
import { BsPaypal } from "react-icons/bs";
import { FaCreditCard } from "react-icons/fa";
import { RiH6, RiVisaLine } from "react-icons/ri";
import { RiMastercardFill } from "react-icons/ri";
import { Table } from "react-bootstrap";

// import { SelectChangeEvent } from "@material-ui/core";

const Checkout = () => {
  const [selectedCountry, setSelectedCountry] = useState("Nigeria");
  const [value, setValue] = React.useState("female");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

  const handleCountrySelect = (event: any) => {
    setSelectedCountry(event.target.value as string);
  };

  const countries = [
    "Nigeria",
    "USA",
    "Canada",
    "UK",
    "Japan",
    "Ghana",
    "France",
    "Togo",
    "Australia",
    // Add more countries as needed
  ];
  const payPalLabel = (
    <div
      style={{
        display: "flex",
        gap: "10px",
        fontSize: "15px",
      }}
    >
      <div
        style={{
          margin: "auto",
          backgroundColor: "white",
          padding: "3px 8px",
        }}
      >
        <BsPaypal
          style={{
            color: "#003087",
          }}
        />
      </div>

      <p style={{ margin: "auto", fontSize: "15px" }}>PayPal</p>
    </div>
  );
  const creditCardLabel = (
    <div
      style={{
        width: "full",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "10px",
          fontSize: "15px",
        }}
      >
        <div
          style={{
            margin: "auto",
            backgroundColor: "white",
            padding: "3px 7px",
          }}
        >
          <FaCreditCard />
        </div>
        <p style={{ margin: "auto", fontSize: "15px" }}>Credit/Debit Card</p>
      </div>
      {/* <div
                          style={{
                            display: "flex",
                            margin: "auto",
                            gap: "10px",
                          }}
                        >
                          <RiVisaLine
                            style={{
                              backgroundColor: "white",
                              color: "blue",
                              margin: "auto",
                            }}
                          />
                          <RiMastercardFill
                            style={{
                              backgroundColor: "white",
                              color: "yellow",
                              margin: "auto",
                            }}
                          />
                        </div> */}
    </div>
  );
  return (
    <div className='main-body'>
      <Header />
      <div className='body-container row gap-0'>
        <div className='first-container-div col-lg-7 col-md-12 col-sm-12 col-xs-12'>
          <div className='first-div'>
            <h1>Checkout</h1>
            <h2>Billing address</h2>
            <div className='country'>
              <p style={{ marginTop: "20px" }}>
                <span>Country</span> <span className='required'>Required</span>
              </p>
              <Box className='drop-down-box'>
                <FormControl fullWidth>
                  <Select
                    className='border'
                    labelId='demo-simple-select-label'
                    id='demo-simple-select'
                    value={selectedCountry}
                    onChange={handleCountrySelect}
                  >
                    {countries.map((country: any) => (
                      <MenuItem value={country}>{country}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Box>
            </div>
            <div>
              <p className='checkout-text'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil,
                deleniti reprehenderit? Iure ab ea, quidem vero nostrum quae
                quasi! Cumque unde soluta illo, culpa possim
              </p>
              <div className='payment-method'>
                <div>
                  <h2>Payment method</h2>
                </div>
                <div>
                  <p className='secured'>
                    Secured connection
                    <IoIosLock className='falock-icon' />
                  </p>
                </div>
              </div>
            </div>
            <div className='radio-form'>
              <FormControl fullWidth>
                <RadioGroup
                  aria-labelledby='demo-controlled-radio-buttons-group'
                  name='controlled-radio-buttons-group'
                  value={value}
                  onChange={handleChange}
                >
                  <FormControlLabel
                    className='payment-input'
                    value='paypal'
                    control={<Radio size='small' color='primary' />}
                    label={payPalLabel}
                  />
                  <FormControlLabel
                    className='payment-input2'
                    value='card'
                    control={<Radio size='small' color='primary' />}
                    label={creditCardLabel}
                  />
                </RadioGroup>
              </FormControl>
            </div>
          </div>
        </div>
        <div className='second-container-div col-lg-5 col-md-12 col-sm-12 col-xs-12'>
          <h2 className='price-summary'>Summary</h2>

          <TableContainer>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell scope='row' align='left'>
                    Original Price:
                  </TableCell>
                  <TableCell align='right'>#22,900</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component='th' scope='row' align='left'>
                    Discounts:
                  </TableCell>
                  <TableCell align='right'>-#19,000</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component='th' scope='row' align='left'>
                    <h6 className='total-summary'>Total:</h6>
                  </TableCell>
                  <TableCell align='right'>
                    <h6 className='total-summary'>#3,900</h6>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
          <div>
            <p className='price-agreement'>
              By completing your purchase, you agree to these{" "}
              <a href='/' className='terms-and-conditions'>
                Terms and Condition
              </a>
            </p>
            <Button variant='contained' size='large' color='primary'>
              Complete Checkout
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
