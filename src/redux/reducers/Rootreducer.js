import { combineReducers } from "redux";
import { Cartreducer, Viewreducer } from "./Cartreducer";

const Rootreducer = combineReducers({
    Cartreducer,
    Viewreducer
})

export default Rootreducer