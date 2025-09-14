import React, { useState, useRef } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // import styles

const MyEditor = () => {
  const [editorValue, setEditorValue] = useState(''); // Store current editor content
  const [savedValue, setSavedValue] = useState(''); // Store the saved content
  const [isEditing, setIsEditing] = useState(true); // Control whether we are in editing mode
  const quillRef = useRef(null); // Reference for ReactQuill editor

  // Handle editor value change
  const handleChange = (value) => {
    setEditorValue(value);
  };

  // Handle save button click
  const handleSave = () => {
    const styledContent = applyHeadingStyles(editorValue); // Apply styling to headings and links
    setSavedValue(styledContent); // Save the content
    setIsEditing(false); // Switch to view mode
  };

  // Handle edit button click
  const handleEdit = () => {
    setEditorValue(savedValue); // Load saved content into editor
    setIsEditing(true); // Switch to editing mode
  };

  // Apply heading styles and other custom styling
  const applyHeadingStyles = (content) => {
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = content;

    // Add Tailwind classes to headings
    tempDiv
      .querySelectorAll('h1')
      .forEach((h1) => h1.classList.add('text-2xl'));
    tempDiv.querySelectorAll('h2').forEach((h2) => h2.classList.add('text-xl'));
    tempDiv.querySelectorAll('h3').forEach((h3) => h3.classList.add('text-lg'));

    // Style links and lists
    tempDiv.querySelectorAll('a').forEach((link) => {
      link.classList.add(
        'text-blue-600',
        'hover:text-blue-500',
        'hover:underline'
      );
    });
    tempDiv.querySelectorAll('ol').forEach((ol) => {
      ol.classList.add('list-decimal', 'pl-6');
    });
    tempDiv.querySelectorAll('ul').forEach((ul) => {
      ul.classList.add('list-disc', 'pl-6');
    });

    // Align text styles
    tempDiv
      .querySelectorAll('.ql-align-center')
      .forEach((element) => element.classList.add('text-center'));
    tempDiv
      .querySelectorAll('.ql-align-right')
      .forEach((element) => element.classList.add('text-right'));
    tempDiv
      .querySelectorAll('.ql-align-left')
      .forEach((element) => element.classList.add('text-left'));

    return tempDiv.innerHTML; // Return the styled content
  };

  // Image upload handler
  const imageHandler = () => {
    const input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');
    input.click();

    input.onchange = (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          const imageUrl = reader.result;
          const quill = quillRef.current.getEditor();
          const range = quill.getSelection();
          quill.insertEmbed(range.index, 'image', imageUrl); // Insert image at cursor position
        };
        reader.readAsDataURL(file);
      }
    };
  };

  const modules = {
    toolbar: [
      [{ header: '1' }, { header: '2' }],
      [{ list: 'ordered' }, { list: 'bullet' }],
      ['bold', 'italic', 'underline'],
      [{ align: [] }],
      ['link'],
      [{ color: [] }, { background: [] }],
      ['image'], // Image button for toolbar
    ],
  };

  return (
    <div className="mt-3">
      {/* ReactQuill Editor */}
      <div
        className={`bg-white pt-10 pb-20 px-5 rounded-lg border ${
          isEditing ? 'block' : 'hidden'
        }`} // Toggle visibility based on editing state
      >
        <ReactQuill
          ref={quillRef}
          value={editorValue}
          onChange={handleChange}
          readOnly={!isEditing} // Editor is read-only when not in editing mode
          placeholder="Start typing your content here..."
          className="h-60"
          modules={modules} // Include custom toolbar and image handler
        />
      </div>

      {/* Saved Content */}
      <div
        className={`saved-content bg-white py-5 px-3 min-h-60 rounded-lg border ${
          isEditing ? 'hidden' : 'block'
        }`} // Toggle visibility based on editing state
      >
        <div
          className="quill-content break-words"
          dangerouslySetInnerHTML={{ __html: savedValue }} // Render saved HTML content
        />
      </div>

      {/* Save/Edit Button */}
      <div>
        {isEditing ? (
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Save
          </button>
        ) : (
          <button
            onClick={handleEdit}
            className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
          >
            Edit
          </button>
        )}
      </div>
    </div>
  );
};

export default MyEditor;
