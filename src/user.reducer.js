/**
 * Created by varun on 21/9/17.
 */


const userState={
    loading:false,
    user:[1,2,3]
};
const userReducer =(state =userState,action)=>{
    const newState ={...state};
    switch (action.type){
        case "INC":
            return newState;
        case "DEC":
            return newState;
        case "COMPLETE":
            return newState;
        default:
            return newState;

    }
};

export default userReducer;

