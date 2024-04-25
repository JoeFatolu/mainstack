import "@testing-library/jest-dom";
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ModalPreview from "@/components/modal-preview";

describe("ModalPreview component", () => {
  test("renders children when isOpen is true", () => {
    const { getByText } = render(
      <ModalPreview isOpen={true} onClose={() => {}}>
        <div>Modal Content</div>
      </ModalPreview>
    );
    expect(getByText("Modal Content")).toBeInTheDocument();
  });
  test("doesn't render anything when isOpen is false", () => {
    const { container } = render(
      <ModalPreview isOpen={false} onClose={() => {}}>
        <div>Modal Content</div>
      </ModalPreview>
    );
    expect(container.firstChild).toBeNull();
  });
  test("calls onClose when clicking outside the ModalPreview child", () => {
    const onClose = jest.fn();
    const { getByTestId } = render(
      <div onClick={onClose}>
        <ModalPreview isOpen={true} onClose={() => {}}>
          <div>
            <span>Modal Content</span>
          </div>
        </ModalPreview>
      </div>
    );
    const modalPreviewChild = getByTestId("modal-preview-child");
    fireEvent.click(modalPreviewChild); // Simulate click on the ModalPreview child
    expect(onClose).toHaveBeenCalledTimes(1);
  });
  //TODO: close when close icon is clicked
  
});
