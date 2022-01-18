import { combineReducers } from "redux";
import vaultsReducer from './vaults';
import balanceReducer from './balance';
import prizesReducer from "./prizes";

export default combineReducers({
  vaults: vaultsReducer, 
  balance: balanceReducer,
  prizes: prizesReducer
})
