import React from 'react';

const FotoTextCompnent = ({ Image, Text, IsReversed }) => {
  return (
    <div className={`row d-flex ${IsReversed ? 'flex-row-reverse' : ''} mb-5 ` } >
      <div className='col-12 col-md-6 d-flex justify-content-center align-items-center'>
        <img style={{ width: '440px' }} src={Image} className='img-fluid mb-sm-5' alt='Tech Image'/>
      </div>
      <div className='col-12 col-md-6 d-flex justify-content-center align-items-center pt-5 ' >
        <h5 style={{ maxWidth: '440px'}} className='text-center text-lg-right'>{Text}</h5>
      </div>

    </div>
  );
};

export default FotoTextCompnent;
