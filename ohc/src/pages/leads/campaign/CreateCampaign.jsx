import React from "react";
import { IoClose } from "react-icons/io5";

const CreateCampaign = ({ onclose }) => {
  return (
    <div className="font-layout-font fixed inset-0 grid z-20 justify-center items-center backdrop-blur-xs">
      <div className="mx-2 shadow-lg dark:bg-popup-gray bg-layout-light dark:bg-layout-dark rounded-lg drop-shadow-2xl border border-black lg:w-fit md:w-[500px] w-96 relative">
        <div className="grid p-4 text-layout_text-light dark:text-layout_text-dark">
          <button
            onClick={onclose}
            className="place-self-end dark:bg-popup-gray bg-white dark:bg-layout-dark absolute rounded-full -top-5 -right-4 lg:shadow-md md:shadow-md shadow-none lg:py-3 md:py-3 py-0 lg:px-3 md:px-3 px-0"
          >
            <IoClose className="size-[24px]" />
          </button>

          <h1 className="text-center font-semibold text-2xl py-2 mb-4">Create Campaign</h1>

          <form className="grid grid-cols-1 sm:grid-cols-2 space-y-2 gap-4">
            {/* Channel */}
            <div className="flex col-span-2 gap-5 justify-between">
              <label className="text-white font-medium">Channel</label>
              <input
                type="text"
                placeholder="Channel"
                className="p-2 rounded-md w-72 bg-transparent border border-gray-600 text-white"
              />
            </div>

            {/* Start Date */}
            <div className="flex col-span-2 gap-5 justify-between">
              <label className="text-white font-medium">Start Date</label>
              <input
                type="date"
                placeholder="Start Date"
                className="p-2 rounded-md w-72 bg-transparent border border-gray-600 text-white"
              />
            </div>

            {/* End Date */}
            <div className="flex col-span-2 gap-5 justify-between">
              <label className="text-white font-medium">End Date</label>
              <input
                type="date"
                placeholder="End Date"
                className="p-2 rounded-md w-72 bg-transparent border border-gray-600 text-white"
              />
            </div>

            {/* Budget */}
            <div className="flex col-span-2 gap-5 justify-between">
              <label className="text-white font-medium">Budget</label>
              <input
                type="text"
                placeholder="Budget"
                className="p-2 rounded-md w-72 bg-transparent border border-gray-600 text-white"
              />
            </div>

            {/* Leads */}
            <div className="flex col-span-2 gap-5 justify-between">
              <label className="text-white font-medium">Leads</label>
              <input
                type="text"
                placeholder="Leads"
                className="p-2 rounded-md w-72 bg-transparent border border-gray-600 text-white"
              />
            </div>

            {/* CPL */}
            <div className="flex col-span-2 gap-5 justify-between">
              <label className="text-white font-medium">CPL</label>
              <input
                type="text"
                placeholder="CPL"
                className="p-2 rounded-md w-72 bg-transparent border border-gray-600 text-white"
              />
            </div>

            {/* Link */}
            <div className="flex col-span-2 gap-5 justify-between">
              <label className="text-white font-medium">Link</label>
              <input
                type="text"
                placeholder="Link"
                className="p-2 rounded-md w-72 bg-transparent border border-gray-600 text-white"
              />
            </div>
          </form>

          {/* Buttons */}
          <div className="flex justify-end items-center gap-4 my-4 mx-6 text-sm font-normal">
            <p
              onClick={onclose}
              className="cursor-pointer border border-select_layout-dark text-select_layout-dark px-6 py-1.5 rounded-sm"
            >
              Cancel
            </p>
            <p className="cursor-pointer bg-select_layout-dark dark:text-black text-white px-6 py-1.5 rounded-sm">
              Send
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateCampaign;
