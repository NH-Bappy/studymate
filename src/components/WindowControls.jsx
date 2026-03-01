import useWindowStore from "#store/window";
import React from "react";

const WindowControls = ({ target }) => {
  const { closeWindow, minimizeWindow, maximizeWindow } = useWindowStore();

  return (
    <div id="window-controls">
      <div className="close" onClick={() => closeWindow(target)} />
      <a href="">
        <div className="minimize" onClick={() => minimizeWindow(target)} />
      </a>
      <a href="">
        <div className="maximize" onClick={() => maximizeWindow(target)} />
      </a>
    </div>
  );
};

export default WindowControls;
