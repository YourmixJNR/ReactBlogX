import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Pagination from "./Pagination";
import SearchWidget from "./Widgets/SearchWidget";
import SideWidget from "./Widgets/SideWidget";
import { supabase } from "../supabaseClient";

const PostContents = () => {
  const [data, setData] = useState();

  useEffect(() => {
    const getBlog = async () => {
      try {
        const { data, error } = await supabase.from("blog").select("*");
        console.log(data)
      } catch (error) {
        console.log(error);
      }
    };

    getBlog();
  }, []);

 

  return (
    <div>
      {<Link to="/addpost">
        AddPost
      </Link>}
      {/* <!-- Page content--> */}
      <div className="container">
        <div className="row">
          {/* <!-- Blog entries--> */}
          <div className="col-lg-8">
            {/* <!-- Featured blog post--> */}
            <div className="card mb-4">
              <Link to="#">
                <img
                  className="card-img-top"
                  src="https://dummyimage.com/850x350/dee2e6/6c757d.jpg"
                  alt="..."
                />
              </Link>
              <div className="card-body">
                <div className="small text-muted">January 1, 2023</div>
                <h2 className="card-title">Featured Post Title</h2>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a
                  laboriosam. Dicta expedita corporis animi vero voluptate
                  voluptatibus possimus, veniam magni quis!
                </p>
                <Link to="#" className="btn btn-primary">
                  Read more →
                </Link>
              </div>
            </div>
            {/* <!-- Nested row for non-featured blog posts--> */}
            <div className="row">
              <div className="col-lg-6">
                {/* <!-- Blog post--> */}
                <div className="card mb-4">
                  <Link to="#">
                    <img
                      className="card-img-top"
                      src="https://dummyimage.com/700x350/dee2e6/6c757d.jpg"
                      alt="..."
                    />
                  </Link>
                  <div className="card-body">
                    <div className="small text-muted">January 1, 2023</div>
                    <h2 className="card-title h4">Post Title</h2>
                    <p className="card-text">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Reiciendis aliquid atque, nulla.
                    </p>
                    <Link to="#" className="btn btn-primary">
                      Read more →
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                {/* <!-- Blog post--> */}
                <div className="card mb-4">
                  <Link to="#">
                    <img
                      className="card-img-top"
                      src="https://dummyimage.com/700x350/dee2e6/6c757d.jpg"
                      alt="..."
                    />
                  </Link>
                  <div className="card-body">
                    <div className="small text-muted">January 1, 2023</div>
                    <h2 className="card-title h4">Post Title</h2>
                    <p className="card-text">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Reiciendis aliquid atque.
                    </p>
                    <Link to="#" className="btn btn-primary">
                      Read more →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <Pagination />
          </div>
          <div className="col-lg-4">
            <SearchWidget />
            <SideWidget />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostContents;
