import {
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import SignupPage from './pages/Signup';
import LoginPage from './pages/Login';

function App() {
  return (
    <Routes>
      <Route index path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/*" element={<LoginPage />} />
    </Routes>
  );
}

export default App;