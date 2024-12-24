import React from "react";

const UserForm = () => {
  const submitHandler = () => {
    console.log(`Form Submit`);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="row mb-3">
        <label className="col-sm-2 col-form-label">Username: </label>
        <div className="col-sm-10">
          <input
            type="text"
            placeholder="Enter username"
            value={user.username}
            className="form-control"
            name="username"
            onChange={changeHandler}
          />
        </div>
      </div>
      <div className="row mb-3">
        <label className="col-sm-2 col-form-label">Age: </label>
        <div className="col-sm-10">
          <input
            type="number"
            placeholder="Enter user age in number only"
            value={user.age}
            className="form-control"
            name="age"
            onChange={changeHandler}
          />
        </div>
      </div>
      <div className="row mb-3">
        <label className="col-sm-2 col-form-label">Email: </label>
        <div className="col-sm-10">
          <input
            type="text"
            placeholder="Enter email"
            value={user.email}
            className="form-control"
            name="username"
            onChange={changeHandler}
          />
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-sm-4">
          <button type="submit" className="btn btn-success">
            Add a new user to database
          </button>
        </div>
      </div>
    </form>
  );
};

export default UserForm;
