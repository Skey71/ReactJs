// import { clearMessageValue } from "../conversations";
// import { sendMessage, deleteMessage } from "./actions";
import { clearMessageValue } from "../conversations";
import { deleteConersation } from "./actions";

// export const deleteMessageWithThunk =
// (message, roomId) => (dispatch, getState) => {
//   const c = dispatch(deleteMessage(message, roomId));
// };
export const deleteConversationWithThunk =
    (roomId) => (dispatch, getState) => {
        const c = dispatch(deleteConersation(roomId));
    };

// thunks не было