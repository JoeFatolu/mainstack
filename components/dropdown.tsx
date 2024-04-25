import React, { useState } from "react";
import cn from "classnames";
import OutsideClickHandler from "react-outside-click-handler";
import Checkbox from "./checkbox";

interface DropdownProps {
  value: { label: string; value: string; key: number }[];
  options: { label: string; value: string; key: number }[];
  setValue: (value: { label: string; value: string; key: number }[]) => void;
  label?: string;
  tooltip?: string;
  small?: boolean;
  upBody?: boolean;
}

const Dropdown: React.FC<DropdownProps> = ({ value, setValue, options, label }) => {
  const [visible, setVisible] = useState(false);

  const handleCheckboxChange = (x: { label: string; value: string; key: number }) => {
    const index = value.findIndex((item) => item.value === x.value);
    if (index !== -1) {
      const newValue = [...value];
      newValue.splice(index, 1);
      setValue(newValue);
    } else {
      setValue([...value, x].sort((a, b) => a.key - b.key));
    }
  };

  return (
    <OutsideClickHandler onOutsideClick={() => setVisible(false)}>
      <div className="mb-6 relative">
        {label && <div className={"text-black-300 text-base  font-semibold  mb-2 "}>{label}</div>}
        <div
          className={"bg-gray-50 h-12 px-4 flex items-center rounded-xl border border-gray-50 cursor-pointer"}
          onClick={() => setVisible(!visible)}
        >
          <div className="text-black-300 text-sm leading-4 font-medium">
            {value.reduce((a, b) => a + b.label + ", ", "").slice(0, -2)}
          </div>
        </div>
        <div
          data-testid="dropdown"
          className={cn(
            "dropdown rounded-xl absolute left-0 top-0 right-0   transform translate-y-3 transition-all duration-200 bg-white",
            { "z-20 opacity-100  translate-y-0 visible": visible },
            { "z-10 opacity-0 invisible": !visible }
          )}
          style={{
            boxShadow: "0px 6px 12px 0px #5C738314, 0px 4px 8px 0px #5C738314",
            top: "calc(100% + 2px)",
          }}
        >
          <div
            className={"flex flex-col p-2"}
            style={{
              marginBottom: "0.125rem",
            }}
          >
            {options.map((x, index) => (
              <Checkbox
                value={!!value.find((i) => i.value == x.value)}
                content={x.label}
                onChange={() => {
                  handleCheckboxChange(x);
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </OutsideClickHandler>
  );
};

export default Dropdown;
