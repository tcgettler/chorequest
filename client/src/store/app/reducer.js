import {SET_IS_LOGGED_IN} from "../../store/app/actions.js";
const getInitialState = () => ({
    user: {
        username: "",
        role: "",
        encounters: [],
        bosses: [] 
    },
    guild: {
        guildname: "",
        members: [],
        quests: [],
        store: [],
    }
});

const app = (state = getInitialState(), { type, payload }) => {
    switch (type) {
        case SET_IS_LOGGED_IN:
        console.log("STATE", state, payload)
            return {
                ...state,
                ...payload,
            };
        default:
            return state;
    }
};

export default app;