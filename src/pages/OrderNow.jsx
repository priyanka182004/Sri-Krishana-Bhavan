import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { FiAlertCircle } from "react-icons/fi";
import orderImg from "../assets/ordernow.jpg";

const OrderNow = () => {
  const [bulkData, setBulkData] = useState({
    fullName: "",
    emailAddress: "",
    mobileNumber: "",
    eventDate: "",
    eventName: "",
    numberOfGuests: "",
    menuOptions: "",
    specialRequests: "",
  });

  const [individualData, setIndividualData] = useState({
    name: "",
    emailAddress: "",
    mobileNumber: "",
    address: "",
    menuOptions: "",
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const bulkFormRef = useRef();
  const individualFormRef = useRef();

  // ---------------- BULK ORDER HANDLERS ----------------
  const handleBulkChange = (e) => {
    const { name, value } = e.target;
    setBulkData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateBulkForm = () => {
    const newErrors = {};
    if (!bulkData.fullName.trim()) newErrors.fullName = "Full name is required";
    if (!bulkData.emailAddress.trim())
      newErrors.emailAddress = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(bulkData.emailAddress))
      newErrors.emailAddress = "Invalid email format";
    if (!bulkData.mobileNumber.trim())
      newErrors.mobileNumber = "Mobile number is required";
    if (!bulkData.eventDate.trim())
      newErrors.eventDate = "Event date is required";
    if (!bulkData.eventName.trim())
      newErrors.eventName = "Event name/type is required";
    if (!bulkData.numberOfGuests.trim())
      newErrors.numberOfGuests = "Number of guests is required";
    if (!bulkData.menuOptions.trim())
      newErrors.menuOptions = "Please select menu options";
    return newErrors;
  };

  const handleBulkSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateBulkForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const emailParams = { ...bulkData, orderType: "Bulk Order" };

    try {
      await emailjs.send(
        "service_34e2hjj",
        "template_bulk_admin",
        emailParams,
        "LnXrETlkHrE3YNXHV"
      );

      await emailjs.send(
        "service_34e2hjj",
        "template_bulk_applicant",
        emailParams,
        "LnXrETlkHrE3YNXHV"
      );

      setSuccessMessage(
        `🎉 Thank you ${bulkData.fullName}! Your bulk order has been received successfully.`
      );

      setBulkData({
        fullName: "",
        emailAddress: "",
        mobileNumber: "",
        eventDate: "",
        eventName: "",
        numberOfGuests: "",
        menuOptions: "",
        specialRequests: "",
      });

      setTimeout(() => setSuccessMessage(""), 7000);
    } catch (error) {
      console.error("EmailJS Bulk Order Error:", error);
      setSuccessMessage("❌ Failed to send bulk order. Please try again later.");
    }
  };

  // ---------------- INDIVIDUAL ORDER HANDLERS ----------------
  const handleIndividualChange = (e) => {
    const { name, value } = e.target;
    setIndividualData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateIndividualForm = () => {
    const newErrors = {};
    if (!individualData.name.trim()) newErrors.name = "Name is required";
    if (!individualData.emailAddress.trim())
      newErrors.emailAddress = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(individualData.emailAddress))
      newErrors.emailAddress = "Invalid email format";
    if (!individualData.mobileNumber.trim())
      newErrors.mobileNumber = "Mobile number is required";
    if (!individualData.address.trim())
      newErrors.address = "Address is required";
    if (!individualData.menuOptions.trim())
      newErrors.menuOptions = "Please select menu options";
    return newErrors;
  };

  const handleIndividualSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateIndividualForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const emailParams = { ...individualData, orderType: "Individual Order" };

    try {
      await emailjs.send(
        "service_34e2hjj",
        "template_bulk_admin",
        emailParams,
        "LnXrETlkHrE3YNXHV"
      );

      await emailjs.send(
        "service_34e2hjj",
        "template_bulk_applicant",
        emailParams,
        "LnXrETlkHrE3YNXHV"
      );

      setSuccessMessage(
        `🎉 Thank you ${individualData.name}! Your individual order has been received successfully.`
      );

      setIndividualData({
        name: "",
        emailAddress: "",
        mobileNumber: "",
        address: "",
        menuOptions: "",
      });

      setTimeout(() => setSuccessMessage(""), 7000);
    } catch (error) {
      console.error("EmailJS Individual Order Error:", error);
      setSuccessMessage("❌ Failed to send order. Please try again later.");
    }
  };

  const inputClass =
    "w-full px-3 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-lime-400 shadow-md transition-all duration-300 text-sm";
  const errorClass = "border-red-500 bg-red-50";

  return (
    <section className="max-w-7xl mx-auto px-6 py-12 mt-20 font-sans space-y-20">
      {/* ---------- Top Section with Image and Text ---------- */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-10 mb-16">
        <div className="md:w-1/2 space-y-4">
          <h1 className="text-4xl md:text-5xl font-serif italic text-lime-700">
            Fresh Meals for Every Occasion 🍽️
          </h1>
          <p className="text-gray-700 leading-relaxed">
            Whether you’re hosting a grand celebration or simply craving a delightful meal for one,
            our vegetarian catering service ensures a perfect blend of taste, tradition, and
            freshness. From weddings to small gatherings, we bring{" "}
            <span className="text-lime-700 font-semibold">authentic flavors</span> to your plate
            with care.
          </p>
          <p className="text-gray-600">
            Choose between our <span className="font-semibold">Bulk Order</span> for 10+ guests or
            <span className="font-semibold"> Individual Order</span> for smaller needs below.
          </p>
        </div>

        <div className="md:w-1/2 w-full flex justify-center">
          <img
            src={orderImg}
            alt="Order Now"
            className="w-full h-auto max-h-[420px] object-cover rounded-3xl shadow-2xl border-2 border-lime-600 hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>

      {/* ---------- Both Forms Below (Flex Layout) ---------- */}
      <div className="flex flex-col md:flex-row items-start justify-center gap-12 md:gap-16">
        {/* ---------- Bulk Order Form ---------- */}
        <div
          ref={bulkFormRef}
          className="md:w-1/2 w-full bg-white shadow-xl rounded-3xl p-6 border-2 border-lime-700 hover:shadow-2xl transition-shadow duration-300"
        >
          <h2 className="text-2xl sm:text-3xl font-serif italic text-lime-700 mb-4 text-center">
            Bulk Order Form (10+ Guests)
          </h2>
          <form onSubmit={handleBulkSubmit} className="space-y-3">
            {/* Full Name & Email */}
            <div className="flex flex-col md:flex-row gap-3">
              <div className="flex-1">
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={bulkData.fullName}
                  onChange={handleBulkChange}
                  className={`${inputClass} ${
                    errors.fullName ? errorClass : "border-gray-300 bg-white"
                  }`}
                />
                {errors.fullName && (
                  <p className="text-red-600 text-xs mt-1 flex items-center gap-1">
                    <FiAlertCircle /> {errors.fullName}
                  </p>
                )}
              </div>
              <div className="flex-1">
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="emailAddress"
                  value={bulkData.emailAddress}
                  onChange={handleBulkChange}
                  className={`${inputClass} ${
                    errors.emailAddress ? errorClass : "border-gray-300 bg-white"
                  }`}
                />
                {errors.emailAddress && (
                  <p className="text-red-600 text-xs mt-1 flex items-center gap-1">
                    <FiAlertCircle /> {errors.emailAddress}
                  </p>
                )}
              </div>
            </div>

            {/* Mobile & Date */}
            <div className="flex flex-col md:flex-row gap-3">
              <div className="flex-1">
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Mobile Number *
                </label>
                <input
                  type="tel"
                  name="mobileNumber"
                  value={bulkData.mobileNumber}
                  onChange={handleBulkChange}
                  className={`${inputClass} ${
                    errors.mobileNumber ? errorClass : "border-gray-300 bg-white"
                  }`}
                />
                {errors.mobileNumber && (
                  <p className="text-red-600 text-xs mt-1 flex items-center gap-1">
                    <FiAlertCircle /> {errors.mobileNumber}
                  </p>
                )}
              </div>
              <div className="flex-1">
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Event Date *
                </label>
                <input
                  type="date"
                  name="eventDate"
                  value={bulkData.eventDate}
                  onChange={handleBulkChange}
                  className={`${inputClass} ${
                    errors.eventDate ? errorClass : "border-gray-300 bg-white"
                  }`}
                />
                {errors.eventDate && (
                  <p className="text-red-600 text-xs mt-1 flex items-center gap-1">
                    <FiAlertCircle /> {errors.eventDate}
                  </p>
                )}
              </div>
            </div>

            {/* Event Name */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Event Name / Type *
              </label>
              <input
                type="text"
                name="eventName"
                value={bulkData.eventName}
                onChange={handleBulkChange}
                className={`${inputClass} ${
                  errors.eventName ? errorClass : "border-gray-300 bg-white"
                }`}
                placeholder="e.g., Wedding, Corporate Lunch"
              />
              {errors.eventName && (
                <p className="text-red-600 text-xs mt-1 flex items-center gap-1">
                  <FiAlertCircle /> {errors.eventName}
                </p>
              )}
            </div>

            {/* Guests & Menu */}
            <div className="flex flex-col md:flex-row gap-3">
              <div className="flex-1">
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Number of Guests *
                </label>
                <input
                  type="number"
                  name="numberOfGuests"
                  value={bulkData.numberOfGuests}
                  onChange={handleBulkChange}
                  className={`${inputClass} ${
                    errors.numberOfGuests ? errorClass : "border-gray-300 bg-white"
                  }`}
                />
                {errors.numberOfGuests && (
                  <p className="text-red-600 text-xs mt-1 flex items-center gap-1">
                    <FiAlertCircle /> {errors.numberOfGuests}
                  </p>
                )}
              </div>
              <div className="flex-1">
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Menu Options *
                </label>
                <input
                  type="text"
                  name="menuOptions"
                  value={bulkData.menuOptions}
                  onChange={handleBulkChange}
                  className={`${inputClass} ${
                    errors.menuOptions ? errorClass : "border-gray-300 bg-white"
                  }`}
                  placeholder="e.g., Veg, Non-Veg, Special Dishes"
                />
                {errors.menuOptions && (
                  <p className="text-red-600 text-xs mt-1 flex items-center gap-1">
                    <FiAlertCircle /> {errors.menuOptions}
                  </p>
                )}
              </div>
            </div>

            {/* Special Requests */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Special Requests (Optional)
              </label>
              <textarea
                name="specialRequests"
                value={bulkData.specialRequests}
                onChange={handleBulkChange}
                className={`${inputClass} resize-none h-20`}
                placeholder="Any specific requirements..."
              />
            </div>

            <div className="flex justify-center mt-6">
              <button
                type="submit"
                className="bg-gradient-to-r from-lime-500 via-lime-600 to-lime-700 text-white py-2 px-6 rounded-2xl hover:scale-105 hover:shadow-md shadow-md transition-all duration-300 font-semibold"
              >
                Place Bulk Order
              </button>
            </div>
          </form>
        </div>

        {/* ---------- Individual / Limited Order ---------- */}
        <div
          ref={individualFormRef}
          className="md:w-1/2 w-full bg-white shadow-xl rounded-3xl p-6 border-2 border-lime-700 hover:shadow-2xl transition-shadow duration-300"
        >
          <h2 className="text-2xl sm:text-3xl font-serif italic text-lime-700 mb-4 text-center">
            Individual / Limited Order
          </h2>
          <form onSubmit={handleIndividualSubmit} className="space-y-3">
            <div className="flex flex-col md:flex-row gap-3">
              <div className="flex-1">
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={individualData.name}
                  onChange={handleIndividualChange}
                  className={`${inputClass} ${
                    errors.name ? errorClass : "border-gray-300 bg-white"
                  }`}
                />
                {errors.name && (
                  <p className="text-red-600 text-xs mt-1 flex items-center gap-1">
                    <FiAlertCircle /> {errors.name}
                  </p>
                )}
              </div>
              <div className="flex-1">
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="emailAddress"
                  value={individualData.emailAddress}
                  onChange={handleIndividualChange}
                  className={`${inputClass} ${
                    errors.emailAddress ? errorClass : "border-gray-300 bg-white"
                  }`}
                />
                {errors.emailAddress && (
                  <p className="text-red-600 text-xs mt-1 flex items-center gap-1">
                    <FiAlertCircle /> {errors.emailAddress}
                  </p>
                )}
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-3">
              <div className="flex-1">
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Mobile Number *
                </label>
                <input
                  type="tel"
                  name="mobileNumber"
                  value={individualData.mobileNumber}
                  onChange={handleIndividualChange}
                  className={`${inputClass} ${
                    errors.mobileNumber ? errorClass : "border-gray-300 bg-white"
                  }`}
                />
                {errors.mobileNumber && (
                  <p className="text-red-600 text-xs mt-1 flex items-center gap-1">
                    <FiAlertCircle /> {errors.mobileNumber}
                  </p>
                )}
              </div>
              <div className="flex-1">
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Address *
                </label>
                <input
                  type="text"
                  name="address"
                  value={individualData.address}
                  onChange={handleIndividualChange}
                  className={`${inputClass} ${
                    errors.address ? errorClass : "border-gray-300 bg-white"
                  }`}
                  placeholder="Street, City, Pincode"
                />
                {errors.address && (
                  <p className="text-red-600 text-xs mt-1 flex items-center gap-1">
                    <FiAlertCircle /> {errors.address}
                  </p>
                )}
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Menu Options *
              </label>
              <input
                type="text"
                name="menuOptions"
                value={individualData.menuOptions}
                onChange={handleIndividualChange}
                className={`${inputClass} ${
                  errors.menuOptions ? errorClass : "border-gray-300 bg-white"
                }`}
                placeholder="e.g., Veg, Non-Veg, Special Dishes"
              />
              {errors.menuOptions && (
                <p className="text-red-600 text-xs mt-1 flex items-center gap-1">
                  <FiAlertCircle /> {errors.menuOptions}
                </p>
              )}
            </div>

            <div className="flex justify-center mt-6">
              <button
                type="submit"
                className="bg-gradient-to-r from-lime-500 via-lime-600 to-lime-700 text-white py-2 px-6 rounded-2xl hover:scale-105 hover:shadow-md shadow-md transition-all duration-300 font-semibold"
              >
                Place Order
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Success Message */}
      {successMessage && (
        <p className="mt-6 text-center text-green-600 font-semibold text-sm animate-fadeIn">
          {successMessage}
        </p>
      )}
    </section>
  );
};

export default OrderNow;
