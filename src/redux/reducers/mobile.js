const initialContacts = {
  noOfMobiles: 10,
  users: [],
  user: {},
};

export const mobileReducer = (state = initialContacts, action) => {
  switch (action.type) {
    case 'BUY_MOBILE_SUCCESS':
      return {...state, noOfMobiles: state.noOfMobiles - 1};
    case 'SELL_MOBILE_SUCCESS':
      return {...state, noOfMobiles: state.noOfMobiles + 1};
    case 'GET_ALL_USERS_SUCCESS':
      return {...state, users: action.data};
    case 'GET_ALL_USERS_FAILED':
      return {...state, message: action.message};
    case 'GET_SINGLE_USER_SUCCESS':
      return {...state, user: action.data};
    case 'GET_SINGLE_USER_FAILED':
      return {...state, message: action.message};
    case 'ADD_USER_SUCCESS': {
      let users = [...state.users];
      users.push(action.data);
      return {...state, users};
    }
    case 'ADD_USER_FAILED':
      return {...state, message: action.message};
    case 'EDIT_USER_SUCCESS': {
      let users = [...state.users];
      let findIndex = users.findIndex((user) => user.id === action.data.id);
      users[findIndex] = action.data;
      return {...state, users};
    }
    case 'EDIT_USER_FAILED':
      return {...state, message: action.message};
    case 'DELETE_USER_SUCCESS': {
      let users = [...state.users];
      let findIndex = users.findIndex((user) => user.id === action.data);
      users.splice(findIndex, 1);
      return {...state, users};
    }
    case 'DELETE_USER_FAILED':
      return {...state, message: action.message};
    default:
      return state;
  }
};
