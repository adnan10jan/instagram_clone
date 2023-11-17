export const addPost = (post) => {
    return {
      type: 'ADD_POST',
      payload: { ...post, comments: [], shares: 0, saved: false },
    };
  };
  
  export const addComment = (postId, comment) => {
    return {
      type: 'ADD_COMMENT',
      payload: { postId, comment },
    };
  };
  
  export const incrementShares = (postId) => {
    return {
      type: 'INCREMENT_SHARES',
      payload: postId,
    };
  };
  
  export const toggleSave = (postId) => {
    return {
      type: 'TOGGLE_SAVE',
      payload: postId,
    };
  };
  