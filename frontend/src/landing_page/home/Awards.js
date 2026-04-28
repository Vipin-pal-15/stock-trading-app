import React from 'react';

function Awards() {
    return (
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-6 p-5'>
                    <img src='media\image\images\largestBroker.svg'></img>
                </div>
                <div className='col-6 p-5 mt-5'>
                    <h1>Trust with confidence</h1>
                    <p className='mb-5'>That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.</p>
                    <div className='row'>
                        <div className='col-6'>
                            <ul>
                                <li>Futures and Options</li>
                                <li>Commodity derivatives</li>
                                <li>Currency derivatives</li>
                            </ul>
                        </div>
                        <div className='col-6'>
                            <ul>
                                <li>stocks & IPOs</li>
                                <li>Direct mutual funds</li>
                                <li>Bonds and Government security</li>
                            </ul>
                        </div>
                        <img src='media\image\images\pressLogos.png' style={{width:"90%"}}></img>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Awards;