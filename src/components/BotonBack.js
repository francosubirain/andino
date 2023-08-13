import React from 'react';

const BotonBack = () => {
    const goBack = () => {
        window.history.back();
    };

    return (
        <div className='btnVolver'>
            <button type="button"  className="btn btn-outline-primary" onClick={goBack}>Volver</button>
        </div>
    );
};

export default BotonBack;