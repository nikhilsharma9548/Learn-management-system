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
  hideProgressBar
  newestOnTop
  closeOnClick
  pauseOnHover
  draggable
  theme="light"
  transition={Slide}
  className="!p-4 !px-6 sm:!p-0" // outer container ka padding
  toastClassName="!bg-blue-500 !text-white !border !border-slate-800 !rounded-sm sm:!px-4 sm:!py-2 !px-2 !py-1"
  bodyClassName="!text-white !text-sm sm:!text-base  font-outfit"
/>


    </div>
  );
}

export default App;
