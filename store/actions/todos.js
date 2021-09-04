const ADD_FAVORITE_TODO = "ADD_FAVORITE_TODO";
const REMOVE_FAVORITE_TODO = "REMOVE_FAVORITE_TODO";

export const addFavoriteTodo = (todoId) => {
  return {
    type: ADD_FAVORITE_TODO,
    todoId: todoId,
  };
};

// export const removeFavoriteTodo = (todo) => {
//   return {
//     type: REMOVE_FAVORITE_TODO,
//     todo: todo,
//   };
// };
