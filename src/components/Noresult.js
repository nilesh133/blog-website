import React from 'react';

const Noresult = (noresultMessage) => {

    return (
        <>
            <div className='no__result'>
                <div className='no__result__image'>
                </div>
                <div className='no__result__message'>{noresultMessage.noresultMessage}</div>
                
            </div>

        </>
    )
};

export default Noresult;
