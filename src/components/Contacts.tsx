import React from "react";
import {
  faPhoneAlt,
  faEnvelope,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contacts = () => {
  return (
    <section id="contacts" className="section bg-gray-50 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden">
          {/* Informations de contact */}
          <div className="w-full md:w-1/2 bg-gradient-to-br from-orange-400 to-orange-600 text-white p-8">
            <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
            <p className="mb-4">
              Feel free to reach out to me via phone, email, or by visiting our
              location.
            </p>
            <div className="mb-4">
              <FontAwesomeIcon icon={faPhoneAlt} className="mr-2" /> +1 (234)
              567-890
            </div>
            <div className="mb-4">
              <FontAwesomeIcon icon={faEnvelope} className="mr-2" />{" "}
              example@example.com
            </div>
            <div>
              <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" /> 123
              Main Street, City, Country
            </div>
          </div>

          {/* Formulaire de contact */}
          <div className="w-full md:w-1/2 p-8">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
            <form className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-orange-400 focus:border-orange-400"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-orange-400 focus:border-orange-400"
                  placeholder="Your email"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-orange-400 focus:border-orange-400"
                  placeholder="Your message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
