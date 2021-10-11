//import axios from "axios";

//http resuest for connect db endpoint
export const connectDb = async (connectionUrl) => {
  try {
    return await fetch(`http://localhost:5000/api/connectdb`, {
      method: "POST",
      body: JSON.stringify({ connectionUrl }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());
  } catch (err) {
    console.log(err);
  }
};

//http request for create collection
export const createCollection = async (connectionUrl, collectionName) => {
  try {
    return await fetch(`http://localhost:5000/api/createcollection`, {
      method: "POST",
      body: JSON.stringify({ connectionUrl, collectionName }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());
  } catch (err) {
    console.log(err);
  }
};
