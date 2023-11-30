// Reducer.jsx
const initialState = {
    likeCount: 0,
  };
  
  const likeReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'INCREMENT':
        return {
          likeCount: state.likeCount + 1,
        };
      case 'DECREMENT':
        return {
          likeCount: state.likeCount - 1,
        };
      default:
        return state;
    }
  };
  
  export default likeReducer;
  