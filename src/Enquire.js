import React from "react";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";

const Enquire = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues, // Used to manually get form values when submitting
  } = useForm();

  const onSubmit = () => {
    const data = getValues(); // Get form data manually without a form
    console.log("Form Data:", data); // Log form data to see if it's being captured

    emailjs
      .send(
        "service_1dmkt0u",
        "template_xt493al",
        {
          to_name: "AGGC", // Optional, you can remove this if not needed
          name: data.name, // Check if this is being populated
          message: data.message, // Check if this is being populated
          email: data.email, // Check if this is being populated
        },
        "9p8SjgXCj3tGSsFY6"
      )
      .then((response) => {
        console.log("Email successfully sent!", response.status, response.text);
        alert("Message sent!");
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        alert("Failed to send message. Please try again later.");
      });
  };

  return (
    <div className="w-full mb-24 pt-24 flex items-center justify-center font-rubik">
      <div className="w-full max-w-lg rounded-lg">
        <h2 className="text-3xl font-bold text-customBlue mb-6 text-center">
          Work with me
        </h2>

        {/* Form Fields */}
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-customBlue">
              Name
            </label>
            <input
              {...register("name", { required: true })}
              type="text"
              className="mt-1 block w-full border-gray-300  rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-sm py-2 px-3"
            />
            {errors.name && (
              <span className="text-red-500 text-sm">Name is required</span>
            )}
          </div>

          {/* Email Input */}
          <div>
            <label className="block text-sm font-medium text-customBlue">
              Email
            </label>
            <input
              {...register("email", {
                required: true,
                pattern: /^\S+@\S+$/i,
              })}
              type="email"
              className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-sm py-2 px-3"
            />
            {errors.email && (
              <span className="text-red-500 text-sm">
                Valid email is required
              </span>
            )}
          </div>

          {/* Message Input */}
          <div>
            <label className="block text-sm font-medium text-customBlue">
              Message
            </label>
            <textarea
              {...register("message", { required: true })}
              className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-sm py-2 px-3"
              rows={5}
            ></textarea>
            {errors.message && (
              <span className="text-red-500 text-sm">Message is required</span>
            )}
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <div
              onClick={handleSubmit(onSubmit)} // Trigger manual form submission
              className="cursor-pointer relative w-full h-10 flex mt-2 items-center justify-center bg-white shadow-sm hover:translate-y-0.5 transition-all duration-500 rounded-lg py-2 focus:outline-none"
            >
              <div className=" flex items-center">
                <span className="text-sm text-customBlue font-semibold">
                  Submit
                </span>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <p className="mt-16 tracking-wider  opacity-50 font-semibold">SJ DIGITAL</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Enquire;
