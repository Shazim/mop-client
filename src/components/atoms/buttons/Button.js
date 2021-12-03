import PropTypes from "prop-types";
import { useMemo } from "react";

import "../../app/config/styles/style.scss";

function Button({
  children,
  className: classes = "",
  onClick,
  style,
  type = "contained",
  color = 'primary',
  transform = "capitalize",
  ...otherProps
}) {


  const btnClasses = useMemo(() => {
    let classes = 'font-bold';
    if (type == 'contained') {
      if (color.includes('primary')) {
        return `${classes} bg-${color} text-white tracking shadow text-sm`;
      } else {
        return `${classes} ${color} tracking shadow text-sm`;
      }
    } else {
      return `${classes} text-${color} border border-${color} text-base`;
    }
  }, [color, type])



  return (
    <button
      className={`${classes} ${btnClasses}`}
      onClick={onClick}
      style={style}
      {...otherProps}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  type: PropTypes.oneOf(["outline", "contained"]),
  color: PropTypes.oneOf(["primary", "primary-light", "primary-dark", "default", "default-light", "default-dark"]),
  transform: PropTypes.oneOf(["uppercase", "capitalize"]),
};

export default Button;
