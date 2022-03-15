import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Addeventpage from "./components/Events/Addeventpage";
import Navbar from "./components/Header/Navbar";
import Firstpage from "./components/Home/Firstpage";
import Categories from "./components/Categories/Categories";
// import Event from "./components/Event";
import Footer from "./components/Footer/Footer";
import Eventpage from "./components/Events/Eventpage";
import About2 from "./components/About/About2";
import ModeratorProfile from "./components/Moderator/ModeratorProfile";
import MyProfile from "./components/Profile/MyProfile";
import BasicInfo from "./components/accountSide/BasicInfo";
import BillingInformation from "./components/Billing/BillingInformation";
import BookmarkedEvent from "./components/Bookmark/BookmarkedEvent";
import SingleEventPage from "./components/Events/SingleEventPage";
import MyProfileEvent from "./components/Profile/MyProfileEvent";
import SingleEventPageExclusive from "./components/Events/SingleEventPageExclusive";
import SignInUp from "./components/Profile/SignInUp";
import SubPlan from "./components/Plans/SubPlan";
import ModeratorDummy1 from "./components/Moderator/ModeratorDummy1";
import ModeratorDummy2 from "./components/Moderator/ModeratorDummy2";
import ModeratorDummy3 from "./components/Moderator/ModeratorDummy3";
import ModeratorDummy4 from "./components/Moderator/ModeratorDummy4";
import Terms from "./components/Team/terms";
import Privacy from "./components/Terms/privacy";
function PrivateRoute({ component: Component, ...rest }) {
  let auth = JSON.parse(localStorage.getItem("@token"))?.token;
  if (auth) {
    return <Component />;
  }
  return <Navigate to="/login" />;
}
const App = () => {
  return (
    <>
    <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Firstpage />} />
          <Route path="/about" element={<About2 />} />
          <Route path="/categories" element={<Categories />} />
          <Route
            path="/addevent"
            element={<PrivateRoute component={Addeventpage} />}
          />
          <Route
            path="/events"
            element={<PrivateRoute component={Eventpage} />}
          />
          <Route
            path="/moderator"
            element={<PrivateRoute component={ModeratorProfile} />}
          />
          <Route
            path="/myprofile"
            element={<PrivateRoute component={MyProfile} />}
          />
          <Route path="/bill" element={<BillingInformation />} />
          <Route path="/bookmark" element={<BookmarkedEvent />} />
          <Route
            path="/basicinfo"
            element={<PrivateRoute component={BasicInfo} />}
          />
          <Route
            path="/single-event/:id"
            element={<PrivateRoute component={SingleEventPage} />}
          />
          <Route
            path="/single-event-ex"
            element={<PrivateRoute component={SingleEventPageExclusive} />}
          />
          <Route path="/myprofile-event" element={<MyProfileEvent />} />
          <Route path="/login" element={<SignInUp />} />
          <Route
            path="/subplan"
            element={<PrivateRoute component={SubPlan} />}
          />
          <Route path="/mod-dummy1" element={<ModeratorDummy1 />} />
          <Route path="/mod-dummy2" element={<ModeratorDummy2 />} />
          <Route path="/mod-dummy3" element={<ModeratorDummy3 />} />
          <Route path="/mod-dummy4" element={<ModeratorDummy4 />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
};

export default App;
