import Register from './components/Register';
import Login from './components/Login';
import Layout from './components/Layout';
import Missing from './components/Missing';
import Unauthorized from './components/Unauthorized';
import RequireAuth from './components/RequireAuth';
import { Routes, Route } from 'react-router-dom';
import Students from './components/Students';


function App() {

  return (
    <Routes>
        <Route path="/" element={
          <RequireAuth>
            <Students />
          </RequireAuth>
        } />
        {/* public routes */}
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="unauthorized" element={<Unauthorized />} />

        {/* we want to protect this route*/}

          <Route path="students" element={
            <RequireAuth>
              <Students />
            </RequireAuth>
            } 
          />
        {/* catch all */}
        <Route path="*" element={<Missing />} />
    </Routes>
  );
}

export default App;