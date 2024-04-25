import React from "react";
import { tick, untick } from "./icons";

interface CheckboxProps {
  content: string;
  value: boolean;
  onChange: () => void;
}

const Checkbox: React.FC<CheckboxProps> = ({ content, value, onChange }) => {
  return (
    <label className={"h-12 content-center relative"}>
      <input
        className="absolute top-0 left-0 opacity-0"
        type="checkbox"
        data-testid="checkbox-input"
        onChange={onChange}
        checked={value}
        style={{
          height: "1rem",
          width: "1rem",
        }}
      />
      <span className="flex items-center gap-3">
        {value ? tick : untick}
        {content && (
          <>
            <span
              className="text-black-300 text-base  font-semibold"
              dangerouslySetInnerHTML={{ __html: content }}
            ></span>
          </>
        )}
      </span>
    </label>
  );
};

export default Checkbox;
