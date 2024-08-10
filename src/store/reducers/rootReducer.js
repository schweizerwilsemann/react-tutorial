
const initState = {
    users: [
        {id: 1, name: 'Khoa'},
        {id: 2, name: 'Kai'},
        {id: 3, name: '凯文'}
    ],
    posts: []
}


const rootReducers = (state = initState, action) =>{
    switch(action.type) {
        case 'DELETE_USER':
            console.log(">>> run into delete user: ", action);
            let users =  state.users;
            users = users.filter(item => item.id !== action.payload.id)
            return {
                ...state, users
            };
            break
        case 'CREATE_USER':
            let id = Math.floor(Math.random() * 1000);
            let user = {id: id, name: `random - ${id}` };
            return {
                ...state, users: [...state.users, user]
            };
        default:
            return state;
      }
}

export default rootReducers;