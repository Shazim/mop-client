function Input({
  className: classes,
  defaultValue,
  name,
  onBlur,
  onChange,
  placeholder,
  style,
  values,
  readOnly,
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
      readOnly={readOnly}
      {...otherProps}
    />
  );
}

export default Input;
