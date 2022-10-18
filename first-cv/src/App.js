import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import {Col, Tooltip, OverlayTrigger, Row} from "react-bootstrap";
import {FaPhoneSquare, FaEnvelopeSquare, FaLinkedin, FaGithubSquare} from "react-icons/fa";


function App() {
    return (
        <div className=" vh-100 container-fluid ">
            <div className="Header-container min-vh-25 ">
                Samantha Theerawat
                <h1> Full-stack webbutvecklare </h1>
            </div>
            <div className=" Content-container min-vh-75 ">
                <Row className=" row-cols-1  ">
                    <Col className=" col-md-3 d-flex flex-column justify-content-center text-center mt-3 mb-3 ">
                        <div>
                            <img src="./images/samantha13.jpg" alt="Samantha Theerawat"
                                 style={{width: "200px", height: "200px", border: "5px double saddlebrown"}}
                                 className="rounded-circle "/>
                        </div>

                        <div className="  d-flex flex-row justify-content-center text-center ">
                            <OverlayTrigger
                                overlay={<Tooltip id="tooltip-disabled">samanthathee0908@gmail.com</Tooltip>}>
                            <span className="d-inline-block">
                                <a className="mail" href="mailto:samanthathee0908@gmail.com">
                                    <FaEnvelopeSquare style={{pointerEvents: 'none'}} disabled/>
                                </a>
                            </span>
                            </OverlayTrigger>

                            <a className="github" href="https://github.com/samthe0908"><FaGithubSquare/></a>
                            <a className="linkedin"
                               href="https://www.linkedin.com/in/samantha-theerawat-b59438100/"><FaLinkedin/></a>

                            <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">0739-606265</Tooltip>}>
                            <span className="d-inline-block">
                            <FaPhoneSquare className="phone" style={{margin: "10px", pointerEvents: 'none'}} disabled/>
                            </span>
                            </OverlayTrigger>
                        </div>
                    </Col>

                    <Col className="col-md-7 d-flex flex-column mb-3 ">
                        <h1 className="text-center fw-bold fs-1 mt-3"> UTBILDNING</h1>
                        <div className="mt-2">
                            <h3 className="fw-bold"> Webbutveckling, Campus Mölndal <br/>Examensår: 2022</h3>
                            <h3> HTML, CSS, JavaScript, TypeScript, UX/UI, React.js, Node.js, Express.js,
                                API, MongoDB, RestAPI, Mongoose, SQL, NoSQL, MERN, frontend, backend, fullstack
                            </h3>
                        </div>
                        <div className="mt-3">
                            <h3 className="fw-bold"> International IATA & Amadeus Foundation <br/>Examensår: 2013</h3>
                            <h3> Utbildning och Certifiering i reguljära bokningssystem AMADEUS , Amadeus The
                                Essentials, Foundation in Travel And Tourism</h3>
                        </div>

                    </Col>
                </Row>

                <Row className="ms-5 me-5" style={{borderTop: "saddlebrown solid 3px "}}>>
                    <h1 className="text-center fw-bold fs-1 mt-0"> OM MIG</h1>
                    <h3 className="text-start my-5">
                        Efter mer än 30 år varav 22 år med egen verksamhet inom restaurangbranschen, känner att jag vill
                        ändra min karriär och testa på någon ny uppmaning. Det blev då programmering för det alltid har
                        legat i mitt intresse och kändes att det ligger rätt i tiden.
                        <br/><br/>
                        Jag är mycket driven person och utmanar mig hela tiden att prestera mitt absolut bästa. För mig
                        är detaljer lika viktiga som helheten och jag är snabb på att hitta lösningar på de problem som
                        uppstår.
                        <br/><br/>
                        Som person är jag positiv, glad, nyfiken och öppet för att lära mig nya saker, stresstålig ,
                        lugn, lätt att jobba med och har en stor portion humor.
                        <br/><br/>
                        Av min erfarenheten som egen företagare i 22 år, bidrog till att jag är målmedveten,
                        problemlösare, framåtdrivande, ödmjuk, beslutsamt, delaktig och uppmuntran, flexibel och lyhörd


                    </h3>
                    <h3 className="text-start my-3"> Språk: Svenska, Engelska, Thailändska (modersmål)</h3>
                    <h3 className="text-start mt-2 mb-3"> Körkort: Behörighet B</h3>
                </Row>

                <Row className="ms-5 me-5 " style={{borderTop: "saddlebrown solid 3px "}}>>
                    <Col className="d-flex flex-column mt-3 mb-3 ">
                        <Row>
                            <h1 className="text-center fw-bold fs-1 mt-3"> ARBETSLIVSERFARENHET</h1>
                        </Row>
                        <Row className=" d-flex mt-4 ">
                            <Col className="mt-3">
                                <h3>2000 – 2022 <br/>Restaurang Sala thai,Göteborg <br/>Egenföretagare med fyra
                                    anställda. </h3>
                            </Col>
                            <Col className="mt-3">
                                <h3>1999<br/>Liseberg, Göteborg <br/>Restaurang personal <br/>
                                    Jag sökte säsongarbete, fick stationerad på fastfood-restaurang. </h3>
                            </Col>
                            <Col className="mt-3">
                                < h3>1993 – 2000 <br/> Asiatiska restauranger, Göteborg <br/> Servitris/ Kokerska <br/>
                                    Jag tog restaurang jobb på flera olika restauranger och under denna period läser in
                                    behörighet till högskolan. </h3>
                            </Col>
                            <Col className="mt-3">
                                <h3>1991 – 1993 <br/>Restaurang Evergreen, Göteborg <br/> Servitris <br/>
                                    Heltid anställning, avslutade pga att restaurang stängdes</h3>
                            </Col>

                        </Row>
                    </Col>

                </Row>
            </div>
        </div>
    )
}

export default App;
