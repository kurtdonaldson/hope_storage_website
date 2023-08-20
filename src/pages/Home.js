import Header from "../components/Header";
import Navigation from "../components/Navigation";
import SafeStorage from "../components/SafeStorage";
import logo from "../images/hope_storage_logo.png";

function Home() {
  return (
    <div className="home_div">
      <Header />
      <Navigation />
      <SafeStorage />
      <div className="image_div">
        <img className="logo" src={logo} alt="" />
      </div>
    </div>
  );
}

export default Home;
