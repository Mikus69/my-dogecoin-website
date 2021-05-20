import React, { useState } from "react";
import Toolbar from "../Toolbar/Toolbar";
import Drawer from "../Drawer/Drawer";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const drawerToggleHandler = () => setMenu(!menu);

  return (
    <div>
      <Toolbar onClick={drawerToggleHandler} />
      <Drawer show={menu} />
    </div>
  );
};

export default Navbar;
