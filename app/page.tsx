import { Navbar, NavbarItem, NavbarButton } from "../components/Navbar";
import { DemoContent } from "../components/DemoContent";
import LightRays from "../components/LightRays";
import ClickSpark from "../components/ClickSpark";
import UspPage from "../components/Usp-page";
import Footer from "../components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="lightdiv absolute inset-0 z-[1] opacity-40">
        <LightRays
          raysOrigin="top-center"
          raysColor="#000000"
          raysSpeed={2}
          lightSpread={1.2}
          rayLength={1.9}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.01}
          className="custom-rays z-[-1] absolute inset-0 pointer-events-none"
        />
      </div>
      <Navbar>
        <NavbarItem label="Home" href="#home" />
        <NavbarItem label="Shop" href="#shop" />
        <NavbarItem label="About" href="/about-us" />
        <NavbarItem label="" href="#docs" />
        <NavbarButton label="Login" href="#login" variant="simple" />
        <NavbarButton label="Signup" href="#signup" variant="colored" />
      </Navbar>

      <DemoContent />

      <ClickSpark
        sparkColor="#333"
        sparkSize={10}
        sparkRadius={15}
        sparkCount={8}
        duration={400}
      >

        <UspPage />

      </ClickSpark>
      <Footer />
    </div>
  );
}

