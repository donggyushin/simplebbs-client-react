//import
import axios from "axios";

//actions
const GET_BOARDS = "board/GET_BOARDS";
const TOGGLE_BOARD_DETAIL = "board/TOGGLE_BOARD_DETAIL";
const GET_BOARD_DETAIL = "board/GET_BOARD_DETAIL";
const CLOSE_BOARD_DETAIL = "board/CLOSE_BOARD_DETAIL";
const REMOVE_BOARD_DETAIL = "board/REMOVE_BOARD_DETAIL";
const REGISTER_COMMENT = "board/REGISTER_COMMENT";

//action creators

export const RegisterComment = comments => ({
  type: REGISTER_COMMENT,
  comments
});

export const removeBoardDetail = () => ({
  type: REMOVE_BOARD_DETAIL
});

export const closeBoardDetail = () => ({
  type: CLOSE_BOARD_DETAIL
});

export const getBoardDetail = boardDetails => ({
  type: GET_BOARD_DETAIL,
  boardDetails
});

export const toggleBoardDetail = () => ({
  type: TOGGLE_BOARD_DETAIL
});

export const getBoards = boards => ({
  type: GET_BOARDS,
  boards
});

//api actions

export const apiRegisterCommet = (boardId, message) => {
  return dispatch => {
    axios
      .post(`/api/comment/${boardId}`, {
        message
      })
      .then(response => response.data)
      .then(data => {
        console.log(data);
        dispatch(RegisterComment(data.comments));
      })
      .catch(err => console.log(err));
  };
};

export const apiGetBoardDetails = boardId => {
  return async dispatch => {
    axios
      .get(`/api/board/${boardId}`)
      .then(response => response.data)
      .then(data => {
        if (data.boardDetails) {
          dispatch(toggleBoardDetail());
          dispatch(getBoardDetail(data.boardDetails));
        }
      })
      .catch(err => console.log(err));
  };
};

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
  boards: null,
  boardDetail: false,
  boardDetails: null
};

//reducers

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_BOARDS:
      return applyGetBoards(state, action);
    case TOGGLE_BOARD_DETAIL:
      return applyToggleBoardDetail(state, action);
    case GET_BOARD_DETAIL:
      return applyGetBoardDetails(state, action);
    case CLOSE_BOARD_DETAIL:
      return applyCloseBoardDetail(state, action);
    case REMOVE_BOARD_DETAIL:
      return applyRemoveBoardDetail(state, action);
    case REGISTER_COMMENT:
      return applyRegisterComment(state, action);
    default:
      return state;
  }
}

//reducer actions

const applyRegisterComment = (state, action) => {
  const { comments } = action;
  return {
    ...state,
    boardDetails: {
      ...state.boardDetails,
      comments
    }
  };
};

const applyRemoveBoardDetail = (state, action) => {
  return {
    ...state,
    boardDetails: null
  };
};

const applyCloseBoardDetail = (state, action) => {
  return {
    ...state,
    boardDetail: false
  };
};

const applyGetBoardDetails = (state, action) => {
  const { boardDetails } = action;
  return {
    ...state,
    boardDetails: boardDetails
  };
};

const applyToggleBoardDetail = (state, action) => {
  return {
    ...state,
    boardDetail: true
  };
};

const applyGetBoards = (state, action) => {
  const { boards } = action;

  return {
    ...state,
    boards: boards
  };
};
