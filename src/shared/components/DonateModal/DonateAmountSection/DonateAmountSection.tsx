"use client";
import React, { useState, useEffect, useCallback } from "react";
import CustomAmountCard from "../CustomAmountCard/CustomAmountCard";
import AmountCard from "../AmountCard/AmountCard";
import { formatAmount } from "@/shared/utils";
import TextInput from "../../TextInput/TextInput";
import CheckBox from "../../CheckBox/CheckBox";
import PaymentButton from "../PaymentButton/PaymentButton";
import { IAmountSectionProps, ICardPaymentFormData } from "@/shared/types";
import Toast from "../../Toast/Toast";
import CardPaymentForm from "../CardPaymentForm/CardPaymentForm";
import ThankYouModal from "../ThankYouModal/ThankYouModal";

const DonateAmountSection = ({
  translation,
  currency,
  lang,
}: IAmountSectionProps) => {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState<string>("");
  const [comment, setComment] = useState("");
  const [isAgreed, setIsAgreed] = useState(false);
  const [wantNotifications, setWantNotifications] = useState(false);
  const [agreementError, setAgreementError] = useState(false);
  const [isToastVisible, setIsToastVisible] = useState(false);
  const [showCardPaymentForm, setShowCardPaymentForm] = useState(false);
  const [isThankYouModalOpen, setIsThankYouModalOpen] = useState(false);

  const predefinedAmounts = [200, 500, 1000];

  const {
    title,
    anotherAmount,
    inputPlaceholder,
    inputLabel,
    firstCheckboxLabel,
    secondCheckboxLabel,
    cardButton,
    submitError,
  } = translation;

  useEffect(() => {
    if (isAgreed) {
      setAgreementError(false);
    }
  }, [isAgreed]);

  const handleAmountSelect = useCallback((amount: number) => {
    setSelectedAmount(amount);
    setCustomAmount("");
  }, []);

  const handleCustomAmountChange = useCallback((value: string) => {
    setCustomAmount(value);
    setSelectedAmount(null);
  }, []);

  const handleCustomAmountFocus = useCallback(() => {
    setSelectedAmount(null);
  }, []);

  const currentAmount =
    selectedAmount || (customAmount ? parseInt(customAmount) : 0);

  const handlePayment = useCallback(() => {
    if (!isAgreed) {
      setAgreementError(true);
      setIsToastVisible(true);
      return;
    }

    console.log({
      amount: currentAmount,
      comment,
      wantNotifications,
      isAgreed,
    });
  }, [isAgreed, currentAmount, comment, wantNotifications]);

  const handleCardPaymentSubmit = useCallback(
    (cardData: ICardPaymentFormData) => {
      if (!isAgreed) {
        setAgreementError(true);
        setIsToastVisible(true);
        return;
      }

      try {
        console.log({
          amount: currentAmount,
          comment,
          wantNotifications,
          isAgreed,
          paymentType: "card",
          cardData,
        });

        setShowCardPaymentForm(false);
        setIsThankYouModalOpen(true);
      } catch (error) {
        console.error("Payment error", error);
      }
    },
    [
      isAgreed,
      currentAmount,
      comment,
      wantNotifications,
      setShowCardPaymentForm,
      setIsThankYouModalOpen,
    ]
  );
  return (
    <>
      <div className="flex relative flex-col items-center gap-6">
        <div className="mt-6 border border-[#FF9332] max-w-[350px] xl:max-w-[544px] p-3 xl:p-8 w-full">
          <p className="text-center text-[24px] uppercase leading-[130%] mb-4">
            {title}
          </p>
          <p className="text-center text-[36px] leading-[130%] text-[#777] mb-4">
            {formatAmount(currentAmount)} {currency}
          </p>
          <div className="grid grid-cols-3 gap-2 max-w-[400px] xl:max-w-[544px] mx-auto">
            {predefinedAmounts.map((amount) => (
              <AmountCard
                currency={currency}
                key={amount}
                amount={amount}
                formattedAmount={formatAmount(amount)}
                isSelected={selectedAmount === amount}
                onClick={handleAmountSelect}
              />
            ))}
            <div className="col-start-1">
              <CustomAmountCard
                anotherAmount={anotherAmount}
                currency={currency}
                value={customAmount}
                formatAmount={formatAmount}
                isSelected={selectedAmount === null && customAmount !== ""}
                onChange={handleCustomAmountChange}
                onFocus={handleCustomAmountFocus}
              />
            </div>
          </div>
        </div>

        <div className="w-full max-w-[350px] xl:max-w-[544px]">
          <TextInput
            value={comment}
            onChange={setComment}
            placeholder={inputPlaceholder}
            label={inputLabel}
          />

          <div className="space-y-4 mb-6">
            <CheckBox
              label={firstCheckboxLabel}
              checked={wantNotifications}
              onChange={(checked) => setWantNotifications(checked)}
            />
            <CheckBox
              label={secondCheckboxLabel}
              checked={isAgreed}
              onChange={(checked) => setIsAgreed(checked)}
              error={agreementError}
              required
            />
          </div>

          <div className="space-y-3">
            <PaymentButton paymentType="monoPay" onClick={handlePayment} />
            <PaymentButton paymentType="googlePay" onClick={handlePayment} />
            <PaymentButton
              text={cardButton}
              paymentType="card"
              onClick={() => setShowCardPaymentForm(!showCardPaymentForm)}
            />
          </div>
          {showCardPaymentForm && (
            <CardPaymentForm lang={lang} onSubmit={handleCardPaymentSubmit} />
          )}
        </div>
      </div>
      <ThankYouModal
        isOpen={isThankYouModalOpen}
        onClose={() => setIsThankYouModalOpen(false)}
        message={
          lang === "en"
            ? "Tails thank you for your donation"
            : "Хвостики дякують за ваш донат"
        }
        buttonText={lang === "en" ? "Got it" : "Зрозуміло"}
        title={lang === "en" ? "Thank you!" : "Дякуємо!"}
      />
      <Toast
        message={submitError}
        isVisible={isToastVisible}
        onClose={() => setIsToastVisible(false)}
      />
    </>
  );
};

export default React.memo(DonateAmountSection);
