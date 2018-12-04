import React from "react";


const Guild = (props) => {
    return(
        <div>
            <div className="columns is-mobile is-multiline guild">
                <div className="column is-12 has-text-centered">
                    <h3>Guild Name</h3>
                </div>
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
                <div className="column is-4">
                <input onChange={props.onChange} value={props.memberState} className="input" type="text" name="addMember" placeholder="Add Member" />
                <button onClick={props.addMembers} className="button submitButton">Add Members</button>
                </div>
            </div>
        </div>
    )
}

export default Guild;