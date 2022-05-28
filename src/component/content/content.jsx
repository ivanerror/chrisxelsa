import React from "react";
import SaveTheDate from "./SaveTheDate";
import TimeLocation from "./TimeLocation";
import Profile from "./Profile";
import Slideshow from "./Slideshow";

export default function content() {
  return (
    <>
      <SaveTheDate />
      <Profile />
      <TimeLocation />
      <Slideshow />
    </>
  );
}
