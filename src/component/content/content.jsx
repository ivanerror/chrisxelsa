import React from "react";
import SaveTheDate from "./SaveTheDate";
import TimeLocation from "./TimeLocation";
import Profile from "./Profile";
import Slideshow from "./Slideshow";
import Credit from "./Credit";

export default function content() {
  return (
    <>
      <SaveTheDate />
      <Profile />
      <Slideshow />
      <TimeLocation />
      <Credit />
    </>
  );
}
