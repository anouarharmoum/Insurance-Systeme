import { Link } from "@inertiajs/react";
import logo from "../../Images/Assurance_Logo.png";
export default function ApplicationLogo(props) {
    return (
        <Link >
      <img  className="my--2"width="150px" src={logo} alt="logo" class="logo" />
    </Link>
    );
}
// href={route("Homepage")}