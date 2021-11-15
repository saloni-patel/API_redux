const displayReducer = (state=[], action) => {
    switch(action.type)
    {
        case "CREATE":
            console.log("create",action.payload);
            return action.payload;

        case "SINGLEUSER":
            console.log("single user..",action.payload);
            return [action.payload];

        case "DELETE":
            return state.filter((state) => {
                return state.id !== action.payload.id;
            })

        case "UPDATE":
            const index = state.findIndex((item) => item.id === action.payload.id);
            const newData = [...state];
            newData[index] = action.payload;
            return newData;

        case "VIEW":
            console.log("view users",action.payload);
            return [action.payload];

            default:
                return state;
    }

};
export default displayReducer;