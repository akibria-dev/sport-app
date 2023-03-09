import React from "react";
import { useNavigate } from "react-router";
import "./Home.css";
export const Home = () => {
  const navigate = useNavigate();
  const userName = JSON.parse(localStorage.getItem("user"));
  const handleLogout = () => {
    localStorage.removeItem("loggedin");
    navigate("/");
  };
  return (
    <section
      class="vh-100 bg-image"
      style={{
        backgroundImage:
          "url('https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp')",
      }}
    >
      <div class="mask d-flex align-items-center h -100 gradient-custom-3">
        <div class="container h -100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-12 col-md-9 col-lg-7 col-xl-6">
              <div class="card" style={{ borderRadius: "15px" }}>
                <div class="card-body p-5">
                  <h2
                    class="text-uppercase text-center mb-5"
                    onClick={() => navigate("/main")}
                  >
                    Enter to the sports world
                  </h2>
                  <p className="text-center">Welcome - {userName.name}</p>
                  <button
                    onClick={handleLogout}
                    type="button"
                    className="btn btn-success btn-block btn-lg gradient-custom-4 text-body text-white"
                  >
                    Logout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
