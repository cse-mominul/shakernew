import React, { useState } from "react";
import { useForm } from "react-hook-form";

const ProjectFrom = (props) => {
  const { register } = props;
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const [prevaling, setPrevaling] = useState("");

  const handleSelectPrevaling = (event) => {
    setPrevaling(event.target.value);
  };
  const [tax, setTax] = useState("");

  const handleSelectTax = (event) => {
    setPrevaling(event.target.value);
  };

  return (
    <div className="my-4 mx-4">
      <h1 className="text-xl">New Project: Project Information</h1>
      <div class="mb-6 my-6">
        <input
          {...register("ProjectName", { required: true })}
          type="Text"
          id="ProjectName"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Project Name"
          required
        />
      </div>
      <div class="grid gap-6 mb-6 md:grid-cols-2">
        <div>
          <input
            {...register("projectStreetAdd1", { required: true })}
            type="text"
            id="projectStreetAdd1"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Street Address 1"
            required
          />
        </div>
        <div>
          <input
            type="text"
            id="projectStreetAdd2"
            {...register("projectStreetAdd2", { required: true })}
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Street Address 2"
            required
          />
        </div>
        <div>
          <input
            {...register("ProjectCity", { required: true })}
            type="text"
            id="ProjectCity"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="City"
            required
          />
        </div>
        <div>
          <input
            {...register("projectStage", { required: true })}
            type="text"
            id="Stage"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Stage"
            required
          />
        </div>
      </div>
      <div class="grid gap-6 mb-6 md:grid-cols-2">
        <div>
          <input
            {...register("projectZipCode", { required: true })}
            type="text"
            id="projectZipCode"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Zip Code"
            required
          />
        </div>
        <div>
          <input
            type="text"
            id="projectCountry"
            {...register("projectCountry", { required: true })}
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Country"
            required
          />
        </div>
        <div>
          <select
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={selectedOption}
            onChange={handleSelectChange}
            {...register("SelectedOptions", { required: true })}
          >
            <option value="">Select an option</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
        </div>
        <div>
          <input
            {...register("projectSQFT", { required: true })}
            type="text"
            id="projectSQFT"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Size in SQFT"
            required
          />
        </div>
      </div>
      <div className="divider"></div>
      <h1 className="py-4 px-4">Management Team</h1>
      <div class="grid gap-6 mb-6 md:grid-cols-3">
        <div>
          <input
            {...register("projectManagerName", { required: true })}
            type="text"
            id="projectManagerName"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Project Manager Name"
            required
          />
        </div>
        <div>
          <input
            type="Email"
            id="projectManagerEmail"
            {...register("projectManagerEmail", { required: true })}
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Email"
            required
          />
        </div>
        <div>
          <input
            {...register("ProjectManagerPhone", { required: true })}
            type="text"
            id="ProjectManagerPhone"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Phone"
            required
          />
        </div>
      </div>
      <div class="grid gap-6 mb-6 md:grid-cols-3">
        <div>
          <input
            {...register("asstProjectManagerName", { required: true })}
            type="text"
            id="asstProjectManagerName"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Assistant Project Manager Name"
            required
          />
        </div>
        <div>
          <input
            type="Email"
            id="AsstProjectManagerEmail"
            {...register("AsstProjectManagerEmail", { required: true })}
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Email"
            required
          />
        </div>
        <div>
          <input
            {...register("asstProjectManagerPhone", { required: true })}
            type="text"
            id="asstProjectManagerPhone"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Phone"
            required
          />
        </div>
      </div>
      <div class="grid gap-6 mb-6 md:grid-cols-3">
        <div>
          <input
            {...register("leadSuperintendentName", { required: true })}
            type="text"
            id="leadSuperintendentName"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Lead Superintendent Name"
            required
          />
        </div>
        <div>
          <input
            type="Email"
            id="leadSuperintendentEamil"
            {...register("leadSuperintendentEamil", { required: true })}
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Email"
            required
          />
        </div>
        <div>
          <input
            {...register("leadSuperintendentPhone", { required: true })}
            type="text"
            id="leadSuperintendentPhone"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Phone"
            required
          />
        </div>
      </div>
      <div class="grid gap-6 mb-6 md:grid-cols-3">
        <div>
          <input
            {...register("superintendentName", { required: true })}
            type="text"
            id="superintendentName"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Superintendent Name"
            required
          />
        </div>
        <div>
          <input
            type="Email"
            id="superintendentEamil"
            {...register("superintendentEamil", { required: true })}
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Email"
            required
          />
        </div>
        <div>
          <input
            {...register("superintendentPhone", { required: true })}
            type="text"
            id="superintendentPhone"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Phone"
            required
          />
        </div>
      </div>
      <div className="divider"></div>
      <div class="grid gap-6 mb-6 md:grid-cols-3">
        <div>
          <input
            {...register("contractAmmount", { required: true })}
            type="text"
            id="contractAmmount"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Contract Ammount"
            required
          />
        </div>
        <div>
          <input
            type="date"
            id="projectStartDate"
            {...register("projectStartDate", { required: true })}
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Start Date"
            required
          />
        </div>
        <div>
          <input
            {...register("projectEndDate", { required: true })}
            type="date"
            id="projectEndDate"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Phone"
            required
          />
        </div>
      </div>
      <div class="grid gap-6 mb-6 md:grid-cols-3">
        <div>
          <label
            for="streetAdd1"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Is this is a prevaling wage project?
          </label>
          <select
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={prevaling}
            onChange={handleSelectPrevaling}
            {...register("isProjectPrevaling", { required: true })}
          >
            <option value="">Select an option</option>
            <option value="option1">Yess</option>
            <option value="option2">No</option>
          </select>
        </div>
        <div>
          <label
            for="streetAdd2"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Is this tax exempt project?
          </label>
          <select
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={tax}
            onChange={handleSelectTax}
            {...register("SelectedOptionsTax", { required: true })}
          >
            <option value="">Select an option</option>
            <option value="option1">Yess</option>
            <option value="option2">No</option>
          </select>
        </div>
        <div>
          <label
            for="city"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            FIle/Attachment
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
      </div>
    </div>
  );
};

export default ProjectFrom;
