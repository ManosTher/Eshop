import React from 'react';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement logic to handle form submission
  };

  return (
    <div className="flex flex-col items-center ">
      <div className="max-w-md w-full space-y-4 mt-[4%] p-4 border-solid border-2 rounded-lg border-Romantic">
        <h1 className="text-3xl font-bold mb-4">Contact Us</h1>

        <div className="flex flex-col">
          <form onSubmit={handleSubmit} className="max-w-md w-full space-y-4">
            <div className="flex flex-col">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring focus:border-blue-300"
                placeholder="Your Name"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring focus:border-blue-300"
                placeholder="Your Email"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring focus:border-blue-300"
                placeholder="Your Message"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
            >
              Send Message
            </button>
          </form>
        </div>

        <button
          type="submit"
          className="w-full p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
        >
          Send Message
        </button>
      </div>
    </div>
  );
};

export default Contact;
