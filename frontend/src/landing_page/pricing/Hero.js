import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 border-bottom text-center">
        <h1>Pricing</h1>
        <h2 className="text-muted fs-5 mt-3">
          Free equity investment and flat ₹20 trady and F&Q trades
        </h2>
      </div>
      <div className="row p-5 mt-5 text-center">
        <div className="col-4 p-4">
          <img src="media\image\images\pricing0.svg"></img>
          <h1 className="fs-3">Free equity delivery</h1>
          <p className="text-muted">
            All equity delivery investments (NSE, BSE), are absolutly free -- ₹
            0 brokerage
          </p>
        </div>
        <div className="col-4 p-4">
          <img src="media\image\images\intradayTrades.svg"></img>
          <h1 className="fs-3">intraday and F&O trades</h1>
          <p className="text-muted">
            Flat Rs. or 0.03% (whichever is lower) per executed order on intrady
            trades across equity,currency,and commodity trades.
          </p>
        </div>
        <div className="col-4 p-4">
          <img src="media\image\images\pricing0.svg"></img>
          <h1 className="fs-3">Free direct MF</h1>
          <p className="text-muted">
            All direct mutual fund investments are absolutly free - ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
