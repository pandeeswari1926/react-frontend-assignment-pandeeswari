import { useState } from "react";
import contact from "../assets/contact.jpg";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted:", form);
    // Add API call here if needed
  };

  return (
    <div className="pt-24 px-4 sm:px-8 w-full min-h-screen mx-auto ">
      <div className="shadow-xl rounded-2xl border overflow-hidden flex flex-col md:flex-row md:w-[70%] mx-auto">
        {/* Left Image */}
        <div className="md:w-1/2 h-96 md:h-auto">
          <img
            src={contact}
            alt="Contact"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Form */}
        <div className="md:w-1/2 p-8">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            We’d love to hear from you. Fill out the form and we’ll get back as
            soon as we can.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block mb-1 text-sm font-semibold text-gray-700 dark:text-gray-300">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700  text-gray-800 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition"
              />
            </div>

            <div>
              <label className="block mb-1 text-sm font-semibold text-gray-700 dark:text-gray-300">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition"
              />
            </div>

            <div>
              <label className="block mb-1 text-sm font-semibold text-gray-700 dark:text-gray-300">
                Message
              </label>
              <textarea
                name="message"
                rows={4}
                value={form.message}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-md"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
