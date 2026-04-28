import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6">
          <img src={imageURL}></img>
        </div>
        <div className="col-6 p-5 mt-5">
          <h1>{productName}</h1>
          <p>{productDescription}</p>
          <div>
            <a
              href={tryDemo}
              style={{ marginLeft: "50px", textDecoration: "none" }}
            >
            Try Demo
            </a>
            <a href={learnMore} style={{ textDecoration: "none" }}>
              Learn More
            </a>
          </div>
          <div className="mt-5">
            <a href={googlePlay}>
              <img src="media\image\images\googlePlayBadge.svg"></img>
            </a>
            <a href={appStore}>
              <img src="media\image\images\appstoreBadge.svg"></img>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
