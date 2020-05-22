import React, { useState, useEffect } from "react";
import { axiosWithAuth } from '../utils/axiosWithAuth';

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property
  useEffect(() => {
    axiosWithAuth()
      .get('http://localhost:5000/api/colors')
      .then(res => {
        console.log('GET request for BubblePage', res);
        setColorList(res.data);
      })
  } ,[])

  const getNewColors = () => {
    axiosWithAuth()
      .get('http://localhost:5000/api/colors')
      .then(res => {
        console.log('GET request for updated colors', res);
        setColorList(res.data);
      })
  }

  return (
    <>
      <ColorList colors={colorList} updateColors={getNewColors} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
