import React from "react";
import { withRouter } from "react-router-dom";

const Page = ({ history, title, children, className }) => {
  return (
    <div className={`page ${className}`}>
      <div className="page__title">
        {title}
        <a href="#" onClick={() => history.goBack()}>
          back
        </a>
      </div>
      <div className="page__content">{children}</div>
    </div>
  );
};

// export default withRouter(Page)
export default withRouter(Page);
