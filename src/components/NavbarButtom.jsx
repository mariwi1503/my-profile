import { NavMenu } from "../constant";

function NavbarButtom({ setCover }) {
  return (
    <div className="fixed bottom-0 w-full bg-gray-200 block md:hidden text-primary h-12">
      <div className="flex gap-2 justify-evenly items-center h-full font-bold">
        {NavMenu.map((menu, index) => (
          <a
            key={index}
            href={`#${menu.link}`}
            className="px-2 py-1 text-sm rounded-md transition-colors duration-300 active:bg-primary active:text-gray-200 flex items-center h-full"
            onClick={() => menu.title === "Home" && setCover(true)}
          >
            {menu.title}
          </a>
        ))}
      </div>
    </div>
  );
}

export default NavbarButtom;
