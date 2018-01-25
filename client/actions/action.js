import axios from 'axios';

// intercetor for Axios (Http call)
// Add a request interceptor
axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    debugger
    return config;
  }, function (error) {
    // Do something with request error
    debugger
    
    return Promise.reject(error);
  });

// Add a response interceptor
axios.interceptors.response.use(function (response) {
    // Do something with response data
    debugger
    
    return response;
  }, function (error) {
    debugger
    // Do something with response error
    return Promise.reject(error);
  });


export function Increment(index) {
    return { type: 'INCREMENT_LIKES', index: index }
}
export function decrement() {
    return { type: 'DECREMENT_LIKES' }
}
export function addComment() {
    return { type: 'ADD_COMMENTS' }
}

//AJAX Request
export function fetchPostsData() {
    console.log('within fetchPostsData');
    let aPromise = axios.get("http://localhost:7770/api/posts");
    return (dispatch => {
        aPromise.then((response) => {
            debugger;
            //temperary we assign object to our response but next we use direct response
            dispatch({ type: 'FETCH_POSTS', response })
        })
    })

}

