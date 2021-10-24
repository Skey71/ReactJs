// import { showName } from "./types";

// export const SHOWNAME = () => {
//   return { type: showName };
// };

import { SHOWNAME } from "./types";
import { INCREMENT } from "./types";

export const showName = () => {
    return { type: SHOWNAME };
};

export const increment = () => {
    return { type: INCREMENT };
};