import { Navbar, NavbarItem, NavbarButton } from "../components/Landing-page-comp/Navbar";
import ClickSpark from "../components/Landing-page-comp/ClickSpark";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
  
      <Navbar>
        <NavbarItem label="Home" href="#home" />
        <NavbarItem label="Shop" href="#shop" />
        <NavbarItem label="About" href="/about" />
        <NavbarItem label="" href="#docs" />
        <NavbarButton label="Login" href="#login" variant="simple" />
        <NavbarButton label="Signup" href="#signup" variant="colored" />
      </Navbar>

     

      <ClickSpark
        sparkColor="#333"
        sparkSize={10}
        sparkRadius={15}
        sparkCount={8}
        duration={400}
      >

       

      </ClickSpark>
    
    </div>
  );
}

