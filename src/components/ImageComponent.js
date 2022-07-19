import React, { useContext } from "react";
import { Context } from "../context/Provider";

const ImageComponent = () => {
  const cxt = useContext(Context);
  return (
    <div ref={cxt.my_dom_ref} className="img_container">
      <img
        src={require("../assets/badge.png")}
        className="gdsc_badge_top"
        alt="gdsc-logo-badge"
      />
      <div className="img_holder bg-white p-3 shadow-sm">
        <div className="img_box d-flex flex-column justify-content-center align-items-center">
          {cxt.img != null ? (
            <img alt="" src={cxt.img} className="crop centered-and-cropped" accept="image/x-png,image/gif,image/jpeg" />
          ) : (
            <img alt="" src={require("../assets/actor.jpg")} className="crop centered-and-cropped" />
          )}
        </div>
        <div className="my-2 d-flex flex-column justify-content-center align-items-center">
          <span className="fs-4 ba w-100 text-center"> {cxt.name}</span>
          <span className="green break pt-font fw-bolder fs-6">{`//${cxt.role}`}</span>
          <img
            className="my-2"
            src={require("../assets/logo1.svg").default}
            alt="gdsc-main-logo"
            width="250"
          />
        </div>
      </div>
      <img
        src={require("../assets/bg2.png")}
        // width="520"
        className="img-fluid"
        alt="GDSC Background"
      />
    </div>
  );
};

export default ImageComponent;
