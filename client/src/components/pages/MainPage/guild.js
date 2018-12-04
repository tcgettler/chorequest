import React from "react";


const Guild = (props) => {
    console.log(props);
    return(
        <div>
            <div className="columns is-mobile is-multiline">
                <div className="column is-3 is-vcentered">
                    <div className="type has-text-centered">
                        <i className="fas fa-broom fa-3x imageType" > </i>
                    </div>
                </div>
                <div className="column is-8">
                    <h5>Guild Master: {props.guildmaster}</h5>
                </div>   
                <div className="column is-8">
                    Guild Members:
                </div>
                <button className="button submitButton">Add Members</button>
            </div>
        </div>
    )
}

export default Guild;