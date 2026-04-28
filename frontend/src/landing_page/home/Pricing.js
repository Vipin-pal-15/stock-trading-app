import React from 'react';

function Pricing() {
    return ( 
        <div className='container'>
            <div className='row'>
                <div className='col-4'>
                    <h1 className='mb-3 fs-2'>Unbeatable pricing</h1>
                    <p>We pioneeted the concept of discont broaking and price transparency in India. Flat and no hidden charges.</p>
                    <div><a href='' style={{textDecoration:"none"}}>See pricing</a></div>
                </div>
                <div className='col-2'></div>
                <div className='col-6'>
                    <div className='row text-center'>
                        <div className='col P-3 border'>
                            <h1 className='MB-3'>0</h1>
                            <p>Free equity delivery and direct mutual funds</p>
                        </div>
                        <div className='col P-3 border'>
                            <h1 className='mb-5'>20</h1>
                            <p>Intready F&Q</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Pricing;