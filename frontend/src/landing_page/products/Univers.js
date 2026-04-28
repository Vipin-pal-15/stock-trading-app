import React from "react";
import { Link } from "react-router-dom";

function Univers() {
  return (
    <div className="container mt-5">
      <div className="row text-center">
          <h1>The Zerodha Univers</h1>
          <p>
            Extend your trading and investment experience even further with our
            partner platforms
          </p>
      
        <div className="col-4 p-3 mt-5">
          <img src="media\image\images\smallcaseLogo.png"></img>
          <p className="text-small text-muted">Thematic investment platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaTGGm3nu-gf_Oomx6CxRf0yypK_B7NcRRX7qMGpMp_N4AJS3RfEh2PBo-Uz_bdqBh438&usqp=CAU"></img>
          <p className="text-small text-muted">Algo & strategy platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media\image\images\sensibullLogo.svg"></img>
          <p className="text-small text-muted">Options tradin plateform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media\image\images\zerodhaFundhouse.png"></img>
          <p className="text-small text-muted">Asset management</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media\image\images\goldenpiLogo.png"></img>
          <p className="text-small text-muted">Bonds trading plateform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAOKBMldaJcFQikUYxSymja5DVU23ooLZD_A&s"></img>
          <p className="text-small text-muted">Insurance</p>
        </div>
        <Link to="/signup">
        <button className='p-2 btn btn-primary fs-5 mb-5' style={{width:"20%", margin: "0 auto"}}>Signup Now</button>
      </Link>
      </div>
    </div>
  );
}

export default Univers;
