import React, { useState } from "react";
import { useForm } from "react-hook-form";
import ProjectFrom from "../ProjectFrom/ProjectFrom";

const Register = () => {
  const [isVisible, setIsVisible] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  console.log(watch("example"));
  return (
    <div className="my-6 mx-12">
      <div className="bg-[#0277BD]">
        <h1 className="text-white px-4 py-4">Register New Company</h1>
      </div>
      <form className="my-4 mx-4" onSubmit={handleSubmit(onSubmit)}>
        <div class="mb-6">
          <label
            for="Name"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Company Name
          </label>
          <input
            {...register("CompanyName", { required: true })}
            type="Text"
            id="Name"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Name"
            required
          />
        </div>
        <div class="mb-6">
          <label
            for="email"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            {...register("email", { required: true })}
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Email"
            required
          />
        </div>
        <div class="mb-6">
          <label
            for="phone"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Phone Number
          </label>
          <input
            type="phone"
            id="phone"
            {...register("phone", { required: true })}
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Phone"
            required
          />
        </div>
        <div class="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label
              for="streetAdd1"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Street Address 1
            </label>
            <input
              {...register("streetAdd1", { required: true })}
              type="text"
              id="streetAdd1"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Address 1"
              required
            />
          </div>
          <div>
            <label
              for="streetAdd2"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Street Address 2
            </label>
            <input
              type="text"
              id="streetAdd2"
              {...register("streetAdd2", { required: true })}
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Address 2"
              required
            />
          </div>
          <div>
            <label
              for="city"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              City
            </label>
            <input
              {...register("city", { required: true })}
              type="text"
              id="city"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="City"
              required
            />
          </div>
          <div>
            <label
              for="country"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Country
            </label>
            <input
              {...register("country", { required: true })}
              type="text"
              id="country"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                type="checkbox"
                checked={isVisible}
                onChange={() => setIsVisible(!isVisible)}
                class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                required
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
            <div></div>
          </div>
          {isVisible && <ProjectFrom register={register}></ProjectFrom>}
        </div>

        <button
          type="submit"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Register;
