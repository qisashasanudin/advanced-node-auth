import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import PrivateRoute from "./components/routing/PrivateRoute";

import PrivateScreen from "./components/screens/Private";
import RegisterScreen from "./components/screens/Register";
import LoginScreen from "./components/screens/Login";
import ForgotPasswordScreen from "./components/screens/ForgotPassword";
import ResetPasswordScreen from "./components/screens/ResetPassword";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<PrivateRoute />}>
            <Route exact path="/" element={<PrivateScreen />} />
          </Route>
          <Route exact path="/register" element={<RegisterScreen />} />
          <Route exact path="/login" element={<LoginScreen />} />
          <Route
            exact
            path="/forgotpassword"
            element={<ForgotPasswordScreen />}
          />
          <Route
            exact
            path="/resetpassword/:resetToken"
            element={<ResetPasswordScreen />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
