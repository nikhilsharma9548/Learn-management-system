import { Routes, Route } from 'react-router-dom';
import './index.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import Header from './Components/Header';
import Hero from './Components/Hero';
import Companies from './Components/Companies';
import CourseDetails from './Components/CourseDetails';
import CourseCard from './Components/CourseCard';
import Testimonials from './Components/Testimonials';
import Footer from './Components/Footer';
import CourseList from './Components/Course-List';
import Player from './Components/Player';
import MyEnrollments from './Components/MyEnrollments';
import Loading from './Components/Loading';

function App() {
  return (
    <div className="overflow-hidden text-default  min-h-screen ">

    < Header />
      <Routes>
          <Route 
            path="/" 
            element={
              <>
                <Hero />
                <Companies />
                <CourseCard />
                <Testimonials />
              </>
            }/>
    
          <Route path='/course-list' element={<CourseList />} />
          <Route path='/course-list/:input' element={<CourseList />} />
          <Route path='/course/:id' element={<CourseDetails/>} />
          <Route path='/enrollments' element={<MyEnrollments />} />
          <Route path="/player/:courseId" element={<Player />} />
          <Route path='/loading/:path' element = {<Loading />} />
      </Routes>
      
    <Footer />

      {/* toaster  */}

       <ToastContainer 
        position="top-right"  // ya 'bottom-left', 'bottom-center' etc.
        autoClose={3000}      // 3 seconds mein band hoga
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        draggable
      />
    </div>
  );
}

export default App;
