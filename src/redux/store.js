import { createStore, combineReducers, applyMiddleware } from "redux";
import titleReducer from "./reducers/titleReducer";
import randomReducer from "./reducers/randomReducer";

const reducers = combineReducers({
  title: titleReducer,
  random: randomReducer
});

const randomMiddleware = store => next => action => {
  let user = action.value;
  let result = next(action);
  let pc = store.getState();

  if (user === pc.random) {
    next({ type: "TIE" });
  } else {
    switch (user) {
      case "Rock":
        if (pc.random === "Paper") {
          next({ type: "LOSE" });
        } else if (pc.random === "Scissors") {
          next({ type: "WIN" });
        }

        break;
      case "Paper":
        if (pc.random === "Scissors") {
          next({ type: "LOSE" });
        } else if (pc.random === "Rock") {
          next({ type: "WIN" });
        }

        break;
      case "Scissors":
        if (pc.random === "Rock") {
          next({ type: "LOSE" });
        } else if (pc.random === "Paper") {
          next({ type: "WIN" });
        }

        break;
      default:
        alert("ERROR");
    }
  }

  return result;
};

export default createStore(
  reducers,
  { title: "", random: "" },
  applyMiddleware(randomMiddleware)
);
