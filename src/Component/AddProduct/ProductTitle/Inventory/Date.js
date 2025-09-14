import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const DatePicker = () => {
  const [datePickerOpen, setDatePickerOpen] = useState(false);
  const [datePickerValue, setDatePickerValue] = useState('');
  const [datePickerMonth, setDatePickerMonth] = useState(0);
  const [datePickerYear, setDatePickerYear] = useState(0);
  const [datePickerDay, setDatePickerDay] = useState(0);
  const [datePickerDaysInMonth, setDatePickerDaysInMonth] = useState([]);
  const [datePickerBlankDaysInMonth, setDatePickerBlankDaysInMonth] = useState(
    []
  );

  const datePickerMonthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const datePickerDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const datePickerInputRef = useRef();

  const formatDate = (date) => {
    const formattedDate = ('0' + date.getDate()).slice(-2);
    const monthShortName = datePickerMonthNames[date.getMonth()].substring(
      0,
      3
    );
    const year = date.getFullYear();
    return `${monthShortName} ${formattedDate}, ${year}`;
  };

  const calculateDaysInMonth = (month, year) => {
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const dayOfWeek = new Date(year, month).getDay();
    setDatePickerBlankDaysInMonth(
      Array.from({ length: dayOfWeek }, (_, i) => i + 1)
    );
    setDatePickerDaysInMonth(
      Array.from({ length: daysInMonth }, (_, i) => i + 1)
    );
  };

  const handleDayClick = (day) => {
    const selectedDate = new Date(datePickerYear, datePickerMonth, day);
    const today = new Date();

    // Check if the selected date is in the past
    if (selectedDate < today) {
      return; // Do nothing if the date is in the past
    }

    setDatePickerDay(day);
    setDatePickerValue(formatDate(selectedDate));
    setDatePickerOpen(false);
  };

  const previousMonth = () => {
    let newMonth = datePickerMonth - 1;
    let newYear = datePickerYear;
    if (newMonth < 0) {
      newMonth = 11;
      newYear -= 1;
    }
    setDatePickerMonth(newMonth);
    setDatePickerYear(newYear);
    calculateDaysInMonth(newMonth, newYear);
  };

  const nextMonth = () => {
    let newMonth = datePickerMonth + 1;
    let newYear = datePickerYear;
    if (newMonth > 11) {
      newMonth = 0;
      newYear += 1;
    }
    setDatePickerMonth(newMonth);
    setDatePickerYear(newYear);
    calculateDaysInMonth(newMonth, newYear);
  };

  const isSelectedDate = (day) => {
    const date = new Date(datePickerYear, datePickerMonth, day);
    return datePickerValue === formatDate(date);
  };

  const isToday = (day) => {
    const today = new Date();
    const date = new Date(datePickerYear, datePickerMonth, day);
    return today.toDateString() === date.toDateString();
  };

  useEffect(() => {
    const currentDate = new Date();
    const month = currentDate.getMonth();
    const year = currentDate.getFullYear();
    setDatePickerMonth(month);
    setDatePickerYear(year);
    setDatePickerDay(currentDate.getDate());
    setDatePickerValue(formatDate(currentDate));
    calculateDaysInMonth(month, year);
  }, []);

  return (
    <div>
      <div className="w-full mb-5">
        <div className="relative max-w-[17rem]">
          <input
            ref={datePickerInputRef}
            type="text"
            onClick={() => setDatePickerOpen(!datePickerOpen)}
            value={datePickerValue}
            onKeyDown={(e) => e.key === 'Escape' && setDatePickerOpen(false)}
            className="flex w-full h-10 px-3 py-2 text-sm bg-white border rounded-md text-neutral-600 border-neutral-300 ring-offset-background placeholder:text-neutral-400 focus:border-neutral-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-400 disabled:cursor-not-allowed disabled:opacity-50"
            placeholder="Select date"
            readOnly
          />
          <div
            onClick={() => {
              setDatePickerOpen(!datePickerOpen);
              if (datePickerOpen) datePickerInputRef.current.focus();
            }}
            className="absolute top-0 right-0 px-3 py-2 cursor-pointer text-neutral-400 hover:text-neutral-500"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
          <div className="absolute bottom-11 right-0  overflow-hidden">
            {datePickerOpen && (
              <motion.div
                initial={{ y: 100, opacity: 0 }} // Starting state
                animate={{ y: 0, opacity: 1 }} // Target state
                transition={{ duration: 0.3 }} // Duration of the transition
                onClick={(e) => e.stopPropagation()}
                className="max-w-lg p-4 antialiased bg-white border rounded-lg shadow w-[17rem] border-neutral-200/70"
              >
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <span className="text-lg font-bold text-gray-800">
                      {datePickerMonthNames[datePickerMonth]}
                    </span>
                    <span className="ml-1 text-lg font-normal text-gray-600">
                      {datePickerYear}
                    </span>
                  </div>
                  <div>
                    <button
                      onClick={previousMonth}
                      type="button"
                      className="inline-flex p-1 transition duration-100 ease-in-out rounded-full cursor-pointer focus:outline-none focus:shadow-outline hover:bg-gray-100"
                    >
                      <svg
                        className="inline-flex w-6 h-6 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 19l-7-7 7-7"
                        />
                      </svg>
                    </button>
                    <button
                      onClick={nextMonth}
                      type="button"
                      className="inline-flex p-1 transition duration-100 ease-in-out rounded-full cursor-pointer focus:outline-none focus:shadow-outline hover:bg-gray-100"
                    >
                      <svg
                        className="inline-flex w-6 h-6 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="grid grid-cols-7 mb-3">
                  {datePickerDays.map((day, index) => (
                    <div key={index} className="px-0.5">
                      <div className="text-xs font-medium text-center text-gray-800">
                        {day}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-7">
                  {datePickerBlankDaysInMonth.map((_, index) => (
                    <div
                      key={index}
                      className="p-1 text-sm text-center border border-transparent"
                    ></div>
                  ))}
                  {datePickerDaysInMonth.map((day, dayIndex) => {
                    const selectedDate = new Date(
                      datePickerYear,
                      datePickerMonth,
                      day
                    );
                    const today = new Date();

                    return (
                      <div key={dayIndex} className="px-0.5 mb-1 aspect-square">
                        <div
                          onClick={() => handleDayClick(day)}
                          className={`flex items-center justify-center text-sm leading-none text-center rounded-full cursor-pointer h-7 w-7 ${
                            selectedDate < today
                              ? 'text-gray-400 cursor-not-allowed' // Style for past dates
                              : isToday(day)
                              ? 'bg-gray-300' // Style for today's date
                              : isSelectedDate(day)
                              ? 'bg-neutral-800 text-white hover:bg-opacity-75'
                              : 'text-gray-600 hover:bg-neutral-200'
                          }`}
                        >
                          {day}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DatePicker;
