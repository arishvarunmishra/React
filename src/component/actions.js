/**
 * Created by varun on 21/9/17.
 */



const action={
    fetchUser: fetchUser= ()=>{
        return  (dispatch) => {
            dispatch({type:'STARTED'});
            setTimeout(function () {
                dispatch({type:'COMPLETED',value:100});
            },5000);
        };
    }

}
