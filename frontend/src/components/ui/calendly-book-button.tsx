"use client";

import * as React from "react";
import { PopupModal } from "react-calendly";
import { Button, type ButtonProps } from "@/components/ui/button";

export interface UseCalendlyModalReturn {
  url: string | undefined;
  rootElement: HTMLElement | null;
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

export function useCalendlyModal(): UseCalendlyModalReturn {
  const [isOpen, setIsOpen] = React.useState(false);
  const [rootElement, setRootElement] = React.useState<HTMLElement | null>(null);

  React.useEffect(() => {
    setRootElement(document.body);
  }, []);

  React.useEffect(() => {
    if (!isOpen) return;
    const { body, documentElement } = document;
    const previousBodyOverflow = body.style.overflow;
    const previousHtmlOverflow = documentElement.style.overflow;
    body.style.overflow = "hidden";
    documentElement.style.overflow = "hidden";
    return () => {
      body.style.overflow = previousBodyOverflow;
      documentElement.style.overflow = previousHtmlOverflow;
    };
  }, [isOpen]);

  const openModal = React.useCallback(() => setIsOpen(true), []);
  const closeModal = React.useCallback(() => setIsOpen(false), []);

  return {
    url: process.env.NEXT_PUBLIC_CALENDLY_URL,
    rootElement,
    isOpen,
    openModal,
    closeModal,
  };
}

export interface CalendlyBookButtonProps
  extends Omit<ButtonProps, "children" | "onClick"> {
  label?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export function CalendlyBookButton({
  label = "Book a Consultation",
  onClick,
  ...buttonProps
}: CalendlyBookButtonProps) {
  const { url, rootElement, isOpen, openModal, closeModal } = useCalendlyModal();

  if (!url) {
    if (process.env.NODE_ENV !== "production") {
      console.warn("CalendlyBookButton: NEXT_PUBLIC_CALENDLY_URL is not set.");
    }
    return null;
  }

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    onClick?.(event);
    openModal();
  };

  return (
    <>
      <Button {...buttonProps} type="button" onClick={handleClick}>
        {label}
      </Button>
      {rootElement && (
        <PopupModal
          url={url}
          open={isOpen}
          rootElement={rootElement}
          onModalClose={closeModal}
        />
      )}
    </>
  );
}