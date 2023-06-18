import React from "react";

const CategoryForm = ({ handleSubmit, value, setValue }) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="text"
            className="form-control rounded-0 text-secondary text-14 mt-2 mb-4 w-75"
            placeholder="Enter new category"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-info px-5 py-2 rounded-0">
          Submit
        </button>
      </form>
    </>
  );
};

export default CategoryForm;
