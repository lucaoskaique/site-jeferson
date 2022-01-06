import Navbar from "@components/Navbar";
import Rodape from "@components/Rodape";

const LayoutDefault = ({children}: any) => {
  return (
    <>
      <Navbar />
        {children}
      <Rodape />
    </>
  );
}

export default LayoutDefault;