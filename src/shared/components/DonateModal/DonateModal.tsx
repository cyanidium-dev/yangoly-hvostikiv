"use client";
import { useState, useEffect, useCallback } from "react";
import { CloseIcon } from "../../../../public/images/icons";
import FundraisingGoal from "@/modules/FundraisingGoal/FundraisingGoal";
import DonateAmountSection from "./DonateAmountSection/DonateAmountSection";
import { IDonateModalProps } from "@/shared/types";
import { getDictionary } from "@/shared/utils";
import { motion, AnimatePresence } from "framer-motion";

const DonateModal = ({
  isOpen,
  onClose,
  translation,
  lang,
}: IDonateModalProps) => {
  const [localTranslation, setLocalTranslation] = useState(translation);
  const [showModal, setShowModal] = useState(isOpen);

  useEffect(() => {
    if (!translation) {
      getDictionary(lang).then(({ donateModal }) =>
        setLocalTranslation(donateModal)
      );
    }
  }, [lang, translation]);

  useEffect(() => {
    if (isOpen) {
      setShowModal(true);
    } else {
      setShowModal(false);
    }
  }, [isOpen]);

  const handleBackdropClick = useCallback(
    (e: React.MouseEvent) => {
      if (e.target === e.currentTarget) {
        onClose();
      }
    },
    [onClose]
  );

  if (!localTranslation) return null;

  const { fundraisingTitle, currency, goal, donateAmountSection } =
    localTranslation;

  return (
    <AnimatePresence>
      {showModal && (
        <motion.div
          onClick={handleBackdropClick}
          className="fixed inset-0 top-[65px] xl:top-[140px] flex items-start justify-center bg-black/50 z-[1000]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="w-[92%] xl:w-[78%] h-[calc(100vh-81px)] xl:h-[90%] bg-white rounded-lg relative mt-2 xl:mt-10"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            transition={{ duration: 0.3 }}
          >
            <button
              onClick={onClose}
              className="absolute right-6 top-6 p-2 hover:bg-gray-100 rounded-full z-10"
            >
              <CloseIcon variant="secondary" className="w-6 h-6" />
            </button>

            <div className="h-full overflow-y-auto">
              <div className="flex flex-col xl:flex-row min-h-full">
                <div className="px-4 mt-[64px] xl:hidden">
                  <FundraisingGoal
                    imageVariant="small"
                    fundraisingTitle={fundraisingTitle}
                    goal={goal}
                    currency={currency}
                    totalAmount={30000}
                    currentAmount={10000}
                    styles={{
                      titleClassName: "text-[24px]",
                      goalClassName: "text-[14px] text-[#012A0F]",
                      currentAmountClassName:
                        "text-[14px] no-ligatures text-[#012A0F]",
                    }}
                  />
                </div>

                <div className="hidden xl:flex xl:w-1/2 bg-[#F5F5F5] rounded-l-lg items-center justify-center py-[64px]">
                  <div className="-mt-10">
                    <FundraisingGoal
                      imageVariant="big"
                      fundraisingTitle={fundraisingTitle}
                      goal={goal}
                      currency={currency}
                      totalAmount={30000}
                      currentAmount={10000}
                      styles={{
                        titleClassName: "text-[24px]",
                        goalClassName: "text-[14px] text-[#012A0F]",
                        currentAmountClassName:
                          "text-[14px] no-ligatures text-[#012A0F]",
                      }}
                    />
                  </div>
                </div>

                <div className="xl:w-1/2 px-4 py-[64px]">
                  <DonateAmountSection
                    lang={lang}
                    currency={currency}
                    translation={donateAmountSection}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DonateModal;
