import { useState } from "react";
import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faLocationDot,
  faRectangleList,
  faBars,
  faCookieBite,
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className="mt-5">
      <div className="menu-large">
        <button type="button" className="flex gap-2">
          <FontAwesomeIcon
            icon={faCookieBite}
            className="w-10 h-10 text-red-700"
          />
          <span className="text-lg font-bold text-red-700 m-auto">PASTRY</span>
        </button>
        <div className="ml-auto flex gap-14">
          <Button variant="ghost" className="p-3 hover:bg-transparent">
            <span className="text-lg text-red-700">Home</span>
          </Button>
          <Button
            variant="ghost"
            className="p-3 hover:bg-transparent hover:text-red-700"
          >
            <span className="text-lg">Location</span>
          </Button>
          <Button
            variant="ghost"
            className="p-3 hover:bg-transparent hover:text-red-700"
          >
            <span className="text-lg">Menu</span>
          </Button>
        </div>
      </div>
      <div className="menu-small relative">
        <button type="button" className="absolute top-1 left-0">
          <FontAwesomeIcon
            icon={faCookieBite}
            className="w-10 h-10 text-red-700"
          />
        </button>
        {openMenu && (
          <div
            className={`flex gap-3 transition-all duration-300 ${
              openMenu ? "block" : "hidden"
            } absolute top-1 right-16`}
          >
            <Button variant="ghost" className="p-3">
              <FontAwesomeIcon
                icon={faHouse}
                className="w-8 h-8 text-red-700"
              />
            </Button>
            <Button variant="ghost" className="p-3">
              <FontAwesomeIcon
                icon={faLocationDot}
                className="w-8 h-8 text-red-700"
              />
            </Button>
            <Button variant="ghost" className="p-3">
              <FontAwesomeIcon
                icon={faRectangleList}
                className="w-8 h-8 text-red-700"
              />
            </Button>
          </div>
        )}

        <Button
          onClick={() => setOpenMenu(!openMenu)}
          className="p-3 absolute top-1 right-0 bg-transparent hover:bg-transparent"
        >
          <FontAwesomeIcon icon={faBars} className="w-6 h-6 text-red-700" />
        </Button>
      </div>
    </div>
  );
};

export default Header;
