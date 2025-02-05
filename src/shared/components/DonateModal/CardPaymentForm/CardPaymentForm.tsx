"use client";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { InputMask } from "@react-input/mask";
import getCardPaymentSchema from "@/shared/formsConfigs/cardPaymentSchema";
import { ICardPaymentFormData, ICardPaymentFormProps } from "@/shared/types";
import { cn } from "@/shared/utils";
import Button from "../../Button/Button";
import { useCallback } from "react";

const CardPaymentForm = ({ onSubmit, lang = "uk" }: ICardPaymentFormProps) => {
  const cardPaymentSchema = getCardPaymentSchema(lang);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(cardPaymentSchema),
  });

  const handleFormSubmit = useCallback(
    (data: ICardPaymentFormData) => {
      onSubmit(data);
    },
    [onSubmit]
  );

  return (
    <div
      className="animate-slide-up transform transition-transform duration-300 
      bg-white rounded-t-xl  py-6"
    >
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <div className="mb-4">
          <label htmlFor="cardNumber" className="block mb-2">
            {lang === "uk" ? "Номер картки" : "Card Number"}
          </label>
          <Controller
            name="cardNumber"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <InputMask
                {...field}
                mask="#### #### #### ####"
                replacement="#"
                className={cn(
                  "w-full p-2 border rounded",
                  errors.cardNumber ? "border-red-500" : "border-gray-300"
                )}
                placeholder={
                  lang === "uk" ? "0000 0000 0000 0000" : "0000 0000 0000 0000"
                }
              />
            )}
          />
          {errors.cardNumber && (
            <p className="text-red-500 text-sm mt-1">
              {errors.cardNumber.message}
            </p>
          )}
        </div>

        <div className="flex space-x-4 mb-4">
          <div className="flex-1">
            <label htmlFor="expiryDate" className="block mb-2">
              {lang === "uk" ? "Термін дії" : "Expiry Date"}
            </label>
            <Controller
              name="expiryDate"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <InputMask
                  {...field}
                  mask="##/##/####"
                  replacement="#"
                  className={cn(
                    "w-full p-2 border rounded",
                    errors.expiryDate ? "border-red-500" : "border-gray-300"
                  )}
                  placeholder={lang === "uk" ? "ДД/ММ/РРРР" : "DD/MM/YYYY"}
                />
              )}
            />
            {errors.expiryDate && (
              <p className="text-red-500 text-sm mt-1">
                {errors.expiryDate.message}
              </p>
            )}
          </div>

          <div className="flex-1">
            <label htmlFor="cvv" className="block mb-2">
              CVV2
            </label>
            <Controller
              name="cvv"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <InputMask
                  {...field}
                  mask="###"
                  replacement="#"
                  className={cn(
                    "w-full p-2 border rounded",
                    errors.cvv ? "border-red-500" : "border-gray-300"
                  )}
                  placeholder="000"
                />
              )}
            />
            {errors.cvv && (
              <p className="text-red-500 text-sm mt-1">{errors.cvv.message}</p>
            )}
          </div>
        </div>

        <div className="flex space-x-4">
          <Button
            type="submit"
            className="w-full"
            variant="secondary"
            text={lang === "uk" ? "Оплатити" : "Pay"}
          />
        </div>
      </form>
    </div>
  );
};

export default CardPaymentForm;
