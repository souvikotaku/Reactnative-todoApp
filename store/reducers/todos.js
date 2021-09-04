import { ADD_FAVORITE_TODO } from "../actions/todos";

const initialState = {
  favoriteTodos: [],
};

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVORITE_TODO:
      return {
        ...state,
        favoriteTodos: [...state.favoriteTodos, action.payload],
      };
    // case REMOVE_FAVORITE_TODO:
    //   return {
    //     ...state,
    //     favoriteTodos: state.favoriteTodos.filter(
    //       (todo) => todo.id !== action.payload
    //     ),
    //   };
    default:
      return state;
  }
};

export default todosReducer;
