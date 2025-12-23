import React from 'react'

const Contact = () => {
  return (
    <div className="pt-24 max-w-screen-2xl mx-auto container px-5 md:px-40">
      
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-6">
        Contact Us
      </h1>

      <p className="text-center text-gray-600 mb-10">
        Have questions, feedback, or need support?  
        We’d love to hear from you.
      </p>

      <div className="grid md:grid-cols-2 gap-10">
        
        {/* Contact Info */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>

          <p className="text-gray-700 mb-2">
            📧 <strong>Email:</strong> support@wordtopdf.com
          </p>

          <p className="text-gray-700 mb-2">
            📞 <strong>Phone:</strong> +91 98765 43210
          </p>

          <p className="text-gray-700 mb-2">
            📍 <strong>Location:</strong> India
          </p>

          <p className="text-gray-600 mt-4">
            Our support team is available Monday to Friday,
            9:00 AM – 6:00 PM.
          </p>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Send a Message</h2>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border p-2 rounded focus:outline-blue-400"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full border p-2 rounded focus:outline-blue-400"
            />

            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full border p-2 rounded focus:outline-blue-400"
            ></textarea>

            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 duration-300"
            >
              Send Message
            </button>
          </form>
        </div>

      </div>
    </div>
  )
}

export default Contact
