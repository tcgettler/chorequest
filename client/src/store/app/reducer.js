import {SET_IS_LOGGED_IN} from "../../store/app/actions.js";
const getInitialState = () => ({
    user: {
        userId:"5bfc2837900d7d49e4a55bce",
        username: "tmoney2090",
        role: "guildmaster",
        encounters: [{encounterName: 'do dishes', area: 'kitchen', reward: 250},{encounterName: 'fold laundry', area: 'laundry room', reward: 300}],
        bosses: [{bossName: 'rake leaves', area: 'front yard', reward: 500},{bossName: 'clean chimney', area: 'living room', reward: 750}],
        wallet: 0
    },
    guild: {
        guildId: "5c075cd2b058bb59a4a44222",
        guildname: "asdfasdfdsf",
        guildmaster: 'tmoney2090',
        members: ["tmoney2090", "finaltoaster", "kingmoofasa"],
        quests: [{questName: 'dust', area: 'living room', reward: 100}, {questName: 'vacuum', area: 'living room', reward: 200},{questName: 'mop', area: 'kitchen', reward: 150}],
        store: [{itemName: 'Lego Set', cost: 2000},{itemName: 'Choose Dinner', cost: 500}, {itemName: 'Host Sleepover', cost: 1000}],
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