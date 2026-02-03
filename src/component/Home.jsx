import Hero from "./Hero";
import StaggeredMenu from "./StaggeredMenu/StaggeredMenu";
import PillNav from "./PillNav";
const Home = () => {
  // const menuItems = [
  //   { label: "Home", ariaLabel: "Go to home page", link: "/" },
  //   { label: "Progetti", ariaLabel: "Learn about us", link: "/progetti" },
  //   {
  //     label: "Curriculum",
  //     ariaLabel: "View our services",
  //     link: "/CV_Davide_Mancini.pdf",
  //   },
  //   { label: "Contatti", ariaLabel: "Get in touch", link: "/contact" },
  // ];

  // const socialItems = [
  //   { label: "GitHub", link: "https://github.com/Davide-Mancini" },
  //   { label: "LinkedIn", link: "https://www.linkedin.com/in/davide-mancini/" },
  // ];
  return (
    <>
      <div
        style={{ height: "100vh", background: "#1a1a1a", position: "relative" }}
        className=" d-flex justify-content-center align-items-center overflow-x-hidden min-vh-100 "
      >
        {/* <StaggeredMenu
          position="left"
          items={menuItems}
          socialItems={socialItems}
          displaySocials={true}
          displayItemNumbering={true}
          menuButtonColor="#fff"
          openMenuButtonColor="#fff"
          changeMenuColorOnOpen={true}
          colors={["#B19EEF", "#5227FF"]}
          logoUrl=""
          accentColor="#ff6b6b"
          onMenuOpen={() => console.log("Menu opened")}
          onMenuClose={() => console.log("Menu closed")}
        /> */}
        <PillNav
          logo={"src/assets/photo_2025-12-01_23-01-03-removebg-preview.png"}
          logoAlt="Company Logo"
          items={[
            { label: "Home", href: "/" },
            { label: "Progetti", href: "/progetti" },
            { label: "Curriculum", href: "/CV_Davide_Mancini.pdf" },
          ]}
          activeHref="/"
          className="custom-nav"
          ease="power2.easeOut"
          baseColor="#c0b0b0"
          pillColor="#ffffff"
          hoveredPillTextColor="#ffffff"
          pillTextColor="#722a2a"
          theme="dark"
          initialLoadAnimation
        />
        <div
          style={{
            position: "absolute",
            top: "10%",
            zIndex: 1,
          }}
          className=" w-100 mx-5 px-5 mt-2"
        >
          <Hero />
        </div>
      </div>
    </>
  );
};
export default Home;
