import React from "react";
import { render } from "react-dom";

function DistrictDropdown() {
  return <h1>Coucouch</h1>
}

function renderDropdown(targetID, data) {
  const targetEl = document.getElementById(targetID);
  render(<DistrictDropdown data={data} />, targetEl);
}

export default { renderDropdown };
