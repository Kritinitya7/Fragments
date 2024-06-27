// eslint-disable-next-line react/prop-types
const ErrorMessage = ({ items }) => {
  // eslint-disable-next-line react/prop-types
  return <>{items.length === 0 && <h3>I am still Hungary.</h3>}</>;
};
export default ErrorMessage;
