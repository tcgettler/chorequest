import {SET_IS_LOGGED_IN} from "../../store/app/actions.js";
const getInitialState = () => ({
    user: {
        userId:"5bfc2837900d7d49e4a55bce",
        username: "tmoney2090",
        role: "guildmaster",
        encounters: [],
        bosses: [] 
    },
    guild: {
        guildname: "asdfasdfdsf",
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