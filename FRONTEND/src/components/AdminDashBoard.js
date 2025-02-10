import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AdminServiceMethods from "../service/AdminServiceMethods";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [adminId, setAdminId] = useState("");
  const [firstName, setFirstName] = useState("");

  useEffect(() => {
    loadAdmin();
  }, []);

  const loadAdmin = () => {
    let admin = JSON.parse(sessionStorage.getItem("admin"));
    if (admin) {
      setAdminId(admin.userId);
      setFirstName(admin.userFirstName);
    }
  };

  const logout = () => {
    AdminServiceMethods.logoutAdmin();
    navigate("/"); // Redirect to login page after logout
  };

  return (
    <div className="container">
      <div className="row my-3">
        <div className="col-sm-6">
          <h2 className="text-capitalize">Hello, {firstName}</h2>
        </div>
        <div className="col-sm-6">
          <button onClick={logout} className="btn btn-danger offset-10 text-uppercase">
            Logout
          </button>
        </div>
      </div>

      <div className="row">
        {/* Add New Doctor */}
        <div className="col-md-4">
          <div className="card mb-4">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3774/3774299.png"
              className="card-img-top"
              alt="Add Doctor"
              style={{ width: "90%", height: "300px" }}
            />
            <div className="card-body">
              <h5 className="card-title">Add New Doctor</h5>
              <p className="card-text">Register a new doctor to the database.</p>
              <button onClick={() => navigate("/add-new-doctor")} className="btn btn-primary">
                ADD
              </button>
            </div>
          </div>
        </div>

        {/* View Doctor List */}
        <div className="col-md-4">
          <div className="card">
            <img
              src="https://cdn-icons-png.flaticon.com/512/6401/6401525.png"
              className="card-img-top"
              alt="View Doctor List"
              style={{ width: "80%", height: "300px" }}
            />
            <div className="card-body">
              <h5 className="card-title">View Doctor List</h5>
              <p className="card-text">View details of all registered doctors.</p>
              <button onClick={() => navigate("/doctor-list-admin")} className="btn btn-warning">
                VIEW
              </button>
            </div>
          </div>
        </div>

        {/* View Patient List */}
        <div className="col-md-4">
          <div className="card">
            <img
              src="https://cdn-icons-png.flaticon.com/512/5259/5259073.png"
              className="card-img-top"
              alt="View Patient List"
              style={{ width: "90%", height: "300px" }}
            />
            <div className="card-body">
              <h5 className="card-title">View Patient List</h5>
              <p className="card-text">View details of all patients.</p>
              <button onClick={() => navigate("/patientList")} className="btn btn-danger">
                VIEW
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
