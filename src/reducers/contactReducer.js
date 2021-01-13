const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_CONTACT":
      return {
        contacts: [...state.contacts, action.payload],
      };
    case "DELETE_CONTACT":
      return {
        contacts: state.contacts.filter(
          (contact) => contact.id !== action.payload
        ),
      };
    case "START":
      return {
        isLoading: true,
      };
    case "COMPLETE":
      return {
        isLoading: false,
      };
    default:
      throw new Error();
  }
};

export default reducer;
