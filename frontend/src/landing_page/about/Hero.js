import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 mb-5">
        <h1 className="fs-2 text-center">
          We pioneereed the discount broking model in India
          <br />
          Now, we are broking ground with our technology.
        </h1>
      </div>

      <div
        className="row p-5 mt-5 border-top text-muted"
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
        <div className="col-6 p-5">
          <p>
            We kick-started operation on 15th of August,2025 with the goal of
            breaking all barriers that traders and investers face in India in
            terms of cost,support,and technology.We named the company Zerodha,a
            combination of Zero and "Rodha", the Sanskrit word for barrier
          </p>
          <p>
            Today.our disruptive pricing models and in-house technology have
            made us the biggest stock broker in India.
          </p>
          <p>
            Over 1+ Crore clients place millions of orders every day through our
            powerful ecosystem of investment palteforms,contributing over 15% of
            all retail trading volumes
          </p>
        </div>
        <div className="col-6 p-5">
          <p>
            In addition, we run a number of popular open online education and
            community intiatives to empower retail traders and investers.
          </p>
          <p>
            <a href="" style={{ textDecoration: "none" }}>
              Rainmatter
            </a>
            , our fintech fund and incubator, has invested in severs=al fintech
            startups with the goal of growing the India capital markets.
          </p>
          <p>
            And yet, we are always up to something new every day. Catch up on
            the latest updates on our blog or see what the media is saying about
            us.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
