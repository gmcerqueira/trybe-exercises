const NEW_ACTION = "NEW_ACTION";
const OLD_ACTION = "OLD_ACTION";

export const newAction = (state) => ({ type: NEW_ACTION, state });

export const oldAction = (state) => ({ type: OLD_ACTION, state });
