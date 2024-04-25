import "@testing-library/jest-dom";
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Dropdown from "../../components/dropdown";

const options = [
  { label: "Option 1", value: "option1", key: 1 },
  { label: "Option 2", value: "option2", key: 2 },
  { label: "Option 3", value: "option3", key: 3 },
];

describe("Dropdown component", () => {
  test("dropdown is invisible by default and becomes visible when clicked", () => {
    const { getByText, queryByTestId, queryByText } = render(
      <Dropdown value={[]} setValue={() => {}} options={options} label="Select Options" />
    );

    // Ensure dropdown is invisible by default
    const dropdown = queryByTestId("dropdown");
    expect(dropdown).toContain("invisible");

    // Click the label to show the dropdown
    const labelElement = getByText("Select Options");
    fireEvent.click(labelElement);

    // Ensure dropdown becomes visible after clicking
    expect(dropdown).not.toHaveClass("invisible");
    expect(dropdown).toHaveClass("visible");

    // Ensure options content becomes visible after clicking the dropdown
    options.forEach((option) => {
      const optionElement = queryByText(option.label);
      expect(optionElement).toBeInTheDocument();
    });
  });
  //   test("dropdown toggles visibility when clicked", () => {
  //     const { getByText, getByTestId } = render(<Dropdown value={[]} setValue={() => {}} options={options} />);
  //     const dropdown = getByTestId("dropdown");
  //     fireEvent.click(dropdown);
  //     expect(dropdown).toHaveClass("visible");
  //     fireEvent.click(dropdown);
  //     expect(dropdown).not.toHaveClass("visible");
  //   });

  //   test("selecting an option adds it to the value", () => {
  //     const setValue = jest.fn();
  //     const { getByText } = render(<Dropdown value={[]} setValue={setValue} options={options} />);
  //     const optionElement = getByText("Option 1");
  //     fireEvent.click(optionElement);
  //     expect(setValue).toHaveBeenCalledWith([options[0]]);
  //   });

  //   test("dropdown closes when clicked outside", () => {
  //     const { getByTestId, container } = render(<Dropdown value={[]} setValue={() => {}} options={options} />);
  //     const dropdown = getByTestId("dropdown");
  //     fireEvent.click(dropdown);
  //     expect(dropdown).toHaveClass("visible");
  //     fireEvent.click(container); // Click outside the dropdown
  //     expect(dropdown).not.toHaveClass("visible");
  //   });
});
