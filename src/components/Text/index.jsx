import React from "react";

const sizeClasses = {
  txtRubikRomanRegular20: "font-normal font-rubik",
  txtKrubMedium16Yellow700: "font-krub font-medium",
  txtRubikRomanSemiBold35: "font-rubik font-semibold",
  txtRubikRomanRegular25Yellow70002: "font-normal font-rubik",
  txtRubikRomanBold60: "font-bold font-rubik",
  txtRubikRomanMedium25: "font-medium font-rubik",
  txtLeagueSpartanRegular20: "font-leaguespartan font-normal",
  txtThabit20: "font-medium font-thabit",
  txtRubikRomanRegular25: "font-normal font-rubik",
  txtRubikRomanSemiBold40: "font-rubik font-semibold",
  txtKrubMedium16Gray20001: "font-krub font-medium",
  txtSyneBold20: "font-bold font-syne",
  txtKrubRegular16: "font-krub font-normal",
  txtKrubMedium16: "font-krub font-medium",
  txtKrubMediumItalic16: "font-krub font-medium italic",
  txtKrubMedium14: "font-krub font-medium",
  txtTimesNewRomanPSMT20: "font-normal font-timesnewroman",
  txtLeagueSpartanRegular20WhiteA700: "font-leaguespartan font-normal",
  txtKrubMedium16Gray90003: "font-krub font-medium",
  txtKrubMedium16Gray90001: "font-krub font-medium",
  txtRubikRomanMedium20: "font-medium font-rubik",
  txtKrubSemiBold16WhiteA700: "font-krub font-semibold",
  txtRubikRomanMedium20Gray90003: "font-medium font-rubik",
  txtKrubMediumItalic16WhiteA700: "font-krub font-medium italic",
  txtKrubMedium16Bluegray500: "font-krub font-medium",
  txtRubikRomanSemiBold35WhiteA700: "font-rubik font-semibold",
  txtRubikRomanSemiBold30: "font-rubik font-semibold",
  txtRubikRomanRegular14: "font-normal font-rubik",
  txtKrubSemiBold16: "font-krub font-semibold",
  txtRubikRomanSemiBold50: "font-rubik font-semibold",
  txtRubikRomanRegular14Gray90001: "font-normal font-rubik",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
