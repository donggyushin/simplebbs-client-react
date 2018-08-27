//import
import axios from "axios";

//actions
const GET_BOARDS = "user/GET_BOARDS";

//action creators

export const getBoards = boards => ({
  type: GET_BOARDS,
  boards
});

//api actions
export const apiGetBoards = () => {
  return dispatch => {
    axios
      .get("/api/boardlist/")
      .then(response => response.data)
      .then(data => {
        if (data.boardlist) {
          dispatch(getBoards(data.boardlist));
        } else {
          console.log("fail");
        }
      })
      .catch(err => console.log(err));
  };
};

//initialState

const initialState = {
  boards: null
};

//reducers

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_BOARDS:
      return applyGetBoards(state, action);
    default:
      return state;
  }
}

//reducer actions

const applyGetBoards = (state, action) => {
  const { boards } = action;

  return {
    ...state,
    boards: boards
  };
};
