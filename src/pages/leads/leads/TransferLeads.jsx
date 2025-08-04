import React, { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";

const TransferLeads = ({ onclose, bdNames, selectedLeads }) => {
  const [checkedLeads, setCheckedLeads] = useState([]);

  useEffect(() => {
    // Initially select all leads
    const leadIds = selectedLeads.map((lead) => lead.leadId);
    setCheckedLeads(leadIds);
  }, [selectedLeads]);

  const toggleCheckbox = (leadId) => {
    setCheckedLeads((prev) =>
      prev.includes(leadId)
        ? prev.filter((id) => id !== leadId)
        : [...prev, leadId]
    );
  };
  return (
    <div className="font-layout-font fixed inset-0 grid z-20 justify-center items-center backdrop-blur-xs">
      <div className="mx-2 p-4 shadow-lg dark:bg-popup-gray bg-layout-light dark:bg-layout-dark rounded-lg  relative">
        <div className="grid p-4 text-layout_text-light dark:text-layout_text-dark">
          <button
            onClick={onclose}
            className="place-self-end dark:bg-popup-gray bg-white dark:bg-layout-dark absolute rounded-full -top-5 -right-4 lg:shadow-md md:shadow-md shadow-none lg:py-3 md:py-3 py-0 lg:px-3 md:px-3 px-0"
          >
            <IoClose className="size-[24px]" />
          </button>

          <h1 className="text-center font-semibold text-xl py-2 mb-4 dark:text-white text-black">
            Transfer Leads
          </h1>

          <form className="grid grid-cols-1 sm:grid-cols-2 space-y-2 gap-4 dark:text-white text-black">
            <div className="col-span-2 flex gap-4">
              <label className="mb-2 block mt-2">Selected Leads</label>
              <div className="max-h-40 w-72 overflow-y-auto border border-[#454545] rounded-md p-2 space-y-1">
                {selectedLeads.map((lead) => (
                  <label key={lead.leadId} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      className="accent-blue-600"
                      checked={checkedLeads.includes(lead.leadId)}
                      onChange={() => toggleCheckbox(lead.leadId)}
                    />
                    <span>
                      {lead.name} ({lead.leadId})
                    </span>
                  </label>
                ))}
              </div>
            </div>

            <div className="flex col-span-2 gap-5 justify-between items-center">
              <label className="">BD Name</label>
              <select className="p-2 rounded-md w-72 bg-transparent border border-[#454545] text-black dark:text-white dark:bg-transparent">
                <option value="" className="text-black">
                  Select BD Name
                </option>
                {bdNames.map((name, index) => (
                  <option className="text-black" key={index} value={name}>
                    {name}
                  </option>
                ))}
              </select>
            </div>
          </form>
          <div className="w-full flex justify-end items-center gap-4 mt-4 mr-6 text-sm font-normal">
            <p
              onClick={onclose}
              className="cursor-pointer border border-select_layout-dark text-select_layout-dark px-6 py-1.5 rounded-sm"
            >
              Cancel
            </p>
            <p
              onClick={onclose}
              className="cursor-pointer bg-select_layout-dark dark:text-black text-white px-6 py-1.5 rounded-sm"
            >
              Save
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransferLeads;
