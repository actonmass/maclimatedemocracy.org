import React from "react";
import { render } from "react-dom";
import { Dropdown } from "semantic-ui-react";
import { useState } from "react";

function DistrictDropdown({ data }) {
  const [value, setValue] = useState(null)
  const options = data.map(({ label, value }) => {
    return {
      text: label,
      value,
      key: value,
    };
  });

  return (
    <div className="cbox">
      <Dropdown
        placeholder="Please select your district"
        search
        selection
        upward={false}
        options={options}
        onChange={(event, data) => {goToForm(data.value)}}
        selectOnBlur={false}
        selectOnNavigation={false}
      />
    </div>
  );

}
function goToForm(districtId) {
  const newUrl = `/2020BQ/${districtId}/Climate/`;
  window.location.href = newUrl;
}

function renderDropdown(targetID, data) {
  const targetEl = document.getElementById(targetID);
  render(<DistrictDropdown data={data} />, targetEl);
}

export default { renderDropdown };
