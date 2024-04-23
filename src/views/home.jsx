import NavigationBar from "../components/NavigationBar";
import "../style/landingpage.css";
import Carousels from "../components/Carousels";
import Tables  from "../components/Tables";

function Home() {
  return (
    <>
      <NavigationBar />
      <Carousels />
      <Tables />
    </>
  );
}

export default Home;
