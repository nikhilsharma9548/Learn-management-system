import{ crateContext, createContext, use, useEffect, useState } from "react";
import { courses } from "../assets/assets";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext();  



export const AppContextProvider = (props)=>{

    

    const navigate =useNavigate()

    const [allCourses, setallCourses] = useState([])

    const [enrolledCourses, setEnrolledCourses] = useState([])

     const enrollCourse = (course) => {
    setEnrolledCourses((prev) => [...prev, course]);
  };
    //Fectch All courses

    const fetchAllCourses = async () =>{
        setallCourses(courses)
    }

    //Fectch Enrolled Courses

    const fetchEnrolledCourses = async () => {
        setEnrolledCourses(courses)
    }
    
    useEffect(()=>{
        fetchAllCourses()
        fetchEnrolledCourses()
    },[])
    
     const value = {
            allCourses,
            navigate,
            enrolledCourses,
           fetchEnrolledCourses,
     }

     //function to calculate Course Chapter TIme

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}