import React from "react";
import { Link } from "react-router-dom";

const Pagination = () => {
  return (
    <div>
      {/* <!-- Pagination--> */}
      <nav aria-label="Pagination">
        <hr className="my-0" />
        <ul className="pagination justify-content-center my-4">
          <li className="page-item disabled">
            <Link to="#"
              className="page-link"
            //   tabindex="-1"
              aria-disabled="true"
            >
              Newer
            </Link>
          </li>
          <li className="page-item active" aria-current="page">
            <Link to="#" className="page-link">
              1
            </Link>
          </li>
          <li className="page-item">
            <Link to="#" className="page-link">
              2
            </Link>
          </li>
          <li className="page-item">
            <Link to="#" className="page-link">
              3
            </Link>
          </li>
          <li className="page-item disabled">
            <Link to="#" className="page-link">
              ...
            </Link>
          </li>
          <li className="page-item">
            <Link to="#" className="page-link">
              15
            </Link>
          </li>
          <li className="page-item">
            <Link to="#" className="page-link">
              Older
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
