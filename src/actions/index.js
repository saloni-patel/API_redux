import axios from 'axios';

export const createItem = () => {
    return async function(dispatch){
        const response = await axios.get("https://reqres.in/api/users/");
        console.log("createItem",response.data.data);
        return dispatch({
            type:"CREATE",
            payload:response.data.data
        });
    }
}

export const createSingleItem = () => {
    return async function(dispatch){
        const response = await axios.get(`https://reqres.in/api/users/2`);
        console.log("createSingle user",response.data.data);
        return dispatch({
            type: "SINGLEUSER",
            payload: response.data.data  
        })
    }
}

export const deleteItem = (id) => {
    return async function(dispatch){
        const response = await axios.get(`https://reqres.in/api/users/${id}`);
        console.log("deleteItem",response.data.data);
        return dispatch({
            type:"DELETE",
            payload:response.data.data
        })
    }
}

export const viewItem = (user) => {
   return {
       type:"VIEW",
       payload:user
   }
}

export const updateItem = (data) => {
    console.log("updateData",data);
    return async function(dispatch){
        const response = await axios.patch(`https://reqres.in/api/users/${data.id}`,data);
        return dispatch({
            type:"UPDATE",
            payload:response.data
        })
    }
}

export const registerUsers = (data) => {
    console.log('register users are.....',data);
    return async function(dispatch){
        try{
            const response = await axios.post(`https://reqres.in/api/register`,data);
            console.log(response,"sydney@fife");
            return dispatch({
                type: "REGISTER",
                payload: response
            })
        } 
        catch(err){

            // console.log("dsdsd");
            return dispatch({
                type: "REGISTER",
                payload:{}
            })
        }
    }
}

export const loginUser = (data) => {
    console.log('All login users...',data.login);
    return async function(dispatch){
        try{
        const response = await axios.post(`https://reqres.in/api/login`,data.login);
        console.log('login users...',response);
        return dispatch({
            type: "LOGIN",
            payload: response
        })
    }
    catch(err){
        return dispatch({
            type: "LOGIN",
            payload: {}
        })
    }
    }
}
