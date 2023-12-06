const redux = require("redux");

const countReduser = (state = {count: 0}, action) => {
    return{
        count: state.count,
    };
};
const store = redux.createStore(countReduser);

 