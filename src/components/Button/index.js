import React from "react";
import PropTypes from "prop-types";

const shapes = {
  icbCircleBorder20: "rounded-radius20255",
  RoundedBorder4: "rounded-radius4",
};
const variants = {
  icbFillPink600: "bg-pink_600",
  FillPink601: "bg-pink_601 text-white_A700",
  OutlineGray200:
    "bg-pink_50 border-bw05 border-gray_200 border-solid text-bluegray_900",
  FillGray201: "bg-gray_201 text-black_900",
};
const sizes = {
  smIcn: "xl:p-[10px] p-[12px] 3xl:p-[14px] lg:p-[9px]",
  sm: "p-[4px]",
  md: "lg:p-[6px] xl:p-[7px] p-[8px] 3xl:p-[9px]",
  lg: "lg:p-[10px] xl:p-[11px] p-[13px] 3xl:p-[15px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${shapes[shape] || ""} ${
        variants[variant] || ""
      } ${sizes[size] || ""} common-button `}
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
  shape: PropTypes.oneOf(["icbCircleBorder20", "RoundedBorder4"]),
  variant: PropTypes.oneOf([
    "icbFillPink600",
    "FillPink601",
    "OutlineGray200",
    "FillGray201",
  ]),
  size: PropTypes.oneOf(["smIcn", "sm", "md", "lg"]),
};
Button.defaultProps = {
  className: "",
  shape: "",
  variant: "FillPink601",
  size: "sm",
};

export { Button };
