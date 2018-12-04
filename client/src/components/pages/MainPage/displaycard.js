import React from "react";
import money from './money.png';

const DisplayCard = (props) => {
    return(
        <div>
            <div className="columns is-mobile is-multiline is-vcentered displayCard">
                <div className="column is-3 is-vcentered">
                    <div className="type has-text-centered">
                        <i className="fas fa-broom fa-3x imageType" > </i>
                    </div>
                </div>
                <div className="column is-5 has-text-centered">
                    <h5>Dusting</h5>
                </div>
                <div className="column is-4">
                    <h5>Living Room</h5>
                </div>
                <div className="column is-2">
                    <img src={money} alt="money"/>
                </div>
                <div className="column is-6">
                    100G
                </div>
                <button className="button submitButton">Complete</button>
            </div>
            
        </div>
    )
}

export default DisplayCard;