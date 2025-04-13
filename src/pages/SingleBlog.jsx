import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Header from "../components/Blog/Header";
import Content1 from "../components/Blog/Content1";
import Content2 from "../components/Blog/Content2";
import Image2 from "../assets/image2.png"; 
const SingleBlog = () => {
  const [destination, setDestination] = useState(null);
  const { id } = useParams();
  const [currentPage, setCurrentPage] = useState(0);
  
  useEffect(() => {
    axios
      .get(
        `https://67eadc5834bcedd95f64c9f3.mockapi.io/RebelRover/Destinations/1`
      )
      .then((response) => {
        // console.log(response.data);
        setDestination(response.data);
      })
      .catch((error) => {
        console.error("Error fetching", error);
      });
  }, [id]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);
  
  return (
    <>
      <Header />
      {destination ? (
        <Content1 destination={destination} />
      ) : (
        <p className="font-semibold text-center">Loading...</p>
      )}
      <Content2 />
    </>
  );
};

export default SingleBlog;