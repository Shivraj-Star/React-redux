let posts = (defStore = [], action) => {

    switch (action.type) {
        case 'FETCH_POSTS':
            console.log("Within fetech post reduceres");
            defStore = action.response.data;
            return defStore;
            break;

        case 'INCREMENT_LIKES':
            console.log("Within Posts Reducers !");
            let postIndex = action.index;
            return [

                ...defStore.slice(0, postIndex),
                { ...defStore[postIndex], likes: defStore[postIndex].likes + 1 },
                ...defStore.slice(postIndex + 1)
            ];

        default:
            return defStore;
    }
}

export default posts;