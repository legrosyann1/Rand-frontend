const vaultsReducer = (state=[], action) => {
  switch (action.type) {
  case 'ADD_VAULT':
    return [...state, {
      id: action.id,
      name: action.name,
      amount: action.amount,
      type: action.mode,
      position: state.length
    }];
  case 'REMOVE_VAULT':
    return [...state.slice(0, action.pos), ...state.slice(action.pos + 1)];
  default:
    return state;
  }
}

export default vaultsReducer;