import NavbarTop from "../components/NavbarTop";
import NavbarButtom from "../components/NavbarButtom";
import Summary from "../components/Summary";

function MainPage({ setCover }) {
  return (
    <div className="max-w-5xl mx-auto">
      <NavbarTop setCover={setCover} />
      <Summary />
      <NavbarButtom setCover={setCover} />
    </div>
  );
}

export default MainPage;
