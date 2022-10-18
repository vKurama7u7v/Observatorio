import React from "react";

import { map } from "lodash";
import { Link } from "react-router-dom";

import { setDateFormat } from "../../../../../../../tools/setDate.tools.js";

export default function NewPosts({ title, data }) {
  return (
    <>
      <div className="left-section recientes">
        <h3 className="left-title">
          <span>{title}</span> Recientes
        </h3>
        <div className="news-wrapper">
          {map(data.slice(0, 5), (post, index) => (
            <Link className="new-item">
              <div className="thumbnail">
                <img src={post.thumbnail} alt="" width={"100px"} />
              </div>
              <div className="description">
                <h3>{post.title}</h3>
                <span>{setDateFormat(post.createdAt)}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
