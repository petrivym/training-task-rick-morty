import "./ErrorPage.scss";

const ErrorPage = () => {
  return (
    <div className="error-container grid-container grid-content-full">
      <div className="error-wrapper grid-content">
        <div className="error-code typography-heading-lg">
          Code Error: 404
        </div>
        <div className="error-text typography-heading-md">
          Error text Error text Error text Error text Error text
        </div>
      </div>
    </div>
  )
};

export default ErrorPage;
