import React, { useState } from 'react';
import { CiImageOn } from 'react-icons/ci';
import { IoMdClose } from 'react-icons/io';

const DisplayImages = () => {
  const [images, setImages] = useState([]);
  const [dragActive, setDragActive] = useState(false);

  // Handle image upload (via file input)
  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    const newImages = files.map((file) => URL.createObjectURL(file));
    setImages((prevImages) => [...prevImages, ...newImages]);
  };

  // Handle drag events
  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  // Handle drop event
  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    const files = Array.from(e.dataTransfer.files);
    const newImages = files.map((file) => URL.createObjectURL(file));
    setImages((prevImages) => [...prevImages, ...newImages]);
  };

  // Remove an image by index
  const removeImage = (indexToRemove) => {
    setImages((prevImages) =>
      prevImages.filter((_, index) => index !== indexToRemove)
    );
  };

  return (
    <div className="mt-3">
      {/* Display uploaded images */}
      <div className="image-preview-grid grid grid-cols-4 gap-4 mt-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative h-32 p-4 bg-white border rounded-md mb-2"
          >
            <img
              src={image}
              alt={`Uploaded Preview ${index}`}
              className="w-full h-full object-cover"
            />
            {/* Remove Button */}
            <button
              onClick={() => removeImage(index)}
              className="absolute top-1 right-1 transition-all duration-300 h-6 w-6 rounded-full bg-blue-100 hover:bg-red-500 hover:text-white flex justify-center items-center"
            >
              <IoMdClose />
            </button>
          </div>
        ))}
      </div>
      <div className="image-uploader">
        {/* Input for multiple image upload */}
        <div
          className="relative border-2 border-dashed rounded-lg text-center"
          onDragEnter={handleDrag}
          onDragOver={handleDrag}
          onDragLeave={handleDrag}
          onDrop={handleDrop}
        >
          <label htmlFor="file-input" className="cursor-pointer">
            {/* Adjusted text style when dragging */}
            <p
              className={`relative text-xs font-bold text-gray-600 transition-all duration-300 py-28 ${
                dragActive ? 'opacity-50' : 'opacity-100'
              }`}
            >
              Drag your photo here or{''}{' '}
              <span className="link link-primary">Browse from device</span>
              <div className="flex items-center justify-center">
                <CiImageOn className="text-5xl" />
              </div>
            </p>
            <input
              id="file-input"
              type="file"
              accept="image/*"
              multiple
              onChange={handleImageChange}
              className="hidden"
            />
          </label>
        </div>
      </div>
    </div>
  );
};

export default DisplayImages;
