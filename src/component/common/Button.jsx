import React from "react";

export default function Button(props) {
  const { label, onClick } = props;

  return (
    <>
      <button
        className="text-emas-asyik border-2 border-emas-asyik py-2 px-6 rounded-xl font-Century text-sm hover:shadow-lg hover:bg-white/20 transition-all duration-200"
        onClick={onClick}
      >
        {label}
      </button>
    </>
  );
}

Button.defaultProps = {
  label: "",
  onClick: () => {},
};
