import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { VerticalGraph } from './VerticalGraph';

// import { holdings } from '../data/data';

const Holdings = () => {

  const [allHoldings,setallHoldings]=useState([]);

  useEffect(()=>{
    axios.get("http://localhost:3000/api/stock").then((res)=>{
      setallHoldings(res.data);
    })
  },[])

const labels = allHoldings.map((item)=>item.name);
const data = {
  labels,
  datasets:[
    {
      label:"Stock Price",
      data:allHoldings.map((stock)=>stock.price !== 'N/A' ? Number(stock.price):0),
      backgroundColor:"rgba(255,99,132,0.5)",
    }
  ]
}

console.log(labels)
  console.log("all holdings",allHoldings)
  return (
   <>
   <h3>Holdings ({allHoldings.length})</h3>

   <div className='title'>
    <div className='order-table'>
      <table>
        <tr>
          <th>Instrument</th>
          <th>Qty.</th>
          <th>Avg. Cost</th>
          <th>LTP</th>
          <th>Cur. val</th>
          <th>P&L</th>
          <th>Net chg.</th>
          <th>Day chg.</th>
        </tr>

        {allHoldings.map((stock,index)=>{
          const price=Number(stock.price);
          const curValue=price?price*stock.qty:0;
          const ispProfit=curValue-stock.avg*stock.qty>=0.0;
          const profClass=ispProfit ? "profit":"loss";
          const dayClass=stock.day.includes("-")?"loss" : "profit";

          // const curValue=stock.price*stock.qty;
          // const ispProfit=curValue-stock.avg*stock.qty>=0.0;
          // const profClass=ispProfit ? "profit":"loss";
          // const dayClass=stock.isLoss ? "loss" : "profit";

          return(
          <tr key={index} >
          <td>{stock.name}.</td>
          <td>{stock.qty}</td>
          <td>{stock.avg?stock.avg.toFixed(2):"N/A"}. </td>
          <td>{stock.price !== "N/A" ? Number(stock.price).toFixed(2):"N/A"}</td>
          <td>{curValue?curValue.toFixed(2):"N/A"}</td>
          <td className={profClass}>{(curValue-stock.avg*stock.qty).toFixed(2)}</td>
          <td className={profClass}>{stock.net}</td>
          <td className={dayClass}>{stock.day}</td>
        </tr>
          )
        })}
      </table>
    </div>

    <div className='row'>
      <div className='col'>
        <h5>29,875.<span>55</span>{""}</h5>
        <p>Total Investment</p>
      </div>
      <div className='col'>
        <h5>31,428.<span>95</span>{""}</h5>
        <p>Current value </p>
      </div>
      <div className='col'>
        <h5>15,53.40 (+5.20%)</h5>
        <p>P&L</p>
      </div>
    </div>
   </div>
   <div style={{width:"100%",height:"300px",}}>
   {allHoldings.length>0 && (<VerticalGraph data={data}/>)}
   </div>
   </>
  )
}

export default Holdings