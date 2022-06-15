export const POST_ADDED = "postAdded";
export const POST_DELETE = "postDelete";
export const POST_UPDATE = "postUpdate";

let lastId = 0;

export const postAdded = (title, body) => ({
  type: POST_ADDED,
  payload: {
    title,
    body,
  },
});

export const postDelete = (id) => ({
  type: POST_DELETE,
  payload: {
    id,
  },
});

export const postUpdate = (id, postObj) => ({
  type: POST_UPDATE,
  payload: {
    id,
    title: postObj.title,
    body: postObj.body,
  },
});

export default function reducers(state = [], action) {
  switch (action.type) {
    case POST_ADDED:
      let { title, body } = action.payload;
      return [
        ...state,
        {
          id: ++lastId,
          title,
          body,
        },
      ];
    case POST_DELETE:
      return state.filter((e) => e.id !== action.payload.id);

    case POST_UPDATE:
      return state.map((e) =>
        e.id === action.payload.id
          ? { ...e, title: action.payload.title, body: action.payload.body }
          : e
      );

    default:
      return state;
  }
}
