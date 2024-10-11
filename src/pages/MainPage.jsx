import NavbarTop from "../components/NavbarTop";
import NavbarButtom from "../components/NavbarButtom";
import Summary from "../components/Summary";
import Stacks from "../components/Stacks";

function MainPage({ setCover }) {
  return (
    <div className="max-w-5xl mx-auto">
      <NavbarTop setCover={setCover} />
      <Summary />
      <Stacks />
      <NavbarButtom setCover={setCover} />
    </div>
  );
}

export default MainPage;
