import React, { useRef, useState } from "react";
import { BsFillClipboardFill } from "react-icons/bs";
import { BsFillXCircleFill } from "react-icons/bs";
const ProjectFrom = (props) => {
  const { register, isVisible } = props;

  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const [prevaling, setPrevaling] = useState("");

  const handleSelectPrevaling = (event) => {
    setPrevaling(event.target.value);
  };

  const [taxExempt, setTaxExempt] = useState("");

  const handleTax = (event) => {
    setTaxExempt(event.target.value);
  };

  const [files, setFiles] = useState(null);
  const inputRef = useRef();
  const maxSize = 1 * 1024 * 1024; // 1MB (example size)

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const droppedFiles = event.dataTransfer.files;
    validateAndSetFiles(droppedFiles);
  };

  const handleFileSelect = (event) => {
    const selectedFiles = event.target.files;
    validateAndSetFiles(selectedFiles);
  };
  const handleDelete = (file) => {
    const updatedFiles = files.filter((f) => f !== file);
    setFiles(updatedFiles);
  };

  const validateAndSetFiles = (selectedFiles) => {
    const fileList = Array.from(selectedFiles);

    // Perform size validation
    const validFiles = fileList.filter((file) => file.size <= maxSize);

    // Update state with valid files
    setFiles(validFiles.length > 0 ? validFiles : null);
  };

  // send files to the server // learn from my other video
  const handleUpload = () => {
    const formData = new FormData();
    formData.append("Files", files);

    if (files && files.length > 0) {
      // Iterate over the files and process them
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const reader = new FileReader();

        reader.onload = (event) => {
          // Get the file content
          const fileContent = event.target.result;
          // Perform any necessary operations with the file content
          console.log(file.name, fileContent);
          // You can send the file content to the server here
        };

        // Read the file as text or perform other read operations based on your requirement
        reader.readAsText(file);
      }
    }
    // Console log the files
    for (let file of formData.entries()) {
      console.log(file);
    }

    // // Send the files to the server
    // fetch("/data.json", {
    //   method: "POST",
    //   body: formData,
    // });
  };
  return (
    <div className="my-6 mx-12">
      <div className="py-4">
        <p className="px-4 text-red-500 text-xl">#New Project</p>
      </div>
      <div className="mb-6 relative my-6">
        <input
          {...register("ProjectName", { required: isVisible })}
          type="Text"
          id="ProjectName"
          className="block px-2.5 pb-2.5 border pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder="Project Name"
          required
        />
        <label
          for="floating_outlined"
          class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
        >
          Project Name
        </label>
      </div>

      <div class="grid gap-6 mb-6 md:grid-cols-2">
        <div className="relative">
          <input
            {...register("projectStreetAdd1", { required: isVisible })}
            type="text"
            id="projectStreetAdd1"
            className="block px-2.5 pb-2.5 border pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder="Street Address 1"
            required
          />
          <label
            for="floating_outlined"
            class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
          >
            Street Address 1
          </label>
        </div>
        <div className="relative">
          <input
            type="text"
            id="projectStreetAdd2"
            {...register("projectStreetAdd2", { required: isVisible })}
            className="block px-2.5 pb-2.5 border pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder="Street Address 2"
            required
          />
          <label
            for="floating_outlined"
            class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
          >
            Street Address 2
          </label>
        </div>
        <div className="relative">
          <input
            {...register("ProjectCity", { required: isVisible })}
            type="text"
            id="ProjectCity"
            className="block px-2.5 pb-2.5 border pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder="City"
            required
          />
          <label
            for="floating_outlined"
            class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
          >
            City
          </label>
        </div>
        <div className="relative">
          <input
            {...register("projectStage", { required: isVisible })}
            type="text"
            id="Stage"
            className="block px-2.5 pb-2.5 border pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder="Stage"
            required
          />
          <label
            for="floating_outlined"
            class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
          >
            Stage
          </label>
        </div>
      </div>
      <div class="grid gap-6 mb-6 md:grid-cols-2">
        <div className="relative">
          <input
            {...register("projectZipCode", { required: isVisible })}
            type="text"
            id="projectZipCode"
            className="block px-2.5 pb-2.5 border pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder="Zip Code"
            required
          />
          <label
            for="floating_outlined"
            class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
          >
            Zip Code
          </label>
        </div>
        <div className="relative">
          <input
            type="text"
            id="projectCountry"
            {...register("projectCountry", { required: isVisible })}
            className="block px-2.5 pb-2.5 border pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder="Country"
            required
          />
          <label
            for="floating_outlined"
            class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
          >
            Country
          </label>
        </div>
        <div>
          <select
            {...register("SelectType", { required: isVisible })}
            className="block px-2.5 pb-2.5 border pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            value={selectedOption}
            onChange={handleOptionChange}
          >
            <option value="">Select type</option>
            <option value="option1">New building</option>
            <option value="option2">Remodeling</option>
            <option value="option3">Expansion </option>
          </select>
        </div>
        <div className="relative">
          <input
            {...register("projectSQFT", { required: isVisible })}
            type="text"
            id="projectSQFT"
            className="block px-2.5 pb-2.5 border pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder="Size in SQFT"
            required
          />
          <label
            for="floating_outlined"
            class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
          >
            Size in SQFT
          </label>
        </div>
      </div>
      <div className="divider"></div>
      <h1 className="py-4 text-rose-500 px-4">Management Team</h1>
      <div class="grid gap-6 mb-6 md:grid-cols-3">
        <div className="relative">
          <input
            {...register("projectManagerName", { required: isVisible })}
            type="text"
            id="projectManagerName"
            className="block px-2.5 pb-2.5 border pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder="Project Manager Name"
            required
          />
          <label
            for="floating_outlined"
            class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
          >
            Project Manager Name
          </label>
        </div>
        <div className="relative">
          <input
            type="Email"
            id="projectManagerEmail"
            {...register("projectManagerEmail", { required: isVisible })}
            className="block px-2.5 pb-2.5 border pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder="Email"
            required
          />
          <label
            for="floating_outlined"
            class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
          >
            Project Manager Email
          </label>
        </div>
        <div className="relative">
          <input
            {...register("ProjectManagerPhone", { required: isVisible })}
            type="text"
            id="ProjectManagerPhone"
            className="block px-2.5 pb-2.5 border pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder="Phone"
            required
          />
          <label
            for="floating_outlined"
            class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
          >
            Project Manager Phone
          </label>
        </div>
      </div>
      <div class="grid gap-6 mb-6 md:grid-cols-3">
        <div className="relative">
          <input
            {...register("asstProjectManagerName", { required: isVisible })}
            type="text"
            id="asstProjectManagerName"
            className="block px-2.5 pb-2.5 border pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder="Name"
            required
          />
          <label
            for="floating_outlined"
            class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
          >
            Assistant Project Manager Name
          </label>
        </div>
        <div className="relative">
          <input
            type="Email"
            id="AsstProjectManagerEmail"
            {...register("AsstProjectManagerEmail", { required: isVisible })}
            className="block px-2.5 pb-2.5 border pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder="Email"
            required
          />
          <label
            for="floating_outlined"
            class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
          >
            Assistant Project Manager Email
          </label>
        </div>
        <div className="relative">
          <input
            {...register("asstProjectManagerPhone", { required: isVisible })}
            type="text"
            id="asstProjectManagerPhone"
            className="block px-2.5 pb-2.5 border pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder="Phone"
            required
          />
          <label
            for="floating_outlined"
            class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
          >
            Assistant Project Manager Phone
          </label>
        </div>
      </div>
      <div class="grid gap-6 mb-6 md:grid-cols-3">
        <div className="relative">
          <input
            {...register("leadSuperintendentName", { required: isVisible })}
            type="text"
            id="leadSuperintendentName"
            className="block px-2.5 pb-2.5 border pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder="Name"
            required
          />
          <label
            for="floating_outlined"
            class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
          >
            Lead Super Intendent Name
          </label>
        </div>
        <div className="relative">
          <input
            type="Email"
            id="leadSuperintendentEamil"
            {...register("leadSuperintendentEamil", { required: isVisible })}
            className="block px-2.5 pb-2.5 border pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder="Email"
            required
          />
          <label
            for="floating_outlined"
            class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
          >
            Lead Super Intendent Email
          </label>
        </div>
        <div className="relative">
          <input
            {...register("leadSuperintendentPhone", { required: isVisible })}
            type="text"
            id="leadSuperintendentPhone"
            className="block px-2.5 pb-2.5 border pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder="Phone"
            required
          />
          <label
            for="floating_outlined"
            class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
          >
            Lead Super Intendent Phone
          </label>
        </div>
      </div>
      <div class="grid gap-6 mb-6 md:grid-cols-3">
        <div className="relative">
          <input
            {...register("superintendentName", { required: isVisible })}
            type="text"
            id="superintendentName"
            className="block px-2.5 pb-2.5 border pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder="Name"
            required
          />
          <label
            for="floating_outlined"
            className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
          >
            Superintendent Name
          </label>
        </div>
        <div className="relative">
          <input
            type="Email"
            id="superintendentEamil"
            {...register("superintendentEamil", { required: isVisible })}
            className="block px-2.5 pb-2.5 border pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder="Email"
            required
          />
          <label
            for="floating_outlined"
            className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
          >
            Superintendent Email
          </label>
        </div>
        <div className="relative">
          <input
            {...register("superintendentPhone", { required: isVisible })}
            type="text"
            id="superintendentPhone"
            className="block px-2.5 pb-2.5 border pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder="Phone"
            required
          />
          <label
            for="floating_outlined"
            className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
          >
            Superintendent Phone
          </label>
        </div>
      </div>
      <div className="divider"></div>
      <div class="grid gap-6 mb-6 md:grid-cols-3">
        <div className="relative">
          <input
            {...register("contractAmmount", { required: isVisible })}
            type="text"
            id="contractAmmount"
            className="block px-2.5 pb-2.5 border pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder="Contract Ammount"
            required
          />
          <label
            for="floating_outlined"
            className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
          >
            Contract Ammount
          </label>
        </div>
        <div className="relative mb-3">
          <input
            {...register("projectStartDate", { required: isVisible })}
            type="date"
            className="block px-2.5 pb-2.5 border pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder="Select a date"
          />
          <label
            for="floating_outlined"
            class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
          >
            Start Date
          </label>
        </div>
        <div className="relative">
          <input
            {...register("projectEndDate", { required: isVisible })}
            type="date"
            className="block px-2.5 pb-2.5 border pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder="Select a date"
          />
          <label
            for="floating_outlined"
            class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
          >
            End Date
          </label>
        </div>
      </div>
      <div class="grid gap-6 mb-6 md:grid-cols-3">
        <div>
          <label
            for="prevaling"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Is this is a prevaling wage project?
          </label>
          <select
            {...register("prevaling", { required: isVisible })}
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={prevaling}
            onChange={handleSelectPrevaling}
          >
            <option value="">Select type</option>
            <option value="option1">Yess</option>
            <option value="option2">No</option>
          </select>
        </div>
        <div>
          <label
            for="taxExempt"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Is this tax exempt project?
          </label>
          <select
            {...register("SelectedOptionsTax", { required: isVisible })}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={taxExempt}
            onChange={handleTax}
          >
            <option value="">Select an option</option>
            <option value="option1">Yess</option>
            <option value="option2">No</option>
          </select>
        </div>
      </div>

      {/* Attatch FIle */}

      <div class="flex items-center justify-center w-full">
        <label
          for="dropzone-file"
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
        >
          <div
            type="file"
            multiple
            onChange={handleFileSelect}
            hidden
            accept=".jpg, .jpeg, .png, application/pdf" // Restrict to images and PDFs
            ref={inputRef}
            className="flex flex-col items-center justify-center pt-5 pb-6"
          >
            <svg
              aria-hidden="true"
              class="w-10 h-10 mb-3 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
              ></path>
            </svg>
            <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
              <span class="font-semibold">Click to upload</span> or drag and
              drop
            </p>
            <p class="text-xs text-gray-500 dark:text-gray-400">
              PNG, JPG or PDF (MAX. 2 mb)
            </p>
          </div>
          <input
            id="dropzone-file"
            type="file"
            multiple
            onChange={handleFileSelect}
            hidden
            accept=".jpg, .jpeg, .png, application/pdf" // Restrict to images and PDFs
            ref={inputRef}
          />
        </label>
      </div>
      <>
        {files && files.length > 0 && (
          <div className="uploads">
            <ul>
              {files.map((file, idx) => (
                <li key={idx}>
                  <div className=" bg-rose-500">
                    <div className="flex my-12 justify-between">
                      <div className="flex gap-4 justify-left mx-12">
                        <BsFillClipboardFill className="mt-5 mx-2 text-3xl text-white"></BsFillClipboardFill>
                        <div>
                          <p className="mt-4 mx-2 text-white">{file.name}</p>
                          <p className="text-white text-sm mb-2">
                            Size:{file.size / 1000} KB
                          </p>
                        </div>
                      </div>
                      <BsFillXCircleFill
                        className="text-white mx-4 text-3xl my-4"
                        onClick={() => handleDelete(file)}
                      >
                        Delete
                      </BsFillXCircleFill>
                    </div>
                  </div>

                  {file.size > maxSize && (
                    <span className="warning">
                      File size exceeds the limit.
                    </span>
                  )}
                </li>
              ))}
            </ul>
            <div className="actions flex justify-end gap-4">
              <button
                className="bg-rose-500 text-white active:bg-rose-500 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                onClick={() => setFiles(null)}
              >
                Cancel
              </button>
              <button
                className="bg-blue-700 text-white active:bg-rose-500 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                onClick={handleUpload}
              >
                Upload
              </button>
            </div>
          </div>
        )}
      </>
    </div>
  );
};

export default ProjectFrom;
