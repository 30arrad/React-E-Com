import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addInitialPosts: () => {},
});

const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "ADD_INITIAL_POSTS") {
    newPostList = action.payload.posts;
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, []);

  const addPost = (userId, postTitle, postBody, reactions, tags) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        title: postTitle,
        body: postBody,
        reactions: reactions,
        userId: userId,
        tags: tags,
      },
    });
  };

  const addInitialPosts = (posts) => {
    dispatchPostList({
      type: "ADD_INITIAL_POSTS",
      payload: {
        posts,
      },
    });
  };

  return (
    <PostList.Provider value={{ postList, addPost, addInitialPosts }}>
      {children}
    </PostList.Provider>
  );
};

export default PostListProvider;

const items = (
  id,
  item_img,
  item_Name,
  item_Old_Price,
  item_Price,
  item_item_Category
) => {
  dispatchPostList({
    type: "ADD_POST",
    payload: {
      id: id,
      item_img: item_img,
      item_Name: item_Name,
      item_Old_Price: item_Old_Price,
      item_Price: item_Price,
      item_item_Category: item_item_Category,
    },
  });
};
