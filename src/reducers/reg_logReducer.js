export const registration = (state="", action) => {
    switch(action.type)
    {
        case "REGISTER":
            // console.log(action.payload,"jhdjfjhdjf");
            return action.payload;

            default: return state;
    }
}


export const loginData = (state=[], action) => {
    switch(action.type)
    {
        case "LOGIN":
            return action.payload.data;

            default: return [state];
    }
}


