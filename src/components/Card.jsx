import { useEffect, useState } from "react";

//Images
import desktopDivider from "/src/assets/pattern-divider-desktop.svg";
import mobileDivider from "/src/assets/pattern-divider-mobile.svg";
import dice from "/src/assets/icon-dice.svg";

const Card = () => {
  const [text, setText] = useState([]);
  const fetchAdvice = async () => {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();

    setText(data.slip);
  };

  useEffect(() => {
    fetchAdvice();
  }, []);

  return (
    <div className="card-wrapper bg-Purple w-[360px] lg:w-auto max-w-[350px] lg:max-w-lg height: 100%; p-7 mx-8 relative flex flex-col items-center rounded-[3.5rem]">
      <p className="advice-title text-[13px] text-bright-purple mt-4 tracking-[4px] ">
        ADVICE # {text.id}
      </p>
      <p className="advice-text text-[#d5dadc] text-center text-[24px] lg:text-[28px] mt-6 ">
        {text.advice}
      </p>
      <img
        src={mobileDivider}
        alt="quote-sign"
        className="quote-divider-mobile py-6 lg:hidden"
      />
      <img
        src={desktopDivider}
        alt="quote-sign"
        className="quote-divider-desktop py-7 hidden lg:block "
      />
      <button
        className="dice w-12 h-12 bg-bright-purple lg:hover:animate-spin hover:transition hover:ease-in-out hover:delay-150 hover:duration-700  hover:shadow-3xl flex flex-col justify-center items-center absolute -bottom-6 rounded-3xl"
        onClick={fetchAdvice}
        type="button"
      >
        <img src={dice} alt="dice" />
      </button>
    </div>
  );
};

export default Card;
