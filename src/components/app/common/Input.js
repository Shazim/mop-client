function Input({
  className: classes,
  defaultValue,
  name,
  onBlur,
  onChange,
  placeholder,
  style,
  values,
  ...otherProps
}) {
  return (
    <input
      className={`${classes} input`}
      defaultValue={defaultValue}
      name={name}
      onBlur={onBlur}
      onChange={onChange}
      placeholder={placeholder}
      style={style}
      {...otherProps}
    />
  );
}

export default Input;
