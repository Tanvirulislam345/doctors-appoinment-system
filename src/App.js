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

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainDashbord />} >
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/patients" element={<Patients />} />
          <Route path="/usermanager" element={<Users />} />
          <Route path="/reviews/Approved" element={<ReviewsApproved />} />
          <Route path="/reviews/panding" element={<ReviewsPandding />} />
          <Route path="/reviews/rejected" element={<ReviewsReject />} />
          <Route path="/appoinments/Approved" element={<AppoinmentsApproved />} />
          <Route path="/appoinments/panding" element={<AppoinmentsPandding />} />
          <Route path="/appoinments/rejected" element={<AppoinmentsReject />} />
        </Route>
        {/* <Route path="/doctors" element={<DoctorsDashboard />}>
          <Route
            path="/doctors/contact-details"
            element={<DoctorsContactDetails />}
          />
          <Route path="/doctors/preferences" element={<DoctorsPreferences />} />
          <Route path="/doctors/password" element={<DoctorsChangePassword />} />
          <Route path="/doctors/appoinments" element={<DoctorsAppoinments />} />
          <Route path="/doctors/reviews" element={<PatientsReviews />} />
          <Route path="/doctors/settings" element={<MainSetting />} />
          <Route path="/doctors/billing" element={<PublicServices/>} />
        </Route> */}

        <Route path="/home" element={<PatientsDashboard />}>
          <Route
            path="/home/patientsprofile"
            element={<PatientsContactDetails />}
          />
          <Route
            path="/home/contact-patients"
            element={<PatientsContactDetails />}
          />
          <Route
            path="/home/preferences-patients"
            element={<PatientsPreferences />}
          />
          <Route path="/home/password-patients" element={<ChangePassword />} />
          <Route
            path="/home/favourites-Doctors"
            element={<FavouriteDoctors />}
          />
          <Route
            path="/home/appoinments-patients"
            element={<PatientsAppoinments />}
          />
          <Route path="/home/reviews-patients" element={<PatientsReviews />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
