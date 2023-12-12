import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from 'react-hot-toast';

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_rsvsjoo",
        "template_lj3vm3x",
        form.current,
        "E-3JE6i7RKmny8lcN"
      )
      .then(
        (result) => {
          console.log(result);
          toast.success('Message Sent!')
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div id="scrollToContact">
      <div>
        <p className="font-medium text-2xl text-accent mt-28 mb-10">
          04. Contact with me
        </p>
      </div>

      <div>
        <div className="hero ">
          <div className="hero-content  p-0 grid grid-cols-1 lg:grid-cols-2  items-center ">
            <div className="card shrink-0 w-full  shadow-2xl bg-slate-950 rounded-none">
              <form className="card-body" ref={form} onSubmit={sendEmail}>
                <div className="grid grid-cols-2 gap-2">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-cyan-400">
                        Your Name
                      </span>
                    </label>
                    <input
                      type="text"
                      placeholder="type here"
                      className="input input-bordered input-accent rounded-none"
                      required
                      name="from_name"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-cyan-400">
                        Your Email
                      </span>
                    </label>
                    <input
                      type="email"
                      placeholder="type here"
                      className="input input-bordered input-accent rounded-none"
                      required
                      name="from_email"
                    />
                  </div>
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-cyan-400">
                      Your Message
                    </span>
                  </label>
                  <textarea
                    className="textarea textarea-accent h-40 rounded-none"
                    placeholder="type here"
                    name="message"
                  ></textarea>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-accent rounded-none font-medium">
                    Send
                  </button>
                </div>
              </form>
            </div>
            <div className="text-center lg:text-left ">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7300.632820069064!2d90.36030580000003!3d23.807345100000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1702371865224!5m2!1sen!2sbd"
                className="w-full"
                height="450"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
