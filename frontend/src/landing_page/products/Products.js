import React from "react";
import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RighSection from "./RightSection";
import Univers from "./Univers";

function PricingPage() {
  return (
    <>
      <Hero />
      <LeftSection
        imageURL="media\image\images\kite.png"
        productName="kite"
        productDescription="Our ultra-fast flagship trading plateform with streaming market data,advanced charts, an elegant UI, and more. Enjoy the kite experience seamlessy on Ansdroid and iOS devices."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />
      <RighSection
        imageURL="media\image\images\console.png"
        productName="Console"
        productDescription="The central dashboard for your Zerodha account. Gain insight into your trades and investments with in-depth report and visualiisations"
        learnMore=""
      />
      <LeftSection
        imageURL="media\image\images\coin.png"
        productName="Coin"
        productDescription="Buy direct mutual funds online, commission-free, deliverd directly to your Demat account. Enjoy the investment experience on your Android and iOS devics."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />
      <RighSection
        imageURL="media\image\images\kiteconnect.png"
        productName="kite connect API"
        productDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON API.If you are a startup, build your investment app and shocase it to our clientbase."
        tryDemo=""
        learnMore=""
      />
      <LeftSection
        imageURL="media\image\images\varsity.png"
        productName="Varsity mobile"
        productDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustations. Contact is down into bite-size cards to help you learn on the go."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />
      <p className="text-center mt-5 mb-5">
        We want to know more about our technology stock? Check out the
        Zerodha.tech blog.
      </p>
      <Univers />
    </>
  );
}

export default PricingPage;
