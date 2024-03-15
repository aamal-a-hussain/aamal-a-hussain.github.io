import React from 'react';

function Button({filter}) {
    return (
        <div className='filter-buttons'>
                <button className="button" onClick={() => filter("All")}>
                    All
                </button>
 
                <button className="button" onClick={() => filter("publication")}>
                    Conferences
                </button>

                <button className="button" onClick={() => filter("other")}>
                    Other
                </button>

        </div>
    )
}

export default Button;