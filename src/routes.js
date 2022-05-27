import React from "react";
import { Router, Route } from "react-router-dom";
import { Redirect, Switch } from "react-router";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import { connect } from "react-redux";
import { Login, SignUp } from "./modules";
import { history } from "./managers/history";
import BaseComponent from "./modules/baseComponent";
import TestNew from "./modules/test";

import Header from "./modules/vms/shared/header";
import branchIndex from "./modules/vms/shared/branch/index";
import ContactIndex from "./modules/vms/shared/Contact/index";

import SignIn from "./modules/signIn/index";
// import Header from "./modules/vms/shared/header"
// import branchIndex from "./modules/vms/shared/branch/index"
// import ContactIndex from "./modules/vms/shared/Contact/index"

import KycIndex from "./modules/vms/shared/KycDetails/index";
import Location from "./modules/vms/shared/Location/index";
import Branch from "./modules/vms/shared/branch";
import BankDetailPms from "./modules/pms/Bankdetails";
import BankDetails from "./modules/vms/shared/BankDetails";
import ProfessionalBankDetails from "./modules/pms/Bankdetails";
import OnGoingCourse from "./modules/vms/shared/course/index";
import QuizPage from "./modules/vms/shared/Quiz/index";
import Category from "./modules/vms/shared/Category/Index";
import distributionIndex from "./modules/vms/shared/distribution/index";
import userData from "./modules/vms/shared/distribution/indexgrid";
import BranchTable from "./modules/vms/shared/branch/branchTableIndex";
import Projects from "./modules/pms/projects/index";
import PersonalDetail from "./modules/pms/PersonalDetails/index";
import ProfessionalBusinessDetails from "./modules/pms/ProfessionalBusinessDetails/index";
import ProductDesign from "./modules/pms/ProductDesign/index";
import PostedJob from "./modules/pms/Postedjobs/index";
import StudentProfileIndex from "./modules/sms/profiledetail/index";
import Webinar from "./modules/sms/Webinar/index";
import Job from "./modules/pms/AppliedJobs";
import StudentJob from "./modules/sms/AppliedJobs";
import ManageBlog from "./modules/pms/Manageblogs";
import FavoritePms from "./modules/pms/Favorites";
import Resume from "./modules/pms/Resume";
import createNewBlog from "./modules/pms/Manageblogs/createNewBlog";
// import createNewBlog from "./modules/pms/Manageblogs/createNewBlog";
import CommercialCapability from "./modules/pms/CommercialCapability";

import BasicCompanyDetails from "./modules/signup/BasicCompanyDetails";
import SignInPhone from "./modules/signIn/SignInPhone";
import ProfessionalTeachIndex from "./modules/pms/ProfessionalTeach";

import StudentManageBlogComponents from "./modules/sms/StudentManageblogs";
import StudentResume from "./modules/sms/StudentResume";
import Studentprojects from "./modules/sms/Studentprojects";
import StudentFavoritesIndex from "./modules/sms/StudentFavorites";
import FavoriteList from "./modules/pms/Favorites/ListFav/FavoriteList";
import JobStudent from "./modules/pms/jobs/studentJobs";
import JobPage from "./modules/pms/jobs/job";
import JobOutputs from "./modules/pms/jobs/jobsOutput";
import JobLandingPage from "./modules/pms/jobs/jobsLandingPage";
import OtherJob from "./modules/pms/jobs/otherJobs";
import Blogs from "./modules/pms/Blogs";
import BlogDetails from "./modules/pms/Blogs/BlogDetails";
import PracticeTest from "./modules/pms/PracticeTest";
import PracticeForm from "./modules/pms/PracticeTest/practiceForm";
import PublishedTest from "./modules/pms/PracticeTest/publishedTest";
import HomeMain from "./modules/homePage/index";


// import FavoriteList from "./modules/pms/Favorites/ListFav/FavoriteList"
import MyActivity from "./modules/MyActivity";
import FavouriteBlog from "./modules/MyActivity/Favourite/Blogs/index"

import ProjectIndex from "./modules/MyActivity/Favourite/Projects/index";
import PortfolioIndex from "./modules/MyActivity/Favourite/Portfolios/index";
import FavouriteImages from "./modules/MyActivity/Favourite/Images/index";
import FavCourseIndex from "./modules/MyActivity/Favourite/Courses/index";
import PostedBlogIndex from "./modules/MyActivity/MyBlogs/PostedBlogs/index";
import DraftedBlogIndex from "./modules/MyActivity/MyBlogs/DraftedBlogs/index"
import OthersIndex from "./modules/MyActivity/MyBlogs/Others/index";
import { Quiz } from "@mui/icons-material";
import EduWebinarPage from "./modules/Educationist/Webinar";
import EduSelectWebinar from "./modules/Educationist/Webinar/SelectWorker";

class Routes extends BaseComponent {
  componentDidMount() {}

  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <Router history={history}>
          <Switch>
            {/* <Route exact path={"/"} component={Login} /> */}
            <Route exact path={"/sign-up"} component={SignUp} />
            <Route exact path={"/sign-in"} component={SignIn} />
            <Route exact path={"/signin"} component={SignInPhone} />

            <Route exact path={"/header"} component={Header} />
            <Route exact path={"/branch"} component={branchIndex} />
            <Route exact path={"/contact"} component={ContactIndex} />
            <Route exact path={"/resume"} component={Resume} />
            <Route exact path={"/studentresume"} component={StudentResume} />
            <Route exact path="/kyc" component={KycIndex} />
            <Route exact path={"/location"} component={Location} />
            <Route exact path={"/bankdetails"} component={BankDetails} />
            <Route exact path={"/branch"} component={Branch} />
            <Route exact path={"/branchtable"} component={BranchTable} />
            <Route exact path={"/category"} component={Category} />
            <Route exact path={"/distribution"} component={distributionIndex} />
            <Route exact path={"/ongoing-course"} component={OnGoingCourse} />
            <Route exact path={"/create-quiz"} component={QuizPage} />
            <Route exact path={"/distributionData"} component={userData} />
            <Route exact path={"/webinar"} component={Webinar} />

            <Route exact path={"/bankdetails-pms"} component={BankDetailPms} />

            <Route exact path={"/professional-projects"} component={Projects} />
            <Route
              exact
              path={"/student-project"}
              component={Studentprojects}
            />
            <Route
              exact
              path={"/professional-personaldetail"}
              component={PersonalDetail}
            />
            <Route exact path={"/Professional-resume"} component={Resume} />
            <Route
              exact
              path={"/professional-businessdetail"}
              component={ProfessionalBusinessDetails}
            />
            <Route exact path={"/product-design"} component={ProductDesign} />
            <Route
              exact
              path={"/professional-favorite"}
              component={FavoritePms}
            />
            <Route
              exact
              path={"/professional-postedjob"}
              component={PostedJob}
            />
            <Route
              exact
              path={"/professional-manageblog"}
              component={ManageBlog}
            />
            <Route
              exact
              path={"/professional-bankdetails"}
              component={ProfessionalBankDetails}
            />
            <Route
              exact
              path={"/professional-favorite"}
              component={FavoritePms}
            />
            <Route
              exact
              path={"/professional-postedjob"}
              component={PostedJob}
            />
            <Route
              exact
              path={"/professional-manageblog"}
              component={ManageBlog}
            />
            <Route
              exact
              path={"/professional-bankdetails"}
              component={ProfessionalBankDetails}
            />
            <Route
              exact
              path={"/professional-commercial"}
              component={CommercialCapability}
            />
            <Route exact path={"/student-profile"} component={StudentProfileIndex} />
            <Route
              exact
              path={"/basic-details"}
              component={BasicCompanyDetails}
            />
            <Route
              exact
              path={"/professional-teach"}
              component={ProfessionalTeachIndex}
            />
            <Route
              exact
              path={"/professional-create-blog"}
              component={createNewBlog}
            />
            <Route
              exact
              path={"/studentfavorite"}
              component={StudentFavoritesIndex}
            />

            <Route exact path={"/student-profile"} component={StudentProfileIndex} />
            <Route
              exact
              path={"/basic-details"}
              component={BasicCompanyDetails}
            />
            <Route
              exact
              path={"/professional-teach"}
              component={ProfessionalTeachIndex}
            />
            <Route
              exact
              path={"/professional-create-blog"}
              component={createNewBlog}
            />
            <Route
              exact
              path={"/studentfavorite"}
              component={StudentFavoritesIndex}
            />

            <Route exact path={"/my-jobs"} component={Job} />
            <Route exact path={"/studentjob"} component={StudentJob} />
            <Route
              exact
              path={"/student-manageblog"}
              component={StudentManageBlogComponents}
            />
            <Route
              exact
              path={"/student-manageblog"}
              component={StudentManageBlogComponents}
            />
            <Route exact path={"/blogs"} component={Blogs} />
            <Route exact path={"/blogs-detail"} component={BlogDetails} />
            <Route exact path={"/practice_test"} component={PracticeTest} />
            <Route exact path={"/practice-form"} component={PracticeForm} />
            <Route exact path={"/published_test"} component={PublishedTest} />




            <Route exact path={"professional-activity"} component={MyActivity} />


            <Route exact path={"/favoritelist"} component={FavoriteList} />

            <Route exact path={"/favourite-project"} component={ProjectIndex} />
            <Route exact path={"/favourite-portfolio"} component={PortfolioIndex} />
            <Route exact path={"/favourite-blog"} component={FavouriteBlog} />
            <Route exact path={"/favourite-images"} component={FavouriteImages} />
            <Route exact path={"/favourite-courses"} component={FavCourseIndex} />
            <Route exact path={"/myBlogs-postedblogs"} component={PostedBlogIndex} />
            <Route exact path={"/myBlogs-draftedblogs"} component={DraftedBlogIndex} />
            <Route exact path={"/myBlogs-others"} component={OthersIndex} />
            


            <Route exact path={"/job-landing-page"} component={JobLandingPage} />
            <Route exact path={"/job-student"} component={JobStudent} />
            <Route exact path={"/job-page"} component={JobPage} />
            <Route exact path={"/job-outputs"} component={JobOutputs} />
            <Route exact path={"/other-job"} component={OtherJob} />

            <Route exact path={"/Educationist-Webniar"} component={EduWebinarPage} /> 
            <Route exact path={"/"} component={HomeMain} />
            

            <Redirect exact from="*" to="/" />
          </Switch>
        </Router>
      </MuiThemeProvider>
    );
  }
}

const mapStateToProps = (state) => {
  return { user: state.user };
};
export default connect(mapStateToProps)(Routes);
