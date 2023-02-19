import { TailSpin } from "react-loader-spinner";
import "./LoadingSpinner.scss";

function LoadingSpinner() {
  return (
    <div className="loading">
      <TailSpin
        height="200"
        width="200"
        color="#7FFFD4"
        ariaLabel="tail-spin-loading"
        radius="2"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
}

export default LoadingSpinner;
