import { useSelector } from "react-redux";

const Preloader = () => {
  const loading = useSelector((state) => state.commonSlice.loading);

  if (!loading) return null;

  return (
    <div id="preloader_s" style={{ zIndex: 9999999 }}>
      <div id="loader_s"></div>
    </div>
  );
};

export default Preloader;
