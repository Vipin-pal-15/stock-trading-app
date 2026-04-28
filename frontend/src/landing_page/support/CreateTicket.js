import React from 'react';
import { FaChartLine } from "react-icons/fa";
import {Link} from 'react-router-dom'
import { FaCoins } from "react-icons/fa";
import { GiConsoleController } from "react-icons/gi";
import { RiFundsFill } from "react-icons/ri";
import { SiZerodha } from "react-icons/si";
import { MdAccountBalance } from "react-icons/md";
import { FaHistory } from "react-icons/fa";


function CreateTicket() {
    return ( 
      <div className="container">
        <div className="row p-5 mt-5 mb-5">
          <h1 className="fs-2">To create a ticket, select a relevant topic</h1>
          <div className="col-4 p-5 mt-2 mb-2">
          <h4 className=""><span><MdAccountBalance/> </span>Account Opening</h4>
          <a href=''style={{textDecoration:"none", lineHeight:"2.5"}}>Online Account Opening</a>
          <br />
          <a href='' style={{textDecoration:"none", lineHeight:"2.5"}}>Offline Account Opening</a>
          <br />
          <a href='' style={{textDecoration:"none", lineHeight:"2.5"}}>Company, Partnership and HUF Account</a>
          <br />
          <a href='' style={{textDecoration:"none" ,lineHeight:"2.5"}}>Opening</a>
          <br />
          <a href='' style={{textDecoration:"none", lineHeight:"2.5"}}>NRI Account Opening</a>
          <br />
          <a href='' style={{textDecoration:"none", lineHeight:"2.5"}}>Charges at Zerodha</a>
          <br />
          <a href='' style={{textDecoration:"none", lineHeight:"2.5"}}>Zerodha IDFC FIRST Bank 3-in-1 Account</a>
          <br />
          <a href='' style={{textDecoration:"none", lineHeight:"2.5"}}>Getting Started</a>
        </div>
        <div className="col-4 p-5 mt-2 mb-2">
          <h4 className=""><span><SiZerodha/></span> Zerodha Account</h4>
          <a href=''style={{textDecoration:"none", lineHeight:"2.5"}}>Login Crdentials</a>
          <br />
          <a href='' style={{textDecoration:"none", lineHeight:"2.5"}}>Account MOdification and Segment Addition</a>
          <br />
          <a href='' style={{textDecoration:"none", lineHeight:"2.5"}}>DP ID and bank details</a>
          <br />
          <a href='' style={{textDecoration:"none" ,lineHeight:"2.5"}}>Your Profile</a>
          <br />
          <a href='' style={{textDecoration:"none", lineHeight:"2.5"}}>Transfer and conversion of shares</a>
          <br />
        </div>
        <div className="col-4 p-5 mt-2 mb-2">
          <h4 className=""><span><FaHistory/></span> Zerodha History</h4>
          <a href=''style={{textDecoration:"none", lineHeight:"2.5"}}>Margin/Ieverage,Product and Order types</a>
          <br />
          <a href='' style={{textDecoration:"none", lineHeight:"2.5"}}>Kite Web and Mobile</a>
          <br />
          <a href='' style={{textDecoration:"none", lineHeight:"2.5"}}>Trading FAQs</a>
          <br />
          <a href='' style={{textDecoration:"none" ,lineHeight:"2.5"}}>Corporate Action</a>
          <br />
          <a href='' style={{textDecoration:"none", lineHeight:"2.5"}}>Sentinel</a>
          <br />
          <a href='' style={{textDecoration:"none", lineHeight:"2.5"}}>Pi and other platforms</a>
          <br />
          <a href='' style={{textDecoration:"none", lineHeight:"2.5"}}>Stockreport+</a>
          <br />
          <a href='' style={{textDecoration:"none", lineHeight:"2.5"}}>GTT</a>
        </div>
        <div className="col-4 p-5 mt-2 mb-2">
          <h4 className=""><span><RiFundsFill/></span> Funds</h4>
          <a href=''style={{textDecoration:"none", lineHeight:"2.5"}}>Adding Funds</a>
          <br />
          <a href='' style={{textDecoration:"none", lineHeight:"2.5"}}>Fund Withrawal</a>
          <br />
          <a href='' style={{textDecoration:"none", lineHeight:"2.5"}}>eMandates</a>
          <br />
          <a href='' style={{textDecoration:"none" ,lineHeight:"2.5"}}>Adding Bank Account</a>
        </div>
        <div className="col-4 p-5 mt-2 mb-2">
          <h4 className=""><span><GiConsoleController/></span> Console</h4>
          <a href=''style={{textDecoration:"none", lineHeight:"2.5"}}>Report</a>
          <br />
          <a href='' style={{textDecoration:"none", lineHeight:"2.5"}}>Ledger</a>
          <br />
          <a href='' style={{textDecoration:"none", lineHeight:"2.5"}}>Portfolio</a>
          <br />
          <a href='' style={{textDecoration:"none" ,lineHeight:"2.5"}}>60 Day Challenge</a>
          <br />
          <a href='' style={{textDecoration:"none", lineHeight:"2.5"}}>IPO</a>
          <br />
          <a href='' style={{textDecoration:"none", lineHeight:"2.5"}}>Referral Program</a>
        </div>
        <div className="col-4 p-5 mt-2 mb-2">
          <h4 className=""> <span><FaCoins /></span> Coin</h4>
          <a href=''style={{textDecoration:"none", lineHeight:"2.5"}}>Understanding Mutual Funds</a>
          <br />
          <a href='' style={{textDecoration:"none", lineHeight:"2.5"}}>About Coin</a>
          <br />
          <a href='' style={{textDecoration:"none", lineHeight:"2.5"}}>Buying and selling through Coiin</a>
          <br />
          <a href='' style={{textDecoration:"none" ,lineHeight:"2.5"}}>Starting an  SIP</a>
          <br />
          <a href='' style={{textDecoration:"none", lineHeight:"2.5"}}>Managing your Portfolio</a>
          <br />
          <a href='' style={{textDecoration:"none", lineHeight:"2.5"}}>Coin App</a>
          <br />
          <a href='' style={{textDecoration:"none", lineHeight:"2.5"}}>Movinh to Coin</a>
        </div>
      </div>
    </div>
     );
}

export default CreateTicket;