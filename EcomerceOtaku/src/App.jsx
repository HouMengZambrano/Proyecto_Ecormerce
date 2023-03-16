import { useState } from "react";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import NavBarItems from "./components/NavBarItems";
import Logo from "./components/Logo";
import SearchInput from "./components/SearchInput";
import LoginAndCart from "./components/LoginAndCart";
import Main from "./components/Main";
import Premiere from "./components/Premiere";
import SwichArrow from "./components/SwichArrow";
import DebutProduct from "./components/DebutProduct";
import Link from "./components/Link";
import InfoCard from "./components/infoCard";
import Label from "./components/Label";
import HotDeals from "./components/HotDeals";
import ProductCard from "./components/ProductCard";



function App() {
  return (
    <div className="App">
      <Header>
      <Logo/>
      <SearchInput/>
      <LoginAndCart/>
      <NavBar>
      <NavBarItems href={"#"} linkDescription={"Inicio"}/>
      <NavBarItems href={"#"} linkDescription={"Productos"}/>
      <NavBarItems href={"#"} linkDescription={"Contacto"}/>
      <NavBarItems href={"#"} linkDescription={"Ofertas"}/>
      </NavBar> 
       </Header>
       <Main>
        <Premiere>
          {/*Este swich me tiene que hacer scroll a la izquierda de los productos nuevos */}
          <SwichArrow/>

          <DebutProduct/>
          {/*Este  swich me tiene que hacer scroll a la derecha de los productos nuevos */}
          <SwichArrow/>
        </Premiere>
        <Label>
        <InfoCard/>
        <InfoCard/>
        <InfoCard/>
        </Label>
        <HotDeals>
          {/* Aqui tengo que renderizar las productos en oferta haciendo un get*/}
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
          {/* El get de los productos de descuento me tiene que devolver al menos 10 productos y lo que va a hacer
          este swicharrow es que me haga un scrool derecha a izquierda para ver los que no me pueda mostrar segun el espacio*/}
          <SwichArrow/>
        </HotDeals>
       </Main>
    </div>
  );
}

export default App;
