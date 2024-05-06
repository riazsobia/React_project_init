import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { setCount } from "../redux/slice/counter";

type Props = {};

const Home = (props: Props) => {
  const dispatch = useDispatch<AppDispatch>();

  const count = useSelector((state: RootState) => state.counter.count);

  const onCountIncrement = () => {
    dispatch(setCount(count + 1));
  };

  const onCountDecrement = () => {
    dispatch(setCount(count - 1));
  };
  return (
    <div>
      <div>Page: home</div>
      <div>counter</div>
      <div>{count}</div>
      <button onClick={onCountIncrement}>increment</button>
      <button onClick={onCountDecrement}>decrement</button>
    </div>
  );
};

export default Home;
