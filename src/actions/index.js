export const depositFunds = (amount) => ({
  type: 'DEPOSIT_FUNDS',
  amount
})

export const withdrawFunds = (amount) => ({
  type: 'WITHDRAW_FUNDS',
  amount
})

export const addVault = (id, name, amount, mode) => ({
  type: 'ADD_VAULT',
  id, name, amount, mode
})

export const removeVault = (pos) => ({
  type: 'REMOVE_VAULT',
  pos
})