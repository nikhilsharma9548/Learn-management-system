import React from 'react'

const EnrollForm = () => {

  
  //payment gitway
  
    //  const [showModal, setShowModal] = useState(false)
  
    const [formData, setFormData] = useState({
      fname: "",
      mobile: "",
      Price: "",
      // totalPrice:parseInt(getTotal().totalPrice) * 100,
    });
  
      const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const shipping_address = {
        first_name: formData.fname,
        phone_number: formData.mobile,
        date: new Date().toLocaleString("en-US", {
          month: "short",
          day: "2-digit",
          year: "numeric",
        }),
      };
  
      let options = {
        key:import.meta.env.VITE_RAZORPAY_KEY,
        key_secret: "",
        amount: parseInt(courseData.price) * 100,
        currency: "INR",
        name: "@Padho Likho",
        description: `${courseData.price}`,
        handler: function (response) {
          const paymentId = response.razorpay_payment_id;
          console.log("paymant id", paymentId, shipping_address);
          if(!isEnrolled){
            dispatch(addCourse(courseData));
           toast.success("Enrolled Succesfully ✅");
          navigate('/enrollments')
          // dispatch(removeCourse(courseData));
        }
        
          setShowModal({
            fname: "",
            fEmail:"",
            mobile: "",
          });
        },
        theme: {
          color: "#07a291db",
        },
      };
      let pay = new window.Razorpay(options);
      pay.open();
  
     
    };
      const handleClose = () => {
    setShowModal(false);
  };  

  return (
    <>
       <div className="fixed inset-0 flex items-center  justify-center h-auto bg-black/50 z-50">
                    
                    <motion.div className='bg-white rounded-md md:w-96 w-72  md:p-12 p-6 h-auto bg-gradient-to-r from-[#c3cfda]  to-[#95a8dd]'
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.5, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                      <div className='flex justify-end '>
                        
                        <button 
                              type="button"
                              onClick={handleClose}
                              className="bg-gray-500/50  hover:bg-gray-500 duration-300 cursor-pointer 
                              text-black py-0 px-1.5 font-semibold rounded"
                        >X</button>
                      </div>
                          <h2 className='text-2xl font-semibold text-blue-800 mb-5'>Enroll Form</h2>
                  {/* //enroll from  */}

            <form onSubmit={handleSubmit} className="flex w-full flex-col gap-5">
                    <input type="text" placeholder="Enter the student Name" className="border p-2 rounded bg-white " required  onChange={handleChange}/>
                       <input type="email" placeholder="Enter the student Email" className="border p-2 rounded bg-white"  required onChange={handleChange}/>
                       <input type="text" placeholder="Enter the student Phone" className="border p-2 rounded bg-white" required onChange={handleChange}/>
                          <div className="flex justify-center mt-5">
                             
                                  <button 
                                    // onClick={()=>{
                                    //    handleEnroll();
                                    // }}
                                    type="submit"
                                    className="bg-blue-600 text-white rounded cursor-pointer
                                     hover:bg-blue-800 duration-500 py-1 px-4 "
                                  >
                                    Enroll  
                                  </button>
                          </div>
            </form>

                    </motion.div>
        </div>
    </>
  )
}

export default EnrollForm