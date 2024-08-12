import loader from "../assets/loader.svg";

export const Loader = () => {
  return (
    <img
      src={loader}
      alt="loading"
      className="mx-auto my-auto w-6 h-6 invert"
    />
  );
};
