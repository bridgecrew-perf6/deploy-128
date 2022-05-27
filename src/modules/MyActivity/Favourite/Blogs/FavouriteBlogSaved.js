import React from "react";
// import "./CommonBlog.css";
import BlogData from "./BlogData";
import FavouriteBlogCard from "./FavouriteBlogCard";
// import { history } from "../../../../managers/history";
// import ManageBlogComponents from './ManageBlogComponents';
import DeleteFavouriteBlog from "./DeleteFavouriteBlog";

const Posted = () => {
  return (
    <>
      <div className="main-container">
        {BlogData.map((singleContent) => {
          return (
            <>
              <FavouriteBlogCard
                deleteBlog={DeleteFavouriteBlog}
                id={singleContent.id}
                image={singleContent.image}
                dateCreated={singleContent.dateCreated}
                description={singleContent.description}
                authorName={singleContent.authorName}
                likes={singleContent.likes}
                views={singleContent.views}
                saved={singleContent.saved}
                comment={singleContent.comment}
              />
            </>
          );
        })}
      </div>
    </>
  );
};

export default Posted;
