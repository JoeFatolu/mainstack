import React from "react";
import OutsideClickHandler from "react-outside-click-handler";

interface ModalPreviewProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const ModalPreview: React.FC<ModalPreviewProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) {
    return null;
  }
  return (
    <section className="modal flex fixed top-0 left-0 w-full h-full p-3 bg-gray-232 opacity-0 transition-opacity  overflow-auto z-50 justify-end">
      <OutsideClickHandler onOutsideClick={onClose}>
        <div className="h-full" data-testid="modal-preview-child">
          {children}
        </div>
      </OutsideClickHandler>
    </section>
  );
};

export default ModalPreview;
