import "@testing-library/jest-dom";
import { render, fireEvent } from "@testing-library/react";
import React from "react";
import Checkbox from "@/components/checkbox";

describe("Checkbox component", () => {
  test("renders checkbox with content when provided", () => {
    const { getByText } = render(<Checkbox content="Test Checkbox" value={false} onChange={() => {}} />);
    expect(getByText("Test Checkbox")).toBeInTheDocument();
  });

  test("renders ticked checkbox when value is true", () => {
    const { getByTestId } = render(<Checkbox content="Test Checkbox" value={true} onChange={() => {}} />);
    expect(getByTestId("checkbox-icon").getAttribute("data-icon")).toEqual("tick");
  });
  test("renders unticked checkbox when value is false", () => {
    const { getByTestId } = render(<Checkbox content="Test Checkbox" value={false} onChange={() => {}} />);
    expect(getByTestId("checkbox-icon").getAttribute("data-icon")).toEqual("untick");
  });

  test("calls onChange when checkbox is clicked", () => {
    const handleChange = jest.fn();
    const { getByTestId } = render(
      <Checkbox content="Test Checkbox" value={false} onChange={handleChange} />
    );
    fireEvent.click(getByTestId("checkbox-input"));
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  test("checkbox is checked when value is true", () => {
    const { getByTestId } = render(<Checkbox content="Test Checkbox" value={true} onChange={() => {}} />);
    expect(getByTestId("checkbox-input")).toBeChecked();
  });

  test("checkbox is unchecked when value is false", () => {
    const { getByTestId } = render(<Checkbox content="Test Checkbox" value={false} onChange={() => {}} />);
    expect(getByTestId("checkbox-input")).not.toBeChecked();
  });

  test("calls onChange function with correct value when clicked", () => {
    let isChecked = false;
    const handleChange = () => {
      isChecked = !isChecked;
    };
    const { getByTestId } = render(
      <Checkbox content="Test Checkbox" value={isChecked} onChange={handleChange} />
    );
    fireEvent.click(getByTestId("checkbox-input"));
    expect(isChecked).toBe(true);
  });
});
