export default function reducer(state = [], action) {
  const SAVED_ITEMS = "saveItems";

  let savedItems = JSON.parse(localStorage.getItem(SAVED_ITEMS));
  if (savedItems) {
    state = savedItems;
  }

  switch (action.type) {
    case "SAVE":
      const book = action.payload
      const haveBookName = state.find((value) => value.name == book.name);

      if (book) {
        if (state.length == 0) {
          state = [...state, book];
          localStorage.setItem(SAVED_ITEMS, JSON.stringify(state));
          return state;
        }
        if (!haveBookName) {
          state = [...state, book];
          localStorage.setItem(SAVED_ITEMS, JSON.stringify(state));
          return state;
        }
      }
    case "DELETE":
      state = state.filter((item) => item.id !== action.payload);
      localStorage.setItem(SAVED_ITEMS, JSON.stringify(state));
      return state;
    case "FAVORITE":
      const bookToSave = action.payload
      const haveBookId = state.find((value) => value.id == bookToSave.id);

      if (bookToSave) {
        if (state.length == 0) {
          state = [...state, bookToSave];
          localStorage.setItem(SAVED_ITEMS, JSON.stringify(state));
          return state;
        }
        if (!haveBookId) {
          state = [...state, bookToSave];
          localStorage.setItem(SAVED_ITEMS, JSON.stringify(state));
          return state;
        }
      }
    default:
      return state;
  }
}
