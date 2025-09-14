import React, { useState } from 'react';

const Textcopy = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const textToCopy =
      document.getElementById('hs-clipboard-basic').textContent;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset copied state after 2 seconds
  };

  return (
    <div className="inline-flex items-center gap-x-3">
      <div>
        <p className="text-sm text-center md:text-start">
          Customer ID : <span id="hs-clipboard-basic">#52365477</span>
        </p>
      </div>
      {/* Copy Button */}
      <button
        title="Copy Customer ID"
        type="button"
        onClick={handleCopy}
        className="p-1 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
      >
        {!copied ? (
          <svg
            className="size-4 group-hover:rotate-6 transition"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect width="8" height="4" x="8" y="2" rx="1" ry="1"></rect>
            <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
          </svg>
        ) : (
          <svg
            className="size-4 text-blue-600"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        )}
      </button>
    </div>
  );
};

export default Textcopy;
