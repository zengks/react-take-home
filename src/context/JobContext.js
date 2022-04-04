import { createContext, useReducer } from 'react'
import jobReducer from './JobReducer'

const JobContext = createContext()

export const JobProvider = ({ children }) => {
    const initialState = {
        allLocations: [],
        allTeams: [],
        allWorkTypes: [],
        loading: false,
    }

    const [state, dispatch] = useReducer(jobReducer, initialState)

    return <JobContext.Provider value={{...state, dispatch}}>
        {children}
    </JobContext.Provider>
}

export default JobContext