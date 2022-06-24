import React from "react";
import {
  PostDetail,
  PostCategories,
  PostWidget,
  Author,
  Comments,
  CommentsForm,
} from "../../components";
import { post } from "../../assets/data";
const postDetails = ({ post }) => {
  console.log(post);
  return (
    <div className="bg-white dark:bg-main-dark">
      <div className="container px-4 md:px-16 xl:px-36 mx-auto pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="col-span-1 lg:col-span-8">
            <PostDetail />
            <CommentsForm />
            <Comments />
          </div>
          <div className="col-span-1 lg:col-span-4 mt-12">
            <div className="relative lg:sticky top-8">
              <Author />
              <PostCategories />
              <PostWidget />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default postDetails;
