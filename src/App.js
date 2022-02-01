import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Patients from "./components/pages/Admin/Patients/Patients";
import Doctors from "./components/pages/Admin/Doctors/Doctors";
import Users from "./components/pages/Admin/Users/Users";
import PatientsDashboard from "./components/dashboard/patientsDashboard/PatientsDashboard";
import PatientsReviews from "./components/pages/sharedComponents/reviews/PatientsReviews";
import PatientsAppoinments from "./components/pages/Admin/Patients/patientsAppoinmnets/PatientsAppoinments";
import FavouriteDoctors from "./components/pages/Admin/Patients/favouriteDoctors/FavouriteDoctors";
import ChangePassword from "./components/pages/Admin/Patients/changePassword/ChangePassword";
import PatientsPreferences from "./components/pages/Admin/Patients/preferences/PatientsPreferences";
import PatientsContactDetails from "./components/pages/Admin/Patients/contactDetails/PatientsContactDetails";
import MainDashbord from "./components/dashboard/mainDashbord/MainDashbord";
import AppoinmentsApproved from "./components/pages/Admin/Appoinments/AppoinmentsApproved";
import AppoinmentsPandding from "./components/pages/Admin/Appoinments/AppoinmentsPandding";
import AppoinmentsReject from "./components/pages/Admin/Appoinments/AppoinmentsReject";
import ReviewsApproved from "./components/pages/Admin/Reviews/ReviewsApproved";
import ReviewsPandding from "./components/pages/Admin/Reviews/ReviewsPandding";
import ReviewsReject from "./components/pages/Admin/Reviews/ReviewsReject";
import DoctorsDashboard from "./components/dashboard/doctorsDashboard/DoctorsDashboard";
import DoctorsContactDetails from "./components/pages/Admin/Doctors/contactDetails/DoctorsContactDetails";
import DoctorsPreferences from "./components/pages/Admin/Doctors/preferences/DoctorsPreferences";
import DoctorsChangePassword from "./components/pages/Admin/Doctors/changePassword/DoctorsChangePassword";
import DoctorsAppoinments from "./components/pages/Admin/Doctors/doctorsAppoinments/DoctorsAppoinments";
import MainSetting from "./components/pages/Admin/setting/MainSetting";
import PublicServices from "./components/pages/Admin/listing/PublicServices";
import PrivateAppoinments from "./components/pages/Admin/listing/PrivateAppoinments";
import UsersDashBoard from "./components/dashboard/usersDashboard/UsersDashBoard";
import UsersRegistration from "./components/pages/Admin/Users/userRegistration/UsersRegistration";
import DoctorsSetting from "./components/pages/Admin/Doctors/doctorsSetting/DoctorsSetting";
import ListingDetails from "./components/pages/Admin/listing/ListingDetails";
import AuthProvider from "./context/AuthProvider";
import SignUp from "./components/pages/sharedComponents/registration/SignUp";
import SignIn from "./components/pages/sharedComponents/registration/SignIn";
import Home from "./components/pages/home/home/Home";
import DynamicPage from "./components/pages/home/HomeDynamic/DynamicPage";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/homepage" element={<Home />} />
          <Route path="/homepage2" element={<DynamicPage />} />

          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />


          <Route path="/" element={<MainDashbord />} >
            <Route path="home/doctors" element={<Doctors />} />
            <Route path="home/patients" element={<Patients />} />
            <Route path="home/usermanager" element={<Users />} />
            <Route path="home/reviews/Approved" element={<ReviewsApproved />} />
            <Route path="home/reviews/panding" element={<ReviewsPandding />} />
            <Route path="home/reviews/rejected" element={<ReviewsReject />} />
            <Route path="home/appoinments/Approved" element={<AppoinmentsApproved />} />
            <Route path="home/appoinments/panding" element={<AppoinmentsPandding />} />
            <Route path="home/appoinments/rejected" element={<AppoinmentsReject />} />
            <Route path="home/specialties" element={<MainSetting />} />
          </Route>

          <Route path="/doctors" element={<DoctorsDashboard />}>
            <Route
              path="/doctors/contact-details"
              element={<DoctorsContactDetails />}
            />
            <Route path="/doctors/preferences" element={<DoctorsPreferences />} />
            <Route path="/doctors/password" element={<DoctorsChangePassword />} />
            <Route path="/doctors/appoinments" element={<DoctorsAppoinments />} />
            <Route path="/doctors/reviews" element={<PatientsReviews />} />
            <Route path="/doctors/listing-details" element={<ListingDetails />} />
            <Route path="/doctors/private-service" element={<PrivateAppoinments />} />
            <Route path="/doctors/public-service" element={<PublicServices />} />
            <Route path="/doctors/settings" element={<DoctorsSetting />} />
          </Route>

          <Route path="/users" element={<UsersDashBoard />}>
            <Route path="/users/doctors" element={<Doctors />} />
            <Route path="/users/patients" element={<Patients />} />
            <Route path="/users/usermanager" element={<UsersRegistration />} />
          </Route>

          <Route path="/patients" element={<PatientsDashboard />}>
            <Route
              path="/patients/patientsprofile"
              element={<PatientsContactDetails />}
            />
            <Route
              path="/patients/contact-patients"
              element={<PatientsContactDetails />}
            />
            <Route
              path="/patients/preferences-patients"
              element={<PatientsPreferences />}
            />
            <Route path="/patients/password-patients" element={<ChangePassword />} />
            <Route
              path="/patients/favourites-Doctors"
              element={<FavouriteDoctors />}
            />
            <Route
              path="/patients/appoinments-patients"
              element={<PatientsAppoinments />}
            />
            <Route path="/patients/reviews-patients" element={<PatientsReviews />} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
