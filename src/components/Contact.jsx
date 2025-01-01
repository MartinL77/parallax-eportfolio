import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        "service_04n4fbp", 
        "template_f7voqeq", 
        formRef.current,
        "user_2H0KnbAQXWCHzjCHxyBtn" 
      )
      .then(
        (result) => {
          console.log(result); 
          setStatus("Message sent successfully!");
          setIsSubmitting(false);
          setForm({ name: "", email: "", message: "" });
        },
        (error) => {
          console.error(error); 
          setStatus("Failed to send message. Please try again.");
          setIsSubmitting(false);
        }
      );
  };

  return (
    <div className="content-wrapper">
    <h1>Contact</h1>
      <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
        <label>Full Name</label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Enter your full name"
          required
        />
        <label>Email Address</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Enter your email address"
          required
        />
        <label>Message</label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Enter your message"
          rows="5"
          required
        />
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Submit"}
        </button>
        {status && <p className="status-message">{status}</p>}
      </form>
    </div>
  );
};

export default Contact;