
export default function decorateStyledComponent( Component, props, forwardedRef ) {
  const { children, ...rest } = props;

  return (
    <Component ref={forwardedRef} {...rest}>
      {children}
    </Component>
  );
};
