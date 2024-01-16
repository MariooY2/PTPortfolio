import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const obj=import.meta.env

const ContactUs = () => {
  const form = useRef();
  const [emailSent, setEmailSent] = useState(false);
  const [formData, setFormData] = useState({
    from_name: "",
    user_email: "",
    phone_number: "",
    message: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false); // State to track if form has been submitted

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.from_name) errors.from_name = "Name is required";
    if (!formData.user_email) errors.user_email = "Email is required";
    if (!formData.phone_number)
      errors.phone_number = "Phone number is required";
    if (!formData.message) errors.message = "Message is required";
    return errors;
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitted(true); // Set isSubmitted to true when the form is submitted
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      emailjs
        .sendForm(
          obj.VITE_YOUR_SERVICE_ID,
          obj.VITE_YOUR_TEMPLATE_ID,
          form.current,
          obj.VITE_YOUR_PUBLIC_KEY
        )
        .then(
          (result) => {
            console.log(result.text);
            setEmailSent(true);
            setTimeout(() => setEmailSent(false), 5000);
          },
          (error) => {
            console.log(error.text);
          }
        );
    } else {
      setFormErrors(errors);
    }
  };

  return (
    <div>
      <div className="color" >
        <div className="disp">
          
          <h1 className="smalll">
            <span className="highlight ">Start </span>Your Journey Now{" "}
          </h1>
          <h1 className="smalll">
            Get Started with a <span className="highlight">FREE SESSION</span>
          </h1>
        </div>
        <div className="Center disp">
          <div className="container8">
            <div className="formtext">
              <div className="formtextcont">
                <div className="mt-5"></div>
                <div className="mt-4"></div>
              
                <div className="textcontainer2 disp">
                  <h2 className="white mb-3 bolder1">
                    One Free Workout
                  </h2>
                  <p className="">
                    <span className="lastformtext">My Workouts are designed to overcome all Plateaus.</span>
                  </p>
                  <div className="formtextcont2 white mb-3">
                    <p className="mt-3">
                      It is a system that works every time because I have
                      stripped everything that is arbitrary from it. In a
                      nutshell, I leave nothing to chance and cover every single
                      variable vital to achieving rapid growth. It's not easy,
                      in fact if you want to make great gains or lose weight it
                      can be extremely hard work, but if you work it properly it
                      always delivers.
                    </p> 
                  </div>
                  <p className="white mb-5">
                    Get started with a <span className="blue">FREE</span>{" "}
                    Consultation.
                  </p>
                  <h4 className="signature bolder1">Riad Katrib</h4>
                </div>
              </div>
              <div className="form-container white" id="Contact">
                {emailSent ? (
                  <div className="success-animation">
                    Email successfully sent!
                    <p>I will contact you soon!!!</p>
                  </div>
                ) : (
                  <form ref={form} onSubmit={sendEmail}>
                    <label>Full Name</label>
                    <input
                      type="text"
                      name="from_name"
                      onChange={handleInputChange}
                      required=""
                    />
                    {isSubmitted && formErrors.from_name && (
                      <p className="error-message">{formErrors.from_name}</p>
                    )}

                    <label>Email</label>
                    <input
                      type="email"
                      name="user_email"
                      onChange={handleInputChange}
                      required=""
                    />
                    {isSubmitted && formErrors.user_email && (
                      <p className="error-message">{formErrors.user_email}</p>
                    )}

                    <label>Phone Number</label>
                    <input
                      type="tel"
                      name="phone_number"
                      required=""
                      onChange={handleInputChange}
                    />
                    {isSubmitted && formErrors.phone_number && (
                      <p className="error-message">{formErrors.phone_number}</p>
                    )}

                    <label>Message</label>
                    <textarea
                      name="message"
                      style={{ resize: "none" }}
                      onChange={handleInputChange}
                    />
                    {isSubmitted && formErrors.message && (
                      <p className="error-message">{formErrors.message}</p>
                    )}

                    <input type="submit" value="Send" />
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="wid">
        <div className="upalittle">
        <h3 className="number smalll">+41 78 309 83 73</h3>
        <div className="call smalll">
          Call Me&nbsp;<span className="highlight">Today</span></div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
