import React, { useState, useEffect } from "react";

const AddCardTask = ({ children }) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (isSubmitting) {
      setTimeout(() => {
        setIsExpanded(false);
        setIsSubmitting(false);
      }, 2000);
    }
  }, [isSubmitting]);

  return (
    <div
      className={`w-full h-fit ${isExpanded ? "expanded" : ""}`}
      //   onClick={() => setIsExpanded(!isExpanded)}
    >
      {children}
      {isExpanded && (
        <div className="w-[80%] h-fit bg-[#eee]">
          <div className="h-10 w-full">aaaaaaaaaaaaaaaaaaaaaaaaaaaaa</div>
          <div className="h-10"></div>
          <div className="h-10"></div>
          <div className="h-10"></div>
          <div className="h-10"></div>
          <button
            onClick={() => {
              setIsSubmitting(true);
              // Do your submission logic here
            }}
          >
            Submit
          </button>
        </div>
      )}
    </div>
  );
};
export default AddCardTask;
