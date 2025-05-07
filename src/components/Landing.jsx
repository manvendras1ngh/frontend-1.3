import { Navbar } from "./Navbar";

import { PiAirplaneTakeoffLight } from "react-icons/pi";

export function Landing() {
  return (
    <div>
      <Navbar />
      <div style={{ textAlign: "center" }}>
        <h1 style={{ marginTop: "10rem" }}>
          Go to your desired page, just click on any of the above links.
        </h1>
        <PiAirplaneTakeoffLight style={{ fontSize: "5rem" }} />
      </div>
    </div>
  );
}
