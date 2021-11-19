export const registration = (state="", action) => {
    switch(action.type)
    {
        case "REGISTER":
            // console.log(action.payload,"jhdjfjhdjf");
            return action.payload;

            default: return state;
    }
}


export const loginData = (state="", action) => {
    switch(action.type)
    {
        case "LOGIN":
            console.log('action',action.payload)
            // return action.payload.data;
            localStorage.setItem('token',JSON.stringify(action.payload))
            return action.payload;
            default: return state;
            
    }
}


