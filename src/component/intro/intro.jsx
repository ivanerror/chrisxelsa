import React from "react";
import Button from "../common/Button";
import { motion, AnimatePresence } from "framer-motion";

export default function intro(props) {
  const { onClickBukaUndangan, isOpened, name } = props;
  return (
    <>
      <AnimatePresence>
        {!isOpened && (
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, duration: 2 }}
            className="flex items-center flex-col relative min-h-screen"
          >
            <img
              className="absolute bottom-0 left-0 -z-2"
              src="/img/aksen-emas-1.png"
              alt=""
            />
            <img
              className="absolute top-0 right-0 -z-2"
              src="/img/aksen-emas-2.png"
              alt=""
            />
            <img
              className="mt-20 w-5/6 lg:w-2/3 z-10"
              src="/img/intro_flower.png"
              alt=""
            />
            <img className="mt-10 px-2" src="/img/chrisxelsa.png" alt="" />
            <div>
              <div className="text-white text-center">
                Kepada Yth Bpk/Ibu/Saudara/i:
              </div>
              <div className="text-white font-bold text-center font-Century">
                {name}
              </div>
              <div className="text-white text-center">Di tempat.</div>
            </div>
            <div className="mt-10 z-10">
              <Button label={"Buka Undangan"} onClick={onClickBukaUndangan} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
