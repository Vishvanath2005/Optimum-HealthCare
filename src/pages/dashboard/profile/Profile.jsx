import React, { useState } from "react";
import NavBar from "../../../component/NavBar";
import { profiledetailsData } from "../../../component/Data";
import { ClipboardPenLine, Pencil } from "lucide-react";
import profile from "../../../assets/images/profile.jpg";
import Apply_Leave from "./Apply_Leave";
import Edit_Profile from "./Edit_Profile";
const Profile = () => {
  const [apply_Leave, setApplyLeave] = useState(false);
  const [editprofile, setEditprofile] = useState(false);

  const profileFields = [
    { label: "Employee ID", key: "employeeId" },
    { label: "Name", key: "name" },
    { label: "Designation", key: "designation" },
    { label: "Gender", key: "gender" },
    { label: "Date of Birth", key: "dateOfBirth" },
    { label: "Mobile Number", key: "mobileNumber" },
    { label: "Email ID", key: "emailId" },
    { label: "Joining Date", key: "joiningDate" },
    { label: "Language", key: "language" },
    { label: "Reporting Person", key: "reportingPerson" },
    { label: "Address", key: "address" },
  ];

  const leaves = [
    {
      sno: 1,
      dateApplied: "12 Aug 2025",
      leaveType: "Sick",
      duration: "2 Days",
      reason: "Fever",
      status: "Approved",
    },
    {
      sno: 2,
      dateApplied: "12 Aug 2025",
      leaveType: "Sick",
      duration: "2 Days",
      reason: "Fever",
      status: "Approved",
    },
  ];

  return (
    <div>
      <NavBar title="Dashboard" pagetitle="Profile" />
      <div className="justify-end flex mx-2">
        <p
        onClick={()=>{setApplyLeave(true)}} 
        className="cursor-pointer w-fit flex items-center  text-white gap-2 bg-select_layout-dark px-4 py-2 text-sm rounded-md">
          <ClipboardPenLine size={18} />
          Apply Leave
        </p>
      </div>
      <div className="lg:grid grid-cols-12 flex flex-col gap-3 py-3">
        <div className="lg:col-span-5 flex flex-col gap-3  rounded-lg text-white">
          <div className="flex justify-between lg:mb-2  dark:bg-layout-dark bg-layout-light text-black dark:text-white rounded-lg p-4">
            <div className="flex items-center gap-4 ">
              <img className=" w-24 h-24 rounded-md border border-gray-500" src={profile} alt="" />
              <span>
                <p className="font-bold text-xl">Name</p>
                <p className="text-sm">
                  Designation: <span className="text-gray-500">Doctor</span>
                </p>
                <p className="text-sm">
                  Login: <span className="text-gray-500">9:30am</span>
                </p>
              </span>
            </div>
            <div className="p-2"onClick={()=>{setEditprofile(true)}}>
              <Pencil size={16} />
            </div>
          </div>
          <div className="dark:bg-layout-dark bg-layout-light text-black dark:text-white rounded-lg p-6">
            <p className="text-lg font-semibold pb-6">Profile info</p>
            <div className="grid grid-cols-2 gap-y-4 gap-x-12">
              {profileFields.map(({ label, key }) => (
                <React.Fragment key={key}>
                  <div className="col-span-1">
                    <p className="text-sm font-semibold">{label}</p>
                  </div>
                  <div className="col-span-1 text-end">
                    <p className="text-sm text-gray-500">
                      {profiledetailsData[key] || "—"}
                    </p>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
        <div className="lg:col-span-7 md:grid-cols-1 dark:bg-layout-dark bg-layout-light h-fit p-4 rounded-xl dark:text-white text-black">
          <p className="text-xl font-semibold pb-3"> My Leaves</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="dark:bg-overall_bg-dark bg-overall_bg-light border-b-2 pb-2 dark:border-layout-dark border-layout-light ">
                  <th className="px-2 py-3  rounded-l-md">S.No</th>
                  <th className="p-2">Date Applied</th>
                  <th className="p-2">Leave Type</th>
                  <th className="p-2">Duration</th>
                  <th className="p-2">Reason</th>
                  <th className="p-2 rounded-r-md">Status</th>
                </tr>
              </thead>
              <tbody>
                {leaves.map((leave, idx) => (
                  <tr
                    key={idx}
                    className="dark:bg-overall_bg-dark bg-overall_bg-light border-b-2 dark:border-layout-dark border-layout-light rounded-lg text-center"
                  >
                    <td className="px-2 py-3 text-sm rounded-l-md">
                      {leave.sno}
                    </td>
                    <td className="p-2">{leave.dateApplied}</td>
                    <td className="p-2">{leave.leaveType}</td>
                    <td className="p-2">{leave.duration}</td>
                    <td className="p-2">{leave.reason}</td>
                    <td className="p-2 text-sm w-32 px-5 items-center rounded-r-md">
                      <p className="border w-28 dark:bg-layout-dark bg-layout-light text-gray-600 dark:text-white font-medium  dark:border-layout-dark border-layout-light rounded-md py-1">
                        {leave.status}
                      </p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {apply_Leave && (<Apply_Leave onclose={()=>{setApplyLeave(false)}}/>)}
      {editprofile && (<Edit_Profile onclose={()=>{setEditprofile(false)}}/>)}
    </div>
  );
};

export default Profile;
