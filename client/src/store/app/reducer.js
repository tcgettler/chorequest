import { actionTypes } from './actions';

const getInitialState = () => ({
    isLoggedIn: true,
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
        case actionTypes.SET_Username:
            return {
                ...state,
                ...payload,
            };
        default:
            return state;
    }
};

export default app;