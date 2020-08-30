const initialState = {
    locations: {
        portugal: [
            {id:'0', name:'Aasiya Jayavant', location:'Portugal', selected: false},
            {id:'1', name:'Luvlee Lawrence', location:'Portugal', selected: false},
            {id:'2', name:'Rey Mibourne', location:'Portugal', selected: false},
            {id:'3', name:'Cayla Brister', location:'Portugal', selected: false},
        ],
        nicaragus: [
            {id:'0', name:'Deveedaas Nandi', location:'Nicaragua', selected: false},
            {id:'1', name:'Obasey Chidy', location:'Nicaragua', selected: false},
            {id:'2', name:'Xenie Dolezelova', location:'Nicaragua', selected: false},
            {id:'3', name:'Ezequiel Dengra', location:'Nicaragua', selected: false},
        ],
        marshallIslands: [
            {id:'0', name:'Aaron Almaraz', location:'Marshall Islands', selected: false},
            {id:'1', name:'Jelena Denisova', location:'Marshall Islands', selected: false},
            {id:'2', name:'Mibourne Cayla', location:'Marshall Islands', selected: false},
        ]
    },
    selectCount: 0
}

const reducer = (state = initialState, action) => {
    const locs = {...state.locations};
    let count = state.selectCount;
    if(action.type === "PERSON_CHANGE") {
        locs[action.currentData.loc][action.currentData.id].selected = !locs[action.currentData.loc][action.currentData.id].selected;
        count = (locs[action.currentData.loc][action.currentData.id].selected) ? count + 1 : count <= 0 ? 0 : count - 1;
        return {
            ...state,
            locations: locs,
            selectCount: count
        }
    }
    return state;
}

export default reducer;