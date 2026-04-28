import React from 'react';

function Hero() {
    return ( 
        <section className="container" id="supporthero">
        <div className="p-5" id="supportWrapper">
          <h5>Support Portal</h5>
          <a href=''>Track Tickets</a>
      </div>
      <div className="row p-5 m-3">
      <div className="col-6 p-3">
        <h1 className='fs-3'>Search for an answer or browse help topics to create a ticket</h1>
        <input placeholder="Eg. how do I activate F&Q, why is my order getting rejected.."/>
        <br />
        <a href=''>Track account opening</a>
        <a href=''>Track segment activation</a>
        <a href=''>Intrady margins</a>
        <a href=''>Kite user manual</a>
      </div>
      <div className="col-6 p-3">
        <h1 className='fs-3'>Featured</h1>
        <ol>
          <li><a href=''>Current takeovers and Delisting - January 2024</a></li>
          <br />
          <li><a href=''>Latest Intrady leverages - MIS & CO</a></li>
        </ol>
      </div>
      </div>
    </section>
     );
}

export default Hero;