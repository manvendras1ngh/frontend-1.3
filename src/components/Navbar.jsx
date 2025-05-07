import { PiAirplaneTaxiingFill } from "react-icons/pi";
import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "1rem",
        alignItems: "center",
      }}
    >
      <PiAirplaneTaxiingFill style={{ fontSize: "3rem" }} />

      <ul style={{ padding: "0", listStyle: "none", display: "flex" }}>
        <li>
          <Link
            style={{
              textDecoration: "none",
              fontSize: "1.5rem",
              padding: "0 1rem",
            }}
            to="/books"
          >
            Books
          </Link>
        </li>
        <li>
          <Link
            style={{
              textDecoration: "none",
              fontSize: "1.5rem",
            }}
            to="/hotels"
          >
            Hotels
          </Link>
        </li>
      </ul>
    </nav>
  );
}
