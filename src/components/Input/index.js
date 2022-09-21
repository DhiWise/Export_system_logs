import { ErrorMessage } from "../../components/ErrorMessage";
import React from "react";
import PropTypes from "prop-types";

const variants = {
  srcOutlineGray400: "border border-gray_400 border-solid",
  OutlineGray400: "border border-gray_400 border-solid",
};
const shapes = {
  srcRoundedBorder4: "rounded-radius4",
  RoundedBorder4: "rounded-radius4",
};
const sizes = {
  smSrc: "p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[8px]",
  sm: "p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[8px]",
};

const Input = React.forwardRef(
  (
    {
      wrapClassName = "",
      className = "",
      name,
      placeholder,
      type = "text",
      children,
      errors = [],
      label = "",
      prefix,
      suffix,
      shape,
      variant,
      size,
      ...restProps
    },
    ref
  ) => {
    return (
      <>
        <div
          className={`${wrapClassName} ${shapes[shape] || ""} ${
            variants[variant] || ""
          } ${sizes[size] || ""}`}
        >
          {!!label && label}
          {!!prefix && prefix}
          <input
            ref={ref}
            className={`${className} bg-transparent border-0`}
            type={type}
            name={name}
            placeholder={placeholder}
            {...restProps}
          />
          {!!suffix && suffix}
        </div>
        {!!errors && <ErrorMessage errors={errors} />}
      </>
    );
  }
);

Input.propTypes = {
  wrapClassName: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  shape: PropTypes.oneOf(["srcRoundedBorder4", "RoundedBorder4"]),
  variant: PropTypes.oneOf(["srcOutlineGray400", "OutlineGray400"]),
  size: PropTypes.oneOf(["smSrc", "sm"]),
};
Input.defaultProps = {
  wrapClassName: "",
  className: "",
  name: "",
  placeholder: "",
  type: "text",
  shape: "srcRoundedBorder4",
  variant: "srcOutlineGray400",
  size: "smSrc",
};

export { Input };
