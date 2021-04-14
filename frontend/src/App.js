import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./Screens/HomeScreen";
import { Container, Navbar } from "react-bootstrap";
function App() {
  return (
    <>
      <Header />
      {/* py-3 => to add padding to top and bottom  */}
      <main className='py-3'>
        <Container>
          <HomeScreen />

        </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;
