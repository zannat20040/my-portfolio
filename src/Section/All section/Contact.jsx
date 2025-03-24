import {  useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import toast from "react-hot-toast";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

const Contact = () => {
  const [isClient, setIsClient] = useState(false);
  const form = useRef();

  useEffect(() => {
    setIsClient(true); // Ensures it's rendered on the client side
    AOS.init();
  }, []);

  if (!isClient) return null; // Prevents server mismatch issues

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_idgxafj", // Your EmailJS Service ID
        "template_lj3vm3x", // Your Template ID
        form.current,
        "skh4cMNi2eS9c5Vg5" // Your Public Key
      )
      .then(
        (response) => {
          toast.success("Your mail has been sent.");
          console.log("SUCCESS!", response.status, response.text);
          form.current.reset(); // Reset form after successful submission
        },
        (error) => {
          console.error("FAILED...", error);
          toast.error("Failed to send mail. Please try again later.");
        }
      );
  };

  return (
    <div id="scrollToContact">
      <div>
        <p
          data-aos="fade-right"
          className="font-medium text-2xl text-accent mt-28 mb-10"
        >
          05. Contact with me
        </p>
      </div>

      <div className="hero">
        <div className="hero-content p-0 items-center">
          <div className="card shrink-0 w-full  grid grid-cols-1 lg:grid-cols-2  gap-4 shadow-2xl rounded-none">
            <form ref={form} onSubmit={sendEmail}  className="card-body bg-slate-950" data-aos="fade-left">
              <div className="grid grid-cols-2 gap-2">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-accent">Your Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="type here"
                    className="input input-bordered border border-accent rounded-none"
                    required
                    name="from_name"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-accent">Your Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="type here"
                    className="input input-bordered border border-accent rounded-none"
                    required
                    name="from_email"
                  />
                </div>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-accent">Your Message</span>
                </label>
                <textarea
                  className="textarea border border-accent h-40 rounded-none"
                  placeholder="type here"
                  name="message"
                ></textarea>
              </div>
              <div className="form-control mt-6">
                <button className="btn text-black hover:bg-transparent hover:border-accent border hover:text-white bg-accent rounded-none font-medium">
                  Send
                </button>
              </div>
            </form>
            <div className=" h-[450px]" data-aos="fade-right">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7301.403815713292!2d90.35557450000002!3d23.793627099999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1742809315632!5m2!1sen!2sbd"
                className="w-full h-full"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
