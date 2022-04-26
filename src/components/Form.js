import React, { useContext } from "react";
import { Context } from "../context/Provider";
import domtoimage from "dom-to-image";

const Form = () => {
  const cxt = useContext(Context);
  return (
    <div className="card p-4 w-100">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          domtoimage
            .toPng(cxt.my_dom_ref.current, { quality: 1 })
            .then(function (dataUrl) {
              var link = document.createElement("a");
              link.download = "gdsc-badge.png";
              link.href = dataUrl;
              link.click();
            });
        }}
      >
        <div class="form-group my-2">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={cxt.name}
            maxLength="30"
            required="true"
            onChange={(e) => cxt.setName(e.target.value)}
          />
        </div>
        <div class="form-group my-2">
          <label htmlFor="role">Role</label>
          <input
            type="text"
            className="form-control"
            name="role"
            maxLength="24"
            required="true"
            value={cxt.role}
            onChange={(e) => cxt.setRole(e.target.value)}
          />
        </div>
        <div class="form-group my-2">
          <label htmlFor="img">Profile</label>
          <input
            type="file"
            className="form-control"
            name="img"
            onChange={(e) => cxt.setImg(URL.createObjectURL(e.target.files[0]))}
          />
        </div>
        <button className="btn btn-primary btn-block w-100 my-3">
          Download
        </button>
      </form>
    </div>
  );
};

export default Form;
