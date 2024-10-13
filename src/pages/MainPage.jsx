import NavbarTop from "../components/NavbarTop";
import NavbarButtom from "../components/NavbarButtom";
import Summary from "../components/Summary";
import Stacks from "../components/Stacks";
import Experience from "../components/Experience";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";

function MainPage({ setCover }) {
  return (
    <div className="max-w-5xl mx-auto bg-primary">
      <NavbarTop setCover={setCover} />
      <Summary />
      <Stacks />
      <Experience />
      <Portfolio />
      <Contact />
      <NavbarButtom setCover={setCover} />
    </div>
  );
}

export default MainPage;
