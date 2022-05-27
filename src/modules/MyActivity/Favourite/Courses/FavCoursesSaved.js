import React from "react";
// import "./CommonBlog.css";
import FavCoursesData from "./FavCoursesData";
import FavCoursesCard from "./FavCoursesCard";
// import { history } from "../../../../managers/history";
// import ManageBlogComponents from './ManageBlogComponents';
import DeleteFavCourses from "./DeleteFavCourses";

const FavCoursesSaved = () => {
  return (
    <>
      <div className="main-container">
        {FavCoursesData.map((singleContent) => {
          return (
            <>
              <FavCoursesCard  
                deleteCourse={DeleteFavCourses}
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

export default FavCoursesSaved;
