import React, { useState } from "react";
import { useForm } from "react-hook-form";
import ProjectFrom from "../ProjectFrom/ProjectFrom";

const Register = () => {
  // Registar Page Condition
  const [isVisible, setIsVisible] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  // Submit Data
  const onSubmit = async (data) => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      if (response.ok) {
        console.log("Form submitted successfully");
        reset(); // Clear input fields after successful form submission
      } else {
        console.log("Error occurred during form submission");
      }
    } catch (error) {
      console.log("Error occurred during form submission:", error);
    }
  };
  return (
    <div className="my-6  bg-[#F8FAFC]  mx-12">
      <div className="py-4">
        <p className="px-4 text-red-500 text-3xl">#Registar New Company</p>
      </div>
      <form className="my-4 mx-4" onSubmit={handleSubmit(onSubmit)}>
        <div class="mb-6">
          <label
            for="Name"
            class="block mb-2 text-sm font-medium text-gray-900 "
          >
            Company Name
          </label>
          <input
            {...register("CompanyName", { required: true })}
            type="Text"
            id="Name"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
            placeholder="Name"
            required
          />
        </div>
        <div class="mb-6">
          <label
            for="email"
            class="block mb-2 text-sm font-medium text-gray-900 "
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            {...register("email", { required: true })}
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
            placeholder="Email"
            required
          />
        </div>
        <div class="mb-6">
          <label
            for="phone"
            class="block mb-2 text-sm font-medium text-gray-900 "
          >
            Phone Number
          </label>
          <input
            type="phone"
            id="phone"
            {...register("phone", { required: true })}
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
            placeholder="Phone"
            required
          />
        </div>
        <div class="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label
              for="streetAdd1"
              class="block mb-2 text-sm font-medium text-gray-900 "
            >
              Street Address 1
            </label>
            <input
              {...register("streetAdd1", { required: true })}
              type="text"
              id="streetAdd1"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
              placeholder="Address 1"
              required
            />
          </div>
          <div>
            <label
              for="streetAdd2"
              class="block mb-2 text-sm font-medium text-gray-900 "
            >
              Street Address 2
            </label>
            <input
              type="text"
              id="streetAdd2"
              {...register("streetAdd2", { required: true })}
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
              placeholder="Address 2"
              required
            />
          </div>
          <div>
            <label
              for="city"
              class="block mb-2 text-sm font-medium text-gray-900 "
            >
              City
            </label>
            <input
              {...register("city", { required: true })}
              type="text"
              id="city"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
              placeholder="City"
              required
            />
          </div>
          <div>
            <label
              for="country"
              class="block mb-2 text-sm font-medium text-gray-900 "
            >
              Country
            </label>
            <input
              {...register("country", { required: true })}
              type="text"
              id="country"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
              placeholder="Country Name"
              required
            />
          </div>
        </div>
        <div>
          <div class="flex items-start mb-6">
            <div class="flex items-center h-5">
              <input
                id="remember"
                {...register("isProjectAdded", { required: isVisible })}
                type="checkbox"
                checked={isVisible}
                onChange={() => setIsVisible(!isVisible)}
                class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300  dark:focus:ring-blue-600 dark:ring-offset-gray-800"
              />
            </div>
            <label
              for="remember"
              class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              <p href="#" className="text-blue-600 dark:text-blue-500">
                Add New Project
              </p>
            </label>
          </div>
          {isVisible && (
            <ProjectFrom
              isVisible={isVisible}
              register={register}
            ></ProjectFrom>
          )}
        </div>
        <button
          type="submit"
          className="mx-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Register;
