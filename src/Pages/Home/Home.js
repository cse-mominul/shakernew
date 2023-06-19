import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { IoIosRocket } from "react-icons/io";
import { AiFillCheckCircle } from "react-icons/ai";
import { AiFillClockCircle } from "react-icons/ai";
import { BsTools } from "react-icons/bs";
import { BsFillCalendarCheckFill } from "react-icons/bs";
const Home = () => {
  return (
    <div className="">
      <div className="px-6 py-12 text-center md:px-12 lg:text-left bg-[#3B71CA]">
        <div className="w-100 mx-auto sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="mt-12 lg:mt-0">
              <h1 className="mt-0 mb-16 text-5xl font-bold tracking-tight md:text-6xl xl:text-7xl text-[hsl(218,81%,95%)]">
                The best cleaning service <br />
                <span className="text-[hsl(218,81%,75%)]">for your place</span>
              </h1>
              <Link
                to="/login"
                className="mb-2 inline-block rounded bg-neutral-50 px-12 pt-4 pb-3.5 text-sm font-medium uppercase leading-normal text-neutral-800 shadow-[0_4px_9px_-4px_#cbcbcb] transition duration-150 ease-in-out hover:bg-neutral-100 hover:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] focus:bg-neutral-100 focus:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] focus:outline-none focus:ring-0 active:bg-neutral-200 active:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(251,251,251,0.3)] dark:hover:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] dark:focus:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] dark:active:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] md:mr-2 md:mb-0"
                data-te-ripple-init
                data-te-ripple-color="light"
                role="button"
              >
                Get started
              </Link>
            </div>
            <div className="mb-12 lg:mb-0">
              <img
                src="https://i.ibb.co/bvK1DTy/pexels-polina-tankilevitch-4440533.jpg"
                className="w-full rounded-lg shadow-lg dark:shadow-black/20"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <h3 className="text-3xl text-center mt-12">We are Herman Cleaners</h3>
        <h3 className="text-center text-gray-400 my-4">
          Lorem Ipsum is simply dummy text ofthe anadthe printing of typesetting{" "}
          <br />
          industrydummy texat the dummy text ofthe anadthe printing dummy
        </h3>
        <div className=" flex justify-center content-center">
          <img src="https://i.ibb.co/mSMJ0wW/image.png"></img>
        </div>
      </div>
      <div className="grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 pt-12 pb-12 lg:px-32">
        {/* Fast Service */}
        <div className="  h-56 bg-gray-300 bg-[#F8FAFC] transition duration-300 ease-in-out hover:shadow-lg dark:hover:shadow-black/30">
          <div className="flex">
            <div>
              <IoIosRocket className="text-rose-500 text-5xl mx-4 my-4"></IoIosRocket>
            </div>
            <div className="my-6">
              <h3 className="text-xl">First Service</h3>
            </div>
          </div>
          <h3 className="text-sm mx-4 text-gray-400 ">
            Loren ipsum dolor sitamet adipiscing elit sed do eiusmod ameth
          </h3>
          <button className="my-12 mx-6">Learn More</button>
        </div>
        {/* Secure Service */}
        <div className="  h-56 bg-gray-300 bg-[#F6F8FA] transition duration-300 ease-in-out hover:shadow-lg dark:hover:shadow-black/30">
          <div className="flex">
            <div>
              <AiFillCheckCircle className="text-rose-500 text-5xl mx-4 my-4"></AiFillCheckCircle>
            </div>
            <div className="my-6">
              <h3 className="text-xl">Secure Service</h3>
            </div>
          </div>
          <h3 className="text-sm mx-4 text-gray-400 ">
            Loren ipsum dolor sitamet adipiscing elit sed do eiusmod ameth
          </h3>
          <button className="my-12 mx-6">Learn More</button>
        </div>
        {/* 24/7 Support */}
        <div className="  h-56 bg-gray-300 bg-[#F8FAFC]transition duration-300 ease-in-out hover:shadow-lg dark:hover:shadow-black/30">
          <div className="flex">
            <div>
              <AiFillClockCircle className="text-rose-500 text-5xl mx-4 my-4"></AiFillClockCircle>
            </div>
            <div className="my-6">
              <h3 className="text-xl">24/7 Support</h3>
            </div>
          </div>
          <h3 className="text-sm mx-4 text-gray-400 ">
            Loren ipsum dolor sitamet adipiscing elit sed do eiusmod ameth
          </h3>
          <button className="my-12 mx-6">Learn More</button>
        </div>
        {/* Quality Tools */}
        <div className="  h-56 bg-gray-300 bg-[#F8FAFC] transition duration-300 ease-in-out hover:shadow-lg dark:hover:shadow-black/30">
          <div className="flex">
            <div>
              <BsTools className="text-rose-500 text-5xl mx-4 my-4"></BsTools>
            </div>
            <div className="my-6">
              <h3 className="text-xl">Quality Tools</h3>
            </div>
          </div>
          <h3 className="text-sm mx-4 text-gray-400 ">
            Loren ipsum dolor sitamet adipiscing elit sed do eiusmod ameth
          </h3>
          <button className="my-12 mx-6">Learn More</button>
        </div>
        {/* Full Support */}
        <div className="  h-56 bg-gray-300 bg-[#F8FAFC] transition duration-300 ease-in-out hover:shadow-lg dark:hover:shadow-black/30">
          <div className="flex">
            <div>
              <BsFillCalendarCheckFill className=" text-rose-500 text-5xl mx-4 my-4"></BsFillCalendarCheckFill>
            </div>
            <div className="my-6">
              <h3 className="text-xl">Full Support</h3>
            </div>
          </div>
          <h3 className="text-sm mx-4 text-gray-400 ">
            Loren ipsum dolor sitamet adipiscing elit sed do eiusmod ameth
          </h3>
          <button className="my-12 mx-6">Learn More</button>
        </div>
        {/* Full Support */}
        <div className="  h-56 bg-gray-300 bg-[#F8FAFC] transition duration-300 ease-in-out hover:shadow-lg dark:hover:shadow-black/30">
          <div className="flex">
            <div>
              <BsFillCalendarCheckFill className=" text-rose-500 text-5xl mx-4 my-4"></BsFillCalendarCheckFill>
            </div>
            <div className="my-6">
              <h3 className="text-xl">Full Support</h3>
            </div>
          </div>
          <h3 className="text-sm mx-4 text-gray-400 ">
            Loren ipsum dolor sitamet adipiscing elit sed do eiusmod ameth
          </h3>
          <button className="my-12 mx-6">Learn More</button>
        </div>
      </div>
      {/*  What Client Say*/}
      <div className="bg-[#F6F8FA]">
        <h3 className="text-3xl text-center mt-12 pt-6">
          About Herman Cleaners
        </h3>
        <h3 className="text-center text-gray-400 my-4">
          Lorem Ipsum is simply dummy text ofthe anadthe printing of typesetting{" "}
          <br />
          industrydummy texat the dummy text ofthe anadthe printing dummy
        </h3>
        <div className=" flex justify-center content-center">
          <img src="https://i.ibb.co/mSMJ0wW/image.png"></img>
        </div>
        {/* About Us */}
        <div class="px-6 py-12 text-center md:px-12 lg:text-left">
          <div class="w-100 mx-auto sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl xl:px-32">
            <div class="grid items-center lg:grid-cols-2">
              <div class="mb-12 md:mt-12 lg:mt-0 lg:mb-0">
                <div class="block rounded-lg bg-[hsla(0,0%,100%,0.55)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-[hsla(0,0%,5%,0.55)] dark:shadow-black/20 md:px-12 lg:-mr-14 backdrop-blur-[30px]">
                  <h1 class="mt-2 mb-6 text-xl text-rose-500 font-bold tracking-tight md:text-2xl xl:text-3xl">
                    About our company
                  </h1>
                  <p className="text-gray-500 text-sm">
                    Lorem Ipsum is simply dummy text ofthe anadthe printing of
                    typesetting industrydummy texat the dummy text ofthe anadthe
                    printing dummy Lorem Ipsum is simply dummy text ofthe
                    anadthe printing of typesetting industrydummy texat the
                    dummy text ofthe anadthe printing dummy Lorem Ipsum is
                    simply dummy text ofthe anadthe printing of typesetting
                    industrydummy texat the dummy text ofthe anadthe printing
                    dummy Lorem Ipsum is simply dummy text ofthe anadthe
                    printing of typesetting industrydummy texat the dummy text
                    ofthe anadthe printing dummy Lorem Ipsum is simply dummy
                    text ofthe anadthe printing of typesetting industrydummy
                    texat the dummy text ofthe anadthe printing dummy
                  </p>
                </div>
              </div>
              <div class="md:mb-12 lg:mb-0">
                <img
                  src="https://i.ibb.co/D4HYnCM/pleased-lovely-woman-holds-cleaning-set-different-services-dressed-speacial-uniform.jpg"
                  class="w-full rounded-lg shadow-lg dark:shadow-black/20"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        {/* What Clinet Say*/}
      </div>
      <div className="">
        <h3 className="text-3xl text-center mt-12 pt-6">What Client Say</h3>
        <h3 className="text-center text-gray-400 my-4">
          Lorem Ipsum is simply dummy text ofthe anadthe printing of typesetting{" "}
          <br />
          industrydummy texat the dummy text ofthe anadthe printing dummy
        </h3>
        <div className=" flex justify-center content-center">
          <img src="https://i.ibb.co/mSMJ0wW/image.png"></img>
        </div>

        {/* <!-- Container for the Testimonials --> */}
        <div class="grid gap-6 text-center my-12 md:grid-cols-3 lg:gap-12">
          {/* <!-- First Testimonial --> */}
          <div class="mb-12 md:mb-0">
            <div class="mb-6 flex justify-center">
              <img
                src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(1).jpg"
                class="w-32 rounded-full shadow-lg dark:shadow-black/30"
              />
            </div>
            <h5 class="mb-4 text-xl font-semibold">Maria Smantha</h5>
            <h6 class="mb-4 font-semibold text-rose-500 dark:text-primary-500">
              Web Developer
            </h6>
            <p class="mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                class="inline-block h-7 w-7 pr-2"
                viewBox="0 0 24 24"
              >
                <path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
              </svg>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos
              id officiis hic tenetur quae quaerat ad velit ab hic tenetur.
            </p>
          </div>

          {/* <!-- Second Testimonial --> */}
          <div class="mb-12 md:mb-0">
            <div class="mb-6 flex justify-center">
              <img
                src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(2).jpg"
                class="w-32 rounded-full shadow-lg dark:shadow-black/30"
              />
            </div>
            <h5 class="mb-4 text-xl font-semibold">Lisa Cudrow</h5>
            <h6 class="mb-4 font-semibold text-rose-500 dark:text-primary-500">
              Graphic Designer
            </h6>
            <p class="mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                class="inline-block h-7 w-7 pr-2"
                viewBox="0 0 24 24"
              >
                <path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
              </svg>
              Ut enim ad minima veniam, quis nostrum exercitationem ullam
              corporis suscipit laboriosam, nisi ut aliquid commodi.
            </p>
          </div>
          {/* <!-- THird Testimonial --> */}

          <div class="mb-12 md:mb-0">
            <div class="mb-6 flex justify-center">
              <img
                src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(1).jpg"
                class="w-32 rounded-full shadow-lg dark:shadow-black/30"
              />
            </div>
            <h5 class="mb-4 text-xl font-semibold">Maria Smantha</h5>
            <h6 class="mb-4 font-semibold text-rose-500 dark:text-rose-500">
              Web Developer
            </h6>
            <p class="mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                class="inline-block h-7 w-7 pr-2"
                viewBox="0 0 24 24"
              >
                <path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
              </svg>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos
              id officiis hic tenetur quae quaerat ad velit ab hic tenetur.
            </p>
          </div>
        </div>
      </div>
      {/* Our Special Plan */}
      <section>
        <h3 className="text-3xl text-center mt-12 pt-6">Our Special Plan</h3>
        <h3 className="text-center text-gray-400 my-4">
          Lorem Ipsum is simply dummy text ofthe anadthe printing of typesetting{" "}
          <br />
          industrydummy texat the dummy text ofthe anadthe printing dummy
        </h3>
        <div className=" flex justify-center content-center">
          <img src="https://i.ibb.co/mSMJ0wW/image.png"></img>
        </div>
        <div className="grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 pt-12 pb-12 lg:px-32">
          {/* COMMERCIAL PLAN */}
          <div class=" p-4 bg-[#3B71CA] hover:shadow-lg transition duration-500 ease-in-out hover:bg-rose-500 rounded-2xl dark:bg-gray-800">
            <div class="text-center text-white">
              <p class="mb-4 text-3xl font-medium">Commercial Plan</p>
              <div className=" flex gap-2 justify-center">
                <p class="flex flex-col text-5xl font-bold">$99</p>
                <span class="text-sm  font-thin text-right">month</span>
              </div>
            </div>
            <p class="mt-4 text-white text-md">Plan include :</p>
            <ul class="w-full mt-6 mb-6 text-sm text-white">
              <li class="mb-3 flex items-center ">
                <svg
                  class="w-6 h-6 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  width="6"
                  height="6"
                  stroke="currentColor"
                  fill="white"
                  viewBox="0 0 1792 1792"
                >
                  <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
                </svg>
                24/7 customer support
              </li>
              <li class="mb-3 flex items-center ">
                <svg
                  class="w-6 h-6 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  width="6"
                  height="6"
                  stroke="currentColor"
                  fill="white"
                  viewBox="0 0 1792 1792"
                >
                  <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
                </svg>
                Own custom Tailwind styles
              </li>
              <li class="mb-3 flex items-center ">
                <svg
                  class="w-6 h-6 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  width="6"
                  height="6"
                  stroke="currentColor"
                  fill="white"
                  viewBox="0 0 1792 1792"
                >
                  <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
                </svg>
                Unlimited Templates
              </li>
              <li class="mb-3 flex items-center ">
                <svg
                  class="w-6 h-6 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  width="6"
                  height="6"
                  stroke="currentColor"
                  fill="white"
                  viewBox="0 0 1792 1792"
                >
                  <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
                </svg>
                Free premium dashboard
              </li>

              <li class="mb-3 flex items-center opacity-50">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="6"
                  height="6"
                  class="w-6 h-6 mr-2"
                  fill="white"
                  viewBox="0 0 1792 1792"
                >
                  <path d="M1277 1122q0-26-19-45l-181-181 181-181q19-19 19-45 0-27-19-46l-90-90q-19-19-46-19-26 0-45 19l-181 181-181-181q-19-19-45-19-27 0-46 19l-90 90q-19 19-19 46 0 26 19 45l181 181-181 181q-19 19-19 45 0 27 19 46l90 90q19 19 46 19 26 0 45-19l181-181 181 181q19 19 45 19 27 0 46-19l90-90q19-19 19-46zm387-226q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
                </svg>
                My wife
              </li>
            </ul>
            <button
              type="button"
              class="w-full px-3 py-3 text-sm text-indigo-500 bg-white rounded-lg shadow hover:bg-gray-100 "
            >
              Choose plan
            </button>
          </div>
          {/* FLOORING PLAN */}
          <div class=" p-4 bg-[#3B71CA]  hover:shadow-lg transition duration-500 ease-in-out hover:bg-rose-500 rounded-2xl dark:bg-gray-800">
            <div class="text-center text-white">
              <p class="mb-4 text-3xl font-medium"> Flooring Plan</p>
              <div className=" flex gap-2 justify-center">
                <p class="flex flex-col text-5xl font-bold">$79</p>
                <span class="text-sm  font-thin text-right">month</span>
              </div>
            </div>
            <p class="mt-4 text-white text-md">Plan include :</p>
            <ul class="w-full mt-6 mb-6 text-sm text-white">
              <li class="mb-3 flex items-center ">
                <svg
                  class="w-6 h-6 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  width="6"
                  height="6"
                  stroke="currentColor"
                  fill="white"
                  viewBox="0 0 1792 1792"
                >
                  <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
                </svg>
                24/7 customer support
              </li>
              <li class="mb-3 flex items-center ">
                <svg
                  class="w-6 h-6 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  width="6"
                  height="6"
                  stroke="currentColor"
                  fill="white"
                  viewBox="0 0 1792 1792"
                >
                  <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
                </svg>
                Own custom Tailwind styles
              </li>
              <li class="mb-3 flex items-center ">
                <svg
                  class="w-6 h-6 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  width="6"
                  height="6"
                  stroke="currentColor"
                  fill="white"
                  viewBox="0 0 1792 1792"
                >
                  <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
                </svg>
                Unlimited Templates
              </li>
              <li class="mb-3 flex items-center ">
                <svg
                  class="w-6 h-6 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  width="6"
                  height="6"
                  stroke="currentColor"
                  fill="white"
                  viewBox="0 0 1792 1792"
                >
                  <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
                </svg>
                Free premium dashboard
              </li>

              <li class="mb-3 flex items-center opacity-50">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="6"
                  height="6"
                  class="w-6 h-6 mr-2"
                  fill="white"
                  viewBox="0 0 1792 1792"
                >
                  <path d="M1277 1122q0-26-19-45l-181-181 181-181q19-19 19-45 0-27-19-46l-90-90q-19-19-46-19-26 0-45 19l-181 181-181-181q-19-19-45-19-27 0-46 19l-90 90q-19 19-19 46 0 26 19 45l181 181-181 181q-19 19-19 45 0 27 19 46l90 90q19 19 46 19 26 0 45-19l181-181 181 181q19 19 45 19 27 0 46-19l90-90q19-19 19-46zm387-226q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
                </svg>
                My wife
              </li>
            </ul>
            <button
              type="button"
              class="w-full px-3 py-3 text-sm text-indigo-500 bg-white rounded-lg shadow hover:bg-gray-100 "
            >
              Choose plan
            </button>
          </div>
          {/* Exterior Plan*/}
          <div class=" p-4 bg-[#3B71CA] hover:shadow-lg transition duration-500 ease-in-out hover:bg-rose-500 rounded-2xl dark:bg-gray-800">
            <div class="text-center text-white">
              <p class="mb-4 text-3xl font-medium">Exterior Plan</p>
              <div className=" flex gap-2 justify-center">
                <p class="flex flex-col text-5xl font-bold">$129</p>
                <span class="text-sm  font-thin text-right">month</span>
              </div>
            </div>
            <p class="mt-4 text-white text-md">Plan include :</p>
            <ul class="w-full mt-6 mb-6 text-sm text-white">
              <li class="mb-3 flex items-center ">
                <svg
                  class="w-6 h-6 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  width="6"
                  height="6"
                  stroke="currentColor"
                  fill="white"
                  viewBox="0 0 1792 1792"
                >
                  <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
                </svg>
                24/7 customer support
              </li>
              <li class="mb-3 flex items-center ">
                <svg
                  class="w-6 h-6 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  width="6"
                  height="6"
                  stroke="currentColor"
                  fill="white"
                  viewBox="0 0 1792 1792"
                >
                  <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
                </svg>
                Own custom Tailwind styles
              </li>
              <li class="mb-3 flex items-center ">
                <svg
                  class="w-6 h-6 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  width="6"
                  height="6"
                  stroke="currentColor"
                  fill="white"
                  viewBox="0 0 1792 1792"
                >
                  <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
                </svg>
                Unlimited Templates
              </li>
              <li class="mb-3 flex items-center ">
                <svg
                  class="w-6 h-6 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  width="6"
                  height="6"
                  stroke="currentColor"
                  fill="white"
                  viewBox="0 0 1792 1792"
                >
                  <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
                </svg>
                Free premium dashboard
              </li>

              <li class="mb-3 flex items-center opacity-50">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="6"
                  height="6"
                  class="w-6 h-6 mr-2"
                  fill="white"
                  viewBox="0 0 1792 1792"
                >
                  <path d="M1277 1122q0-26-19-45l-181-181 181-181q19-19 19-45 0-27-19-46l-90-90q-19-19-46-19-26 0-45 19l-181 181-181-181q-19-19-45-19-27 0-46 19l-90 90q-19 19-19 46 0 26 19 45l181 181-181 181q-19 19-19 45 0 27 19 46l90 90q19 19 46 19 26 0 45-19l181-181 181 181q19 19 45 19 27 0 46-19l90-90q19-19 19-46zm387-226q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
                </svg>
                My wife
              </li>
            </ul>
            <button
              type="button"
              class="w-full px-3 py-3 text-sm text-indigo-500 bg-white rounded-lg shadow hover:bg-gray-100 "
            >
              Choose plan
            </button>
          </div>
        </div>
      </section>
      {/* Latest Project */}
      <section>
        <h3 className="text-3xl text-center mt-12 pt-6">Latest Project</h3>
        <h3 className="text-center text-gray-400 my-4">
          Lorem Ipsum is simply dummy text ofthe anadthe printing of typesetting{" "}
          <br />
          industrydummy texat the dummy text ofthe anadthe printing dummy
        </h3>
        <div className=" flex justify-center content-center">
          <img src="https://i.ibb.co/mSMJ0wW/image.png"></img>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-4 my-12 gap-4">
          <div class="grid gap-4">
            <div>
              <img
                class="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                class="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                class="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg"
                alt=""
              />
            </div>
          </div>
          <div class="grid gap-4">
            <div>
              <img
                class="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                class="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                class="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg"
                alt=""
              />
            </div>
          </div>
          <div class="grid gap-4">
            <div>
              <img
                class="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                class="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                class="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg"
                alt=""
              />
            </div>
          </div>
          <div class="grid gap-4">
            <div>
              <img
                class="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                class="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                class="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      {/*Our Expert  */}
      <section>
        <h3 className="text-3xl text-center mt-12 pt-6">Our Expert</h3>
        <h3 className="text-center text-gray-400 my-4">
          Lorem Ipsum is simply dummy text ofthe anadthe printing of typesetting{" "}
          <br />
          industrydummy texat the dummy text ofthe anadthe printing dummy
        </h3>
        <div className=" flex justify-center content-center">
          <img src="https://i.ibb.co/mSMJ0wW/image.png"></img>
        </div>
        <div className="flex flex-wrap justify-center items-center h-screen">
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 h-32 sm:h-48 md:h-64 lg:h-72 xl:h-96 bg-gray-300 m-4">
            Box 1
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 h-32 sm:h-48 md:h-64 lg:h-72 xl:h-96 bg-gray-300 m-4">
            Box 2
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
