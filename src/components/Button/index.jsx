import React from "react";
import PropTypes from "prop-types";

const shapes = { square: "rounded-none", round: "rounded-[31px]" };
const variants = {
  fill: {
    white_A700: "bg-white-A700 text-gray-900",
    indigo_900: "bg-indigo-900",
  },
  gradient: { yellow_700_orange_100: "bg-gradient  text-gray-900" },
};
const sizes = {
  xs: "p-[15px]",
  sm: "p-[19px]",
  md: "p-[22px] sm:px-5",
  lg: "p-7 sm:px-5",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "round",
  size = "sm",
  variant = "gradient",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["square", "round"]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg"]),
  variant: PropTypes.oneOf(["fill", "gradient"]),
  color: PropTypes.oneOf(["white_A700", "indigo_900", "yellow_700_orange_100"]),
};

export { Button };
