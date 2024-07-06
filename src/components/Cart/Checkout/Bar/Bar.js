import React from "react";
import classes from "./Bar.module.css"

const Bar = (props) => {
  return (
    <div className={classes.Bar}>
      <div className={classes.TotalPrice}>{props.totalPrice}</div>
      <buton className={classes.Button}>去支付</buton>
    </div >
  )
}

export default Bar;