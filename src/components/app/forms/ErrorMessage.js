function ErrorMessage({
  className: classes = 'text-primary',
  error,
  style,
  visible,
}) {
  if (!visible || !error) return null;
  return (
    <span
      className={`input-validation-error capitalize ${classes}`}
      style={style}
    >
      {error}
    </span>
  );
}

export default ErrorMessage;
