import{ crateContext, createContext, use, useEffect, useState } from "react";
import { courses } from "../assets/assets";
import runGemini from "../ChatApp/gemini";
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
    
     //chatBot Box
    const[openChat,  setOpenChat] = useState (false)
    const[input, setInput] = useState("");
    const[loading, setLoading] = useState(false);
    const[resultData, setResultData] = useState("");
    const[showResult, setShowresult] = useState(false);
    const[prevPrompt, setPrevPrompt] = useState([]);
      const[recentPrompt, setRecentPrompt] = useState("");
        //chatbot API
        const delayPara =(index, nextword) =>{
        setTimeout(function () {
            setResultData(prev=>prev+nextword);
        },75*index)
    }

        const onSent = async(prompt) =>{
        setInput("");
        setResultData("");
        setLoading(true)
        setShowresult(true)
        setRecentPrompt(input)
        let result;
        if(prompt !== undefined){
            result = await runGemini(prompt);
            setRecentPrompt(prompt)
        }
        else{
             setPrevPrompt(prev=>[...prev,input])
             setRecentPrompt(input)
             result = await runGemini(input)
        }
       
        let responseArray = result.split("**");
        let newResult = "";
        for(let i =0 ; i< responseArray.length; i++)
        {
            if(i === 0 || i%2 !== 1){
                newResult += responseArray[i];
            }
            else{
                newResult += "<b>"+responseArray[i]+"</b>";
            }
        }
        let newResult2 = newResult.split("*").join("</br></br>")
         let newResultArray = newResult2.split(" ");
         for(let i =0; i<newResultArray.length; i++)
         {
            const nextword = newResultArray[i];
            delayPara(i,nextword+" ")
         }
         setLoading(false)
         setInput("")     
         console.log("Gemini Response:", result);  
    };
    
          //currency 
    const currency = import.meta.env.VITE_CURRENCY
 
     const value = {
            currency,
            input,
            setInput,
            onSent,
            prevPrompt,
            resultData,
            setResultData,
            setPrevPrompt,
            showResult,
            setShowresult,
            setRecentPrompt,
            recentPrompt,
            loading,
            openChat,
            setOpenChat,
            allCourses,
            navigate,
            enrolledCourses,
            setEnrolledCourses,
           fetchEnrolledCourses,
     }

   
    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}