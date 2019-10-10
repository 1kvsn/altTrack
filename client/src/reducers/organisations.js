const initialState = {
  list: [],
  details: null
}

function organisations (state = initialState, action) {
  switch(action.type) {
    case 'GET_ORGANISATIONS_LIST_SUCCESS':
      return {
        list: action.data.organisations,
      }
      //not in use yet
    case 'GET_ORGANISATION_DETAILS_SUCCESS':
      return {
        details: action.data.organisation
      }
    case "GET_ORGANISATION_FEED": {
      console.log(state, 'this is state', action, 'this is action');
      return {
        ...state,
        orgFeed: action.payload.orgPosts,
        orgId: action.payload.orgId,
      }
    }
    default:
      return state;
  }
}

export default organisations;
