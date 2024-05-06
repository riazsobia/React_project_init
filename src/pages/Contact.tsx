import React from "react";
import { RootState } from "../redux/store";
import { useSelector } from "react-redux";

type Props = {};

const Contact = (props: Props) => {
  const count = useSelector((state: RootState) => state.counter.count);
  return (
    <div>
      <div>Contact Page</div>
      <div>{count}</div>
    </div>
  );
};

export default Contact;
