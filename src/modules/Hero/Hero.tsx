"use client";
import Button from "@/shared/components/Button/Button";
import { IHeroProps } from "@/shared/types";
import { motion } from "framer-motion";
import { fadeIn, slideUp, generalSlideUp } from "@/shared/utils";

const Hero = ({ translation }: IHeroProps) => {
  const { title, subtitle, text, button } = translation;
  return (
    <section className="mt-[65px] xl:mt-[105px] hero-bg pt-[381px] xl:pt-[497px] xl:pb-[43px] pb-[38px]">
      <div className="flex flex-col items-center justify-center">
        <motion.h2
          className="text-white font-arial text-[16px] font-black leading-[122%] uppercase xl:text-[36px] xl:font-extrabold"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideUp}
          custom={0.2}
        >
          {subtitle}
        </motion.h2>
        <motion.h1
          className="text-white text-center font-arial uppercase mt-[12px] leading-[122%] font-black text-[40px] xl:text-[118px] xl:font-extrabold"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          custom={0.5}
        >
          {title}
        </motion.h1>
        <motion.div
          className="flex flex-col items-center max-w-[300px] xl:flex-row xl:max-w-full xl:w-full xl:justify-between  xl:px-[73px] xl:mt-[48px]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.p
            className="text-white mt-[14px] text-center leading-[122%] text-[16px] px-[10px] xl:text-[20px] xl:max-w-[432px] xl:text-left"
            variants={generalSlideUp}
            custom={0.8}
          >
            {text}
          </motion.p>
          <motion.div variants={generalSlideUp} custom={1.0}>
            <Button className="mt-6 bg-orange text-dark" text={button} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
