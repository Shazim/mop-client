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
  autoComplete,
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
      autoComplete={autoComplete}
      {...otherProps}
    />
  );
}

export default Input;
