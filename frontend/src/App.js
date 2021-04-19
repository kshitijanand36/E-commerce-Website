import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./Screens/HomeScreen";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ProductScreen from "./Screens/ProductScreen";
function App() {
  return (
    <Router>
      <Header />
      {/* py-3 => to add padding to top and bottom  */}
      <main className='py-3'>
        <Container>
          <Route exact path='/' component={HomeScreen} ></Route>
          <Route path='/products/:id' component={ProductScreen}></Route>

        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
