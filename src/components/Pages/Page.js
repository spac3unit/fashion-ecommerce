import React from "react";

const Page = ({ title, children, className }) => {
  return (
    <div className={`page ${className}`}>
      <div className="page__title">{title}</div>
      <div className="page__content">{children}</div>
    </div>
  );
};

export default Page;
