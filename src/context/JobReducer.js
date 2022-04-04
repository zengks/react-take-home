const jobReducer = (state, action) => {
    switch(action.type) {
        case 'GET_ALL_LOCATIONS':
            return {
                ...state,
                allLocations: action.payload,
                loading: false,
            }
        case 'GET_ALL_TEAMS':
            return {
                ...state,
                allTeams: action.payload,
                loading: false,
            }
        case 'GET_ALL_WORK_TYPES':
            return {
                ...state,
                allWorkTypes: action.payload,
                loading: false,
            }
        case 'SET_LOADING':
            return {
                ...state,
                loading: true,
            }
        default:
            return state
    }
}

export default jobReducer