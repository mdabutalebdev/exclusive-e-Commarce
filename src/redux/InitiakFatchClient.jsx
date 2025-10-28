"use client";
import { useDispatch } from "react-redux";
import { fetchProducts } from "./productSlice";
import { useEffect } from "react";

const InitiakFatchClient = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  return <div> 

  </div>;
};

export default InitiakFatchClient;
