import { createContext, ReactNode, useContext, useReducer } from "react";
type CtxType = {
  color: string;
  dispatch: React.Dispatch<{
    type: string;
    payload: string;
  }>;
};
type StateType = {
  color: string;
};

const State = createContext({} as CtxType);
export enum DEFAULT_ACTIONS {
  Switch = "Switch",
  Blue = "Blue",
}
function reducer(state: StateType, action: { type: string; payload?: string }) {
  if (action.type === DEFAULT_ACTIONS.Switch)
    return { ...state, color: action?.payload ?? "" };
  if (action.type === DEFAULT_ACTIONS.Blue) return { ...state, color: "blue" };
  return state;
}
export const Provider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, { color: "red" });
  return (
    <State.Provider value={{ color: state.color, dispatch }}>
      {children}
    </State.Provider>
  );
};
export const useValue = () => useContext(State);
