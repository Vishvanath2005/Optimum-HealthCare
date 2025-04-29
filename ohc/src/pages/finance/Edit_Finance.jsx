import React from "react";
import { IoClose } from "react-icons/io5";

const Edit_Finance = ({ onClose, data }) => {
  // State to manage form inputs
  const [formData, setFormData] = React.useState({
    name: data?.name || "",
    phoneNumber: data?.phoneNumber || "",
    doctor: data?.doctor || "",
    particles: data?.particles || "",
    amount: data?.amount || "",
    paymentMethod: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div>
      <div className="font-layout-font fixed inset-0 flex justify-center items-center backdrop-blur-sm z-10">
        <div className="dark:bg-layout-dark bg-layout-light rounded-lg drop-shadow-md dark:text-white w-fit h-fit p-6">
          {/* Close Button */}
          <p
            className="absolute top-4 right-4 cursor-pointer dark:bg-layout-dark bg-layout-light shadow-sm py-2 px-2 rounded-full"
            onClick={onClose}
          >
            <IoClose className="size-[20px]" />
          </p>

          {/* Modal Header */}
          <div className="text-center mb-4">
            <h2 className="text-xl font-semibold">Edit Finance</h2>
          </div>

          {/* Form */}
          <form className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4">
            {/* Name */}
            <div className="col-span-2 flex justify-between items-center">
              <label
                htmlFor="name"
                className="block col-span-1 text-white font-medium mb-1"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter Name"
                className="w-52 col-span-1 p-2 rounded-md bg-transparent border border-gray-600 text-white"
              />
            </div>

            {/* Phone Number */}
            <div className="sm:col-span-2 flex justify-between items-center">
              <label
                htmlFor="phoneNumber"
                className="block col-span-1 text-white font-medium mb-1"
              >
                Phone Number
              </label>
              <input
                type="text"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                placeholder="Enter Phone Number"
                className="w-52 col-span-1 p-2 rounded-md bg-transparent border border-gray-600 text-white"
              />
            </div>

            {/* Doctor */}
            <div className="sm:col-span-2 flex justify-between items-center">
              <label
                htmlFor="doctor"
                className="block col-span-1 text-white font-medium mb-1"
              >
                Doctor
              </label>
              <input
                type="text"
                id="doctor"
                name="doctor"
                value={formData.doctor}
                onChange={handleChange}
                placeholder="Enter Doctor"
                className="w-52 col-span-1 p-2 rounded-md bg-transparent border border-gray-600 text-white"
              />
            </div>

            {/* Particles */}
            <div className="sm:col-span-2 flex justify-between items-center">
              <label
                htmlFor="particles"
                className="block col-span-1 text-white font-medium mb-1"
              >
                Particles
              </label>
              <input
                type="text"
                id="particles"
                name="particles"
                value={formData.particles}
                onChange={handleChange}
                placeholder="Enter Particles"
                className="w-52 col-span-1 p-2 rounded-md bg-transparent border border-gray-600 text-white"
              />
            </div>

            {/* Amount */}
            <div className="sm:col-span-2 flex justify-between items-center">
              <label
                htmlFor="amount"
                className="block col-span-1 text-white font-medium mb-1"
              >
                Amount
              </label>
              <input
                type="text"
                id="amount"
                name="amount"
                value={formData.amount}
                onChange={handleChange}
                placeholder="Enter Amount"
                className="w-52 col-span-1 p-2 rounded-md bg-transparent border border-gray-600 text-white"
              />
            </div>

            {/* Payment Method */}
            <div className="sm:col-span-2 flex gap-5 justify-between items-center">
              <label
                htmlFor="paymentMethod"
                className="block col-span-1 text-white font-medium mb-1"
              >
                Payment Method
              </label>
              <input
                type="text"
                id="paymentMethod"
                name="paymentMethod"
                value={formData.paymentMethod}
                onChange={handleChange}
                placeholder="Enter Payment Method"
                className="w-52 col-span-1 p-2 rounded-md bg-transparent border border-gray-600 text-white"
              />
            </div>
          </form>

          {/* Buttons */}
          <div className="flex justify-end mt-4 gap-4">
            <button
              className="border-purple-600 border hover:bg-purple-600 hover:text-white text-purple-500 px-4 py-2 rounded-md"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              className="bg-purple-700 hover:bg-purple-800 text-white px-4 py-2 rounded-md"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Edit_Finance;