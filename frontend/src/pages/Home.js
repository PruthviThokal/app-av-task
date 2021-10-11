import React, { useState, useEffect } from "react";
import { connectDb, createCollection } from "../functions/connectDatabase";
import SideBar from "../components/SideBar";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { toast } from "react-toastify";

const Home = () => {
  const [dataCollections, setDataCollections] = useState([]);

  //store connection url in local storage
  const connectUrl = localStorage.getItem("url");
  useEffect(() => {
    showCollections();
  }, []);

  //shoe collection function
  const showCollections = () => {
    connectDb(connectUrl).then((res) => {
      setDataCollections(res);
    });
  };

  const handleSubmit = () => {
    var collectionName = prompt("Please enter collection name");
    console.log(collectionName);
    createCollection(connectUrl, collectionName.toLowerCase())
      .then((res) => {
        toast.success("Collection created successfully");
        window.location.reload();
      })
      .catch((err) => {
        toast.error("Something went wrong");
      });
  };

  return (
    <>
      <SideBar />
      <section className="home-section">
        <div className="container-fluid">
          <div className="heading">
            <h6>Collections</h6>
          </div>
          <div className="content-section">
            <div className="row">
              <div className="col-6">
                <div>
                  <button
                    onClick={handleSubmit}
                    type="button"
                    className="btn btn-sm btn-success text-success text-uppercase bg-white custom"
                  >
                    Create collection
                  </button>
                </div>
                <br />
                {dataCollections.length > 0 &&
                  dataCollections.map((col) => (
                    <div
                      key={col.name}
                      className="alert alert-primary alert-width"
                      role="alert"
                    >
                      {col.name}
                      <span className="btn btn-sm float-right">
                        <EditOutlined />
                      </span>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
