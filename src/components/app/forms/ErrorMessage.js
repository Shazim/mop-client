function ErrorMessage({
  className: classes = 'text-primary',
  error,
  style,
  visible,
}) {
  if (!visible || !error) return null;
  return (
    <p className={`input-validation-error uppercase ${classes}`} style={style}>
      {error}
    </p>
  );
}

export default ErrorMessage;
