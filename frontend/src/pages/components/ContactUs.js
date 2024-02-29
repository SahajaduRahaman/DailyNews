import React, { useEffect, useState } from 'react'
import Heading from './Heading'
import "../../styles/ContactUs.css"
import SuccessfullLottie from "../../assets/successfull.json"
import Lottie from "lottie-react";
import emailjs from '@emailjs/browser';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        user_name: "",
        user_email: "",
        user_msg: "",
        to_name: "Raja Rahaman",
    });

    const [ hidden, setHidden] = useState("");

    useEffect(() => {
        const timer = setTimeout(() => {
          setHidden("");
        }, 5000);
        return () => clearTimeout(timer);
    }, [hidden]);

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name] : e.target.value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const serviceId = process.env.REACT_SERVICE_ID;
        const templateId = process.env.REACT_TEMPLATE_ID;
        const publicKey = process.env.REACT_PUBLIC_KEY;

        emailjs.send(serviceId, templateId, formData, publicKey)
        .then((response) => {
            setHidden(response.text);
            setFormData({
                user_name: "",
                user_email: "",
                user_msg: "",
                to_name: "Raja Rahaman",
            })
        })
        .catch((err) => {
            console.error("Error sending mail", err)
        })
    }

    return (
        <>
            <Heading title='Contact Us' />
            <section className='contact-us'>
                {hidden &&
                    <div className='successfull'>
                        <Lottie animationData={SuccessfullLottie} loop={true} />
                    </div>
                }
                <form action=''>
                    <input type='text' value={formData.user_name} name="user_name" onChange={(e) => handleChange(e)} placeholder='Enter your name' />
                    <input type='email' value={formData.user_email} name="user_email" onChange={(e) => handleChange(e)} placeholder='Enter email Address...' />
                    <input type='text' value={formData.user_msg} name="user_msg" onChange={(e) => handleChange(e)} placeholder='Type your message' />
                    <button onClick={handleSubmit}>
                        <i className='fa fa-paper-plane'></i> SUBMIT
                    </button>
                </form>
            </section>
        </>
    )
}

export default ContactUs