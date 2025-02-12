"use client";
import React, { useCallback } from "react";
import { cn } from "@/shared/utils";
import { CloseIcon } from "../../../../public/images/icons";
import { IModalProps } from "@/shared/types";

const Modal = ({
  isOpen,
  onClose,
  children,
  className,
  modalClassName,
  ...props
}: IModalProps) => {
  const handleBackdropClick = useCallback(
    (e: React.MouseEvent) => {
      if (e.target === e.currentTarget) {
        onClose();
      }
    },
    [onClose]
  );

  if (!isOpen) return null;

  return (
    <div
      onClick={handleBackdropClick}
      className={cn(
        "fixed inset-0 flex items-center top-[65px] xl:top-[140px] justify-center bg-black/50 z-[1000]",
        className
      )}
      {...props}
    >
      <div
        className={cn(
          "bg-white w-[90%] max-w-lg xl:max-w-2xl h-auto p-6 rounded-lg relative",
          modalClassName
        )}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 p-2 hover:bg-gray-100 rounded-full z-10"
        >
          <CloseIcon variant="secondary" className="w-6 h-6" />
        </button>
        <div className="overflow-y-auto">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
