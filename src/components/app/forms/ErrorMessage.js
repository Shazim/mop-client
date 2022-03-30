function ErrorMessage({
  className: classes = 'text-primary',
  error,
  style,
  visible,
}) {
  if (!visible || !error) return null;
  return (
    <p className={`input-validation-error ${classes}`} style={style}>
      {error}
    </p>
  );
}

export default ErrorMessage;
