import { BrowserRouter, Routes, Route } from "react-router-dom";
import Addeventpage from "./components/Addeventpage";
import Navbar from "./components/Navbar";
import Firstpage from "./components/Firstpage";
import Categories from "./components/Categories";
import Event from "./components/Event";
import Footer from "./components/Footer";
import Eventpage from "./components/Eventpage";
import About2 from "./components/About2";
import ModeratorProfile from "./components/ModeratorProfile";
import MyProfile from "./components/MyProfile";
import BasicInfo from "./components/BasicInfo";
import BillingInformation from "./components/BillingInformation";
import BookmarkedEvent from "./components/BookmarkedEvent";
import SingleEventPage from "./components/SingleEventPage";
import MyProfileEvent from "./components/MyProfileEvent";
import SingleEventPageExclusive from "./components/SingleEventPageExclusive";
import SignInUp from "./components/SignInUp";
import SubPlan from "./components/SubPlan";
const App = () => {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Firstpage />} />
          <Route path="/about2" element={<About2 />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/event" element={<Event />} />
          <Route path="/addevent" element={<Addeventpage />} />
          <Route path="/events" element={<Eventpage />} />
          <Route path="/moderator" element={<ModeratorProfile />} />
          <Route path="/myprofile" element={<MyProfile />} />
          <Route path="/bill" element={<BillingInformation />} />
          <Route path="/bookmark" element={<BookmarkedEvent />} />
          <Route path="/basicinfo" element={<BasicInfo />} /> 
          <Route path="/single-event" element={<SingleEventPage />} /> 
          <Route path="/single-event-ex" element={<SingleEventPageExclusive />} /> 
          <Route path="/myprofile-event" element={<MyProfileEvent />} /> 
          <Route path="/login" element={<SignInUp />} /> 
          <Route path="/subplan" element={<SubPlan />} /> 
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
};

export default App;
