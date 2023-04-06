
const initalState = {
    Work :  {
        query : {
            content : ''
        },
        jobs : {
        content : []
        }
    }
};

// eslint-disable-next-line no-unused-vars
const functionStorage = (state = initalState, action) => {
switch(action.type){
    case 'setStorage' : 
    return {
        ...state, 
        query : {
            ...state.query,

            content : action.payload
        }
    }
    case 'setJobs' : 
    return{
        ...state,
        jobs : { ...state.jobs,

            content : [...state.jobs.content, action.payload]}
    }
    default : 
    return state
}
};

export default functionStorage;