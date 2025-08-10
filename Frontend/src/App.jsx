import { Routes, Route } from 'react-router-dom';
import './index.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './Components/Header';
import Hero from './Components/Hero';
import Companies from './Components/Companies';
import CourseDetails from './Pages/CourseDetails';
import CourseCard from './Components/CourseCard';
import Testimonials from './Components/Testimonials';
import Footer from './Components/Footer';
import CourseList from './Pages/Course-List';
import Player from './Pages/Player';
import MyEnrollments from './Pages/MyEnrollments';
import Loading from './Components/Loading';
import Login from './Pages/SignUpForm/Login';
import ResetPassword from './Pages/SignUpForm/ResetPassword';
import UserDetails from './Pages/SignUpForm/UserDetails';

function App() {
  return (
    <div className="overflow-hidden text-default  min-h-screen ">

   
      <Routes>
          <Route 
            path="/" 
            element={
              <>
               < Header />
                <Hero />
                <Companies />
                <CourseCard />
                <Testimonials />
                <Footer />
              </>
            }/>
    
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
        position="bottom-center"  // ya 'bottom-left', 'bottom-center' etc.
        autoClose={1000}     // 3 seconds mein band hoga
        hideProgressBar={true}
        newestOnTop
        closeOnClick= {false}
        pauseOnHover
        draggable
        theme='light'
        style={{
          fontSize: "10px",
          fontWeight: "bold",
          borderRadius: "8px",
        }}
      />
    </div>
  );
}

export default App;
