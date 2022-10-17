import React from "react";
import { Link } from "react-router-dom";

export default function NewPosts({ title }) {
  return (
    <>
      <div className="left-section recientes">
        <h3 className="left-title">
          <span>{title}</span> Recientes
        </h3>
        <div className="news-wrapper">
          <Link className="new-item">
            <div className="thumbnail">
              <img
                src="https://i.picsum.photos/id/1036/900/400.jpg?hmac=-J8HWH1fEmW3OMmInQ5yWX3BIEU5Yte8oh_w_ezlQYc"
                alt=""
                width={"100px"}
              />
            </div>
            <div className="description">
              <h3>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
              </h3>
              <span>fecha</span>
            </div>
          </Link>
          <Link className="new-item">
            <div className="thumbnail">
              <img
                src="https://i.picsum.photos/id/1036/900/400.jpg?hmac=-J8HWH1fEmW3OMmInQ5yWX3BIEU5Yte8oh_w_ezlQYc"
                alt=""
                width={"100px"}
              />
            </div>
            <div className="description">
              <h3>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
              </h3>
              <span>fecha</span>
            </div>
          </Link>
          <Link className="new-item">
            <div className="thumbnail">
              <img
                src="https://i.picsum.photos/id/1036/900/400.jpg?hmac=-J8HWH1fEmW3OMmInQ5yWX3BIEU5Yte8oh_w_ezlQYc"
                alt=""
                width={"100px"}
              />
            </div>
            <div className="description">
              <h3>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
              </h3>
              <span>14 Agosto, 2022</span>
            </div>
          </Link>
          <Link className="new-item">
            <div className="thumbnail">
              <img
                src="https://i.picsum.photos/id/1036/900/400.jpg?hmac=-J8HWH1fEmW3OMmInQ5yWX3BIEU5Yte8oh_w_ezlQYc"
                alt=""
                width={"100px"}
              />
            </div>
            <div className="description">
              <h3>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
              </h3>
              <span>14 Agosto, 2022</span>
            </div>
          </Link>
          <Link className="new-item">
            <div className="thumbnail">
              <img
                src="https://i.picsum.photos/id/1036/900/400.jpg?hmac=-J8HWH1fEmW3OMmInQ5yWX3BIEU5Yte8oh_w_ezlQYc"
                alt=""
                width={"100px"}
              />
            </div>
            <div className="description">
              <h3>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
              </h3>
              <span>14 Agosto, 2022</span>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
