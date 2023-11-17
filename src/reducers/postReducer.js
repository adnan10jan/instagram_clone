const postReducer = (state = { posts: [] }, action) => {
  switch (action.type) {
    case "ADD_POST":
      const newPost = {
        caption: action.payload.caption,
        image: action.payload.image, // Include image URL in the post object
        comments: [], // Initialize comments as an empty array
        shares: 0, // Initialize shares count
        saved: false, // Initialize saved status
        // Add other properties as needed for your posts
      };

      return {
        ...state,
        posts: [...state.posts, newPost],
      };
    case "ADD_COMMENT":
      return {
        ...state,
        posts: state.posts.map((post) =>
          post.id === action.payload.postId
            ? { ...post, comments: [...post.comments, action.payload.comment] }
            : post
        ),
      };
    case "INCREMENT_SHARES":
      return {
        ...state,
        posts: state.posts.map((post) =>
          post.id === action.payload
            ? { ...post, shares: post.shares + 1 }
            : post
        ),
      };
    case "TOGGLE_SAVE":
      return {
        ...state,
        posts: state.posts.map((post) =>
          post.id === action.payload ? { ...post, saved: !post.saved } : post
        ),
      };
    default:
      return state;
  }
};

export default postReducer;
