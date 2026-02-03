import { Button, Col, Container, Row } from "react-bootstrap";
import "../Style/Hero.css";
import { useEffect, useState } from "react";
import { ArrowDownCircleFill, Javascript } from "react-bootstrap-icons";

const imageLogos = [
  {
    src: "/vecteezy_linkedin-logo-png-linkedin-icon-transparent-png_18930480.png",
    alt: "Linkedin",
    href: "https://www.linkedin.com/in/davide-mancini/",
  },
  {
    src: "/github-mark.png",
    alt: "GitHub",
    href: "https://github.com/Davide-Mancini",
  },
  {
    src: "/vecteezy_instagram-logo-png-instagram-icon-transparent_18930415.png",
    alt: "Instagram",
    href: "https://company3.com",
  },
  {
    src: "/Gmail_icon_(2020).svg.png",
    alt: "Gmail",
    href: "https://company3.com",
  },
];
const competenze = [
  {
    nome: "HTML",
    logo: "/HTML5_logo_and_wordmark.svg.png",
  },
  {
    nome: "CSS",
    logo: "/CSS3_logo_and_wordmark.svg.png",
  },
  {
    nome: "JavaScript",
    logo: "/Unofficial_JavaScript_logo_2.svg.png",
  },
  {
    nome: "React",
    logo: "/React-icon.svg.png",
  },
  {
    nome: "Bootstrap",
    logo: "/Bootstrap_logo.svg.png",
  },
  {
    nome: "Java",
    logo: "/Java_Logo.svg.png",
  },
  {
    nome: "Spring Boot",
    logo: "/Spring_Boot.svg.png",
  },
  {
    nome: "PostgreSQL",
    logo: "/Postgresql_elephant.svg.png",
  },
];
const Hero = () => {
  const username = "Davide-Mancini";
  const url = `https://api.github.com/users/${username}/repos?sort=updated&direction=desc`;
  const [Repo, setRepo] = useState([]);
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
  console.log(Repo);

  return (
    <>
      <Container
        className=" w-100 rounded-5 mb-4  "
        style={{ background: "#242323ff", border: "1px solid #c0b0b0" }}
      >
        <Row className=" d-flex w-100 text-light">
          <Col
            xs={12}
            className=" d-flex flex-column flex-md-row justify-content-center mt-4 align-items-center"
          >
            <img
              src="src/assets/photo_2025-12-01_23-01-03-removebg-preview.png"
              alt=""
              className=" rounded-circle w-25 "
              style={{ border: "2px solid #c0b0b0" }}
            />

            <div className=" ms-3 text-center">
              <h1 className=" fw-bolder mb-0">
                {"<"}Ciao, sono Davide Mancini{"/>"}
              </h1>
              <h5 className=" text-white-50 ">
                {"{"}Junior Full Stack Developer{"}"}
              </h5>
            </div>
          </Col>
          <Col xs={12} className=" ps-5 mt-5 d-flex flex-column">
            <p className=" fw-bolder">Chi sono?</p>
            <p>
              Sono Davide, un ex pizzaiolo e imprenditore con 6 anni di
              esperienza nella ristorazione, oggi in transizione verso il mondo
              tech. Dopo aver gestito la mia pizzeria per tre anni, ho deciso di
              trasformare la mia passione per l'informatica, e più nello
              specifico nel coding, in un lavoro frequentando il corso 𝙁𝙪𝙡𝙡
              𝙎𝙩𝙖𝙘𝙠 𝘿𝙚𝙫𝙚𝙡𝙤𝙥𝙚𝙧 presso 𝙀𝙥𝙞𝙘𝙤𝙙𝙚. Sono una persona curiosa, abituata
              a lavorare con dedizione e sempre pronta ad imparare cose nuove.
            </p>
          </Col>
          <Col xs={12} className=" ps-5 mt-5 ">
            <p className=" fw-bolder">Competenze</p>
            <div className=" d-flex flex-column flex-md-row">
              {competenze.map((c, i) => (
                <div
                  className=" bg-white m-2 rounded-4 w-100 text-center text-dark d-flex flex-column justify-content-between align-items-center "
                  style={{ cursor: "pointer" }}
                  key={i}
                >
                  <img
                    src={c.logo}
                    alt=""
                    className=" img-fluid mt-3 p-2"
                    style={{ width: "100px" }}
                  />
                  <p className=" fw-bold font-monospace fs-6">{c.nome}</p>
                </div>
              ))}
            </div>
          </Col>
          <Col xs={12} className=" px-5 mt-5">
            <p className=" fw-bolder">Social</p>
            <div className=" d-flex flex-column flex-md-row ">
              {imageLogos?.map((logo, i) => (
                <div
                  className="social bg-white m-2 rounded-4 w-100 text-center "
                  style={{ cursor: "pointer", height: "150px" }}
                  key={i}
                >
                  <a
                    href={logo.href}
                    className=" text-decoration-none d-flex flex-column justify-content-between align-items-center h-100"
                  >
                    <img
                      src={logo?.src}
                      alt=""
                      className=" img-fluid p-2"
                      style={{ width: "100px" }}
                    />
                    <p className=" fw-bold mt-3 text-center text-dark font-monospace ">
                      {logo?.alt}
                    </p>
                  </a>
                </div>
              ))}
            </div>
          </Col>
          <Col xs={12} className=" mt-5 ps-5">
            <p className=" fw-bolder">Progetto più recente</p>
            <div
              className=" d-flex p-3 rounded-4 flex-column flex-md-row "
              style={{
                border: "5px solid #706f70ff",
              }}
            >
              <img
                src={`https://raw.githubusercontent.com/${Repo[0]?.owner.login}/${Repo[0]?.name}/${Repo[0]?.default_branch}/preview.png`}
                alt=""
                className=" rounded-3 border border-light border-2 w-50 "
                // style={{ width: "350px", height: "200px" }}
              />
              <div className=" ms-3 d-flex justify-content-center flex-column ">
                <h3>{Repo[0]?.name}</h3>
                <p>{Repo[0]?.description}</p>
                <div className=" w-100 ">
                  <a
                    href={Repo[0]?.html_url}
                    className=" text-decoration-none text-dark"
                  >
                    <Button variant="light" className=" w-100 fw-bold p-3">
                      Vai alla Repository!
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </Col>
          <Col xs={12} className=" ps-5 my-5">
            <p className=" fw-bolder">Curriculum</p>
            <Button variant="light" className=" w-100 fw-bold p-3">
              <a href="/CV_Davide_Mancini.pdf" className=" text-dark">
                <ArrowDownCircleFill className=" fs-4 me-2" />
                Scarica Curriculum Completo!{" "}
              </a>
            </Button>
          </Col>

          {/* <div className=" d-flex mt-5 border border-white p-4 border-3 rounded-pill border-bottom-0">
            <Col className=" text-center fw-bold text-light" xs={6}>
              <h2 style={{ fontSize: "70px" }}>About Me</h2>
            </Col>
            <Col xs={6}>
              <p>
                Ex pizzaiolo e imprenditore con 6 anni di esperienza nella
                ristorazione, oggi in transizione verso il mondo tech. Dopo aver
                gestito la mia pizzeria per tre anni, ho deciso di reinventarmi
                frequentando il corso 𝙁𝙪𝙡𝙡 𝙎𝙩𝙖𝙘𝙠 𝘿𝙚𝙫𝙚𝙡𝙤𝙥𝙚𝙧 presso 𝙀𝙥𝙞𝙘𝙤𝙙𝙚. Sono
                una persona curiosa, abituata a lavorare con dedizione e sempre
                pronta ad imparare cose nuove.
              </p>
            </Col>
          </div>
          <div className=" d-flex  border border-white p-4 border-3 rounded-pill border-top-0">
            <Col xs={6}>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Distinctio, iste magni ipsam odio aut voluptatibus saepe
                assumenda officiis cumque quibusdam atque sunt animi suscipit
                quaerat eius illum alias. Molestiae, ad.
              </p>
            </Col>
            <Col xs={6} className=" text-center">
              <h2 style={{ fontSize: "70px" }}>Skills</h2>
            </Col>
          </div> */}
        </Row>
      </Container>
    </>
  );
};
export default Hero;
