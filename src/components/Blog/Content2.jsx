import React, { useState } from "react";

const Content2 = () => {
  const [formData, setFormData] = useState({
    comment: "",
    name: "",
    email: "",
    website: "",
    saveInfo: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="w-full px-4 py-10 grid gap-10 md:grid-cols-[65%_35%] md:mx-10 md:mt-30 h-auto"
      >
        <div>
          <h1 className="mb-3 text-2xl font-semibold">Leave a Reply</h1>
          <p className="text-gray-500 mb-6">
            Your email address will not be published. Required fields are marked*
          </p>
          <label htmlFor="comment" className="font-semibold text-gray-700">
            Comment
          </label>
          <textarea
            name="comment"
            id="comment"
            className="border border-gray-400 w-full h-40 mt-2 rounded-sm"
            value={formData.comment}
            onChange={handleChange}
          ></textarea>
          <label
            htmlFor="name"
            className="font-semibold text-gray-700 mt-4 block"
          >
            Name*
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="border border-gray-400 w-full h-10 mt-2 rounded-md"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <label
            htmlFor="email"
            className="font-semibold text-gray-700 mt-4 block"
          >
            Email*
          </label>
          <input
            type="email"
            id="email"
            value={formData.email}
            name="email"
            className="border border-gray-400 w-full h-10 mt-2 rounded-md"
            onChange={handleChange}
            required
          />
          <label
            htmlFor="website"
            className="font-semibold text-gray-700 mt-4 block"
          >
            Website
          </label>
          <input
            type="text"
            id="website"
            name="website"
            className="border border-gray-400 w-full h-10 mt-2 rounded-md"
            value={formData.website}
            onChange={handleChange}
          />
          <div className="mt-5 mb-8 flex items-start">
            <input
              type="checkbox"
              id="saveInfo"
              name="saveInfo"
              checked={formData.saveInfo}
              onChange={handleChange}
            />
            <span className="font-semibold text-sm text-gray-700 pl-2">
              Save my name, email and website in this browser for the next time
              I comment.
            </span>
          </div>
          <button
            type="submit"
            className="text-white bg-black rounded-3xl py-3 px-6 hover:bg-gray-800 transition duration-300"
          >
            Post Comment
          </button>
        </div>
      </form>
    </>
  );
};

export default Content2;
