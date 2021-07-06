import React, { useState } from "react";
import Switch from "./switch";

const SwitchExample = () => {
  const [checked, setChecked] = useState(false);
  const handleChange = (value: boolean) => {
    setChecked(!checked)
  }
  return (
    <div>
      <Switch checked={checked} onChange={handleChange}  />
      <Switch checked />
      <Switch checked={false} />
      <Switch checked disabled />
      <Switch checked={false} disabled />
      <Switch checked size="lg" />
      <Switch checked size="sm" />
    </div>
  );
};

export default SwitchExample;
