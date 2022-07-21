import { createStore } from "redux";
import Rootreducer from "./redux/reducers/Rootreducer";

const store = createStore(
    Rootreducer
);

export default store