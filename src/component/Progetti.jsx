import { useEffect, useState } from "react";
import { Badge, Button, Col, Container, Row } from "react-bootstrap";
import { ArrowLeftCircleFill } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import PillNav from "./PillNav";

const Progetti = () => {
  const username = "Davide-Mancini";
  const url = `https://api.github.com/users/${username}/repos?sort=updated&direction=desc`;
  const [Repo, setRepo] = useState([]);
  //   const [languages, setLanguages] = useState({});
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((repos) => {
        setRepo(repos);
      })
      .catch((error) =>
        console.error("Errore nel recupero delle repository:", error),
      );
  }, []);
  //   useEffect(() => {
  //     fetch("https://api.github.com/repos/Davide-Mancini/Netflix-Copy/languages")
  //       .then((response) => response.json())
  //       .then((languages) => {
  //         setLanguages(languages);
  //       })
  //       .catch((error) =>
  //         console.error("Errore nel recupero delle repository:", error),
  //       );
  //   }, []);
  //   console.log(languages);

  return (
    <>
      <Container
        fluid
        style={{ background: "#1a1a1a", position: "relative" }}
        className=" d-flex justify-content-center align-items-center overflow-x-hidden min-vh-100 text-light  "
      >
        <PillNav
          logo={"src/assets/photo_2025-12-01_23-01-03-removebg-preview.png"}
          logoAlt="Company Logo"
          items={[
            { label: "Home", href: "/" },
            { label: "Progetti", href: "/progetti" },
            { label: "Curriculum", href: "/CV_Davide_Mancini.pdf" },
          ]}
          activeHref="/progetti"
          className="custom-nav"
          ease="power2.easeOut"
          baseColor="#c0b0b0"
          pillColor="#ffffff"
          hoveredPillTextColor="#ffffff"
          pillTextColor="#722a2a"
          theme="dark"
          initialLoadAnimation
        />
        <Row
          style={{
            position: "absolute",
            top: "10%",
            zIndex: 1,
          }}
          className=" w-100 mx-5 px-5 mt-2"
        >
          <div className=" d-flex align-items-center justify-content-center">
            <Link to="/" className=" text-decoration-none text-light me-auto">
              <ArrowLeftCircleFill className=" me-auto fs-3" />
            </Link>
            <h1 className=" text-center me-auto">Progetti</h1>
          </div>
          {Repo.map((repo, i) => (
            <Col xs={12} md={6} className=" mt-5 ps-5" key={i}>
              <p className=" fw-bolder">Progetto più recente</p>
              <div
                className=" d-flex p-3 rounded-4 flex-column  "
                style={{
                  border: "5px solid #706f70ff",
                  height: "468px",
                }}
              >
                <div className=" w-100 " style={{ height: "250px" }}>
                  <img
                    src={`https://raw.githubusercontent.com/${repo?.owner.login}/${repo?.name}/${repo?.default_branch}/preview.png`}
                    alt=""
                    className=" rounded-3 border border-light border-2 w-100 h-100 object-fit-cover"
                    onError={(e) => {
                      e.currentTarget.src = "src/assets/noimg.png";
                    }}
                    // style={{ width: "350px", height: "200px" }}
                  />
                </div>
                <div className=" ms-3 d-flex justify-content-center flex-column">
                  <h3>
                    {repo?.name}{" "}
                    <span>
                      <Badge
                        bg="warning"
                        text="dark"
                        style={{ fontSize: "13px" }}
                      >
                        {repo?.language}
                      </Badge>
                    </span>
                  </h3>
                  <p>{repo?.description}</p>
                  <div className=" w-100">
                    <a
                      href={repo?.html_url}
                      className=" text-decoration-none text-dark"
                    >
                      <Button variant="light" className=" w-100 fw-bold p-3 ">
                        Vai alla Repository!
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </Col>
          )).slice(0, 10)}
        </Row>
      </Container>
    </>
  );
};
export default Progetti;
