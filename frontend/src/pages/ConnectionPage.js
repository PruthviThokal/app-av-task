import React, { useState, useEffect } from "react";
import { connectDb } from "../functions/connectDatabase";
import SideBar from "../components/SideBar";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

const ConnectionPage = ({ history }) => {
  const [connectUrl, setConnectUrl] = useState("");

  //dispatch connection url in redux state
  let dispatch = useDispatch();

  //handle submit function for create connection
  const handleSubmit = (e) => {
    e.preventDefault();
    connectDb(connectUrl)
      .then((res) => {
        //dispatch action in redux state
        dispatch({
          type: "CONNECT_DATABASE",
          payload: {
            url: connectUrl,
          },
        });
        localStorage.setItem("url", connectUrl);
        history.push("/home");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <SideBar />
      <section className="home-section">
        <div className="container-fluid">
          <div className="heading">
            <h3>
              New Connections
              <span className="badge badge-pill badge-secondary">
                <i className="bx bx-star"></i>Favorite
              </span>
            </h3>
          </div>
          <div className="content-section">
            <div className="row">
              <div className="col-6">
                <span className="d-flex justify-content-end">
                  Fill in Connection fields individually
                </span>
                <form className="bg-white p-4 shadow mt-2">
                  <div className="form-group">
                    <label
                      for="exampleFormControlFile1"
                      className="font-weight-bold"
                    >
                      Paste your connection String (SVR or Standard)
                    </label>
                    <input
                      type="text"
                      placeholder="ex. mongodb://mongodb0.example.com:27017"
                      className="form-control font-weight-normal"
                      onChange={(e) => setConnectUrl(e.target.value)}
                      required
                    />
                  </div>

                  <button
                    type="button"
                    className="btn btn-success "
                    onClick={handleSubmit}
                  >
                    Connect
                  </button>
                </form>
              </div>
              <div className="col-6">
                <div className="card first">
                  <div className="card-body">
                    <h6 className="card-subtitle mb-2">
                      New to Compass and don't have cluster?
                    </h6>
                    <p className="card-text">
                      If you don't already have a cluster, you can create one
                      for free using
                      <a href="/#" className="card-link">
                        MongoDB Atlas
                      </a>
                    </p>
                    <button
                      type="button"
                      className="btn btn-outline-success text-success text-uppercase bg-white "
                    >
                      create free cluster
                    </button>
                  </div>
                </div>
                <br />
                <div className="card bg-none">
                  <div className="card-body">
                    <h6 className="card-subtittle mb-2">
                      How do I find my connection string in Atlas?
                    </h6>
                    <div className="cad-text">
                      If you have an Atlas cluster, go to the Cluster view.
                      Click the 'Connect' button for the cluster to which you
                      wish to connect
                    </div>
                    <div className="card-link text-primary">See Example</div>
                  </div>
                </div>
                <br />
                <div className="card bg-none">
                  <div className="card-body">
                    <h6 className="card-subtittle mb-2">
                      How do I format my connetion string?
                    </h6>
                    <div className="card-link text-primary">See Example</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ConnectionPage;
