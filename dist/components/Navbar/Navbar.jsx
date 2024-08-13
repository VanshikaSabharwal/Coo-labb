import Link from "next/link";
import React from "react";
import SignoutBtn from "../SignoutBtn/Signin";
var Navbar = function () {
    return (<div>
      <ul className="navbar my-5 mx-2.5 flex flex-row items-center justify-end gap-8">
        <li>
          <Link href="/rooms">Rooms</Link>
        </li>
        <li>
          <Link href="">Tasks Pending</Link>
        </li>
        <li>
          <SignoutBtn />
        </li>
      </ul>
    </div>);
};
export default Navbar;
