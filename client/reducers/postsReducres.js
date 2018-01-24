let posts = (defStore = [], action) => {
    switch (action.type) {
        case 'INCREMENT_LIKES':
            console.log("Within Posts Reducers !");
            console.log("action",action);
            return defStore;

        default:
            return defStore;
    }
}

export default posts;