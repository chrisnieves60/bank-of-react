import React from 'react';
import axios from 'axios';
import {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AccountBalance from './AccountBalance';
import { Button } from 'react-bootstrap';
import App from '../App';
import ReactDOM from 'react-dom';
import reactDom from 'react-dom';

function Debits(props) {

    const [debits, setDebits] = useState ([])
   
    const getDebits = async () => {
        await axios.get(`https://moj-api.herokuapp.com/debits`)
        .then(res => {
            setDebits(res.data) //returns array of objects w key value pairs
            
        })
    }
    useEffect(() => { //run getGifs function, when state changes, rerender getGifs
        getDebits()
      }, [])

      

      const addToDebits = (e) => {
        e.preventDefault();
        const date = new Date();
        let newArr = {
            description: document.getElementById("description").value , 
            amount: document.getElementById("amount").value , 
            date: `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
        }
        
    }
 

 

    return (
        <>
        <style type="text/css">
    {`
    .all {
      background-color: #4B4B4C;
      color: white;
    }
   
    
    `}
  </style>
        <div className='all'>
        <div className="header">
            <h1 className='text-center'>Debits</h1>
            <AccountBalance accountBalance={props.accountBalance}/>

            <br></br><br></br>
        </div>

        <div class="container">
  <div class="row">
    <div class="col align-self-start">
    <h4 className="text-align-left">Date</h4>
    <br></br>
      {debits.map((e) => { //create new array e 
         return <p className="col-14" key={e.id}>{e.date}</p>})
      }   
      <p id="dateToday"></p>

    </div>
    <div class="col align-self-center">
    <h4 className="text-align-left">Description</h4>
    <br></br>
      {debits.map((e) => {
        return <p id="desc" className='col-14' key={e.id}>{e.description}</p>})
      }
      <p id="descriptionOutput"></p>
    </div>
    <div class="col align-self-end">
    <h4 className="text-align-left">Amount</h4>
    <br></br>
      {debits.map((e) => {
        return <p className='col-14' key={e.id}>{e.amount}</p>})
      }      
      <p id="amountOutput"></p>
    </div>
  </div>
  
  <p>Description</p>
  <input className='addDescription col-2' id="description"></input>
  <p>Amount</p>
  <input className='addAmount col-2 mr-3' id="amount"></input>
  <Button onClick={addToDebits}>Add Item</Button>
  </div>
  </div>
 
        
     


        
          
                                            
        </>

    )
  }

export default Debits;