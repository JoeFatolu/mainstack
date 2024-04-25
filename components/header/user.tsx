import React from "react";
import OutsideClickHandler from "react-outside-click-handler";

const items = [
  {
    label: "Settings",
    icon: "",
  },
  {
    label: "Settings",
    icon: "",
  },
  {
    label: "Settings",
    icon: "",
  },
  {
    label: "Settings",
    icon: "",
  },
  {
    label: "Settings",
    icon: "",
  },
  {
    label: "Settings",
    icon: "",
  },
  {
    label: "Settings",
    icon: "",
  },
];

function User() {
  const [visible, setVisible] = React.useState(false);

  return (
    <OutsideClickHandler onOutsideClick={() => setVisible(false)}>
      <section></section>
    </OutsideClickHandler>
  );
}
