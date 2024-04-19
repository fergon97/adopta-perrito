import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Header from "./components/Header";
import MyCard from "./components/MyCard";
import Footer from "./components/Footer";

function App() {
  const headerTitle = "Adopta un perrito";
  return (
    <>
      <Container fluid className="g-3">
        <Row>
          <Header title={headerTitle} />
        </Row>

        <Row xs={1} md={4} className="g-3 m-4">
          <Col>
            <MyCard
              srcImg={
                "https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313_1280.jpg"
              }
              dogName={"Luna"}
              dogDescription={
                "Luna es una perrita de tamaño mediano, de pelaje blanco como la nieve. Es muy juguetona y le encanta corretear por el parque. A pesar de su energía, también disfruta de largas siestas a la sombra de un árbol."
              }
              bgTag={"info"}
              textTag={"Labrador"}
            />
          </Col>

          <Col>
            <MyCard
              srcImg={
                "https://cdn.pixabay.com/photo/2016/03/27/21/16/pet-1284307_1280.jpg"
              }
              dogName={"Canela"}
              dogDescription={
                "Canela es una perrita pequeña, con un manto de color marrón claro que recuerda al aroma y el calor de la canela. Es una compañera leal y cariñosa, siempre dispuesta a dar amor a quien la necesite."
              }
              bgTag={"success"}
              textTag={"Puggle"}
            />
          </Col>
          <Col>
            <MyCard
              srcImg={
                "https://cdn.pixabay.com/photo/2017/06/24/09/13/continental-bulldog-2437110_1280.jpg"
              }
              dogName={"Lola"}
              dogDescription={
                "Lola es una perrita de raza mixta, con un pelaje de color café claro que le da un aspecto único y encantador. Es ideal para hogares que buscan una compañera fiel y calmada."
              }
              bgTag={"danger"}
              textTag={"Bulldogge"}
            />
          </Col>
          <Col>
            <MyCard
              srcImg={
                "https://cdn.pixabay.com/photo/2017/07/31/21/15/dog-2561134_1280.jpg"
              }
              dogName={"Brisa"}
              dogDescription={
                "Brisa es una perrita de raza pequeña, con un pelaje negro en la parte superior y manchas café por debajo, lo que le da un aspecto único y encantador. Es muy activa y le encanta explorar nuevos lugares, pero también es muy cariñosa y disfruta de los mimos y las caricias de sus seres queridos."
              }
              bgTag={"warning"}
              textTag={"Dachshund"}
            />
          </Col>
        </Row>

        <Row>
          <Footer />
        </Row>
      </Container>
    </>
  );
}

export default App;
