import { Routes, Route } from 'react-router-dom';
import './index.css'
import { Flip, Slide, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './Components/Home';
import CourseDetails from './Pages/CourseDetails'
import CourseList from './Pages/Course-List';
import Player from './Pages/Player';
import MyEnrollments from './Pages/MyEnrollments';
import Loading from './Components/Loading';
import Login from './Pages/SignUpForm/Login';
import ResetPassword from './Pages/SignUpForm/ResetPassword';
import UserDetails from './Pages/SignUpForm/UserDetails';
import { useContext } from 'react';
import { AppContext } from './Context/AppContext';

function App() {

  const {isBlur} = useContext(AppContext);
  return (
    <div className={`overflow-hidden text-default  min-h-screen`}>

   
      <Routes>
          <Route 
            path="/" 
            element={<Home />}/>
    
          <Route path='/course-list' element={<CourseList />} />
          <Route path='/course-list/:input' element={<CourseList />} />
          <Route path='/course/:id' element={<CourseDetails/>} />
          <Route path='/enrollments' element={<MyEnrollments />}/>
          <Route path="/player/:id" element={<Player />} />
          <Route path='/loading/:path' element = {<Loading />} />
          <Route path='/login' element = {<Login />}/>
          <Route path='/reset-password' element = {<ResetPassword />} />
          
      </Routes>
            <UserDetails />
      {/* toaster  */}

       <ToastContainer
        position="bottom-center" 
        autoClose={1000}
        hideProgressBar={true}
        newestOnTop
        closeOnClick= {false}
        pauseOnHover
        draggable 
        transition={Slide}
        theme='light'
        style={{
          paddingBottom: "14px",
          color: "#95a8dd",
          fontSize: "14px",
          fontWeight: "semibild",
          borderRadius: "8px",
        }}
        toastStyle={{
          backgroundColor: "#2152D9",
          color:"white",
        }}
      />
    </div>
  );
}

export default App;
