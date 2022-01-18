const balanceReducer = (state=0, action) => {
  switch(action.type) {
    case 'DEPOSIT_FUNDS':
      return state + action.amount;
    case 'WITHDRAW_FUNDS':
      return state - action.amount;
    default:
      return state
  }
};

export default balanceReducer;