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
          <SwichArrow/>
          <DebutProduct/>
          <SwichArrow/>
        </Premiere>
        <Label>
        <InfoCard/>
        <InfoCard/>
        <InfoCard/>
        </Label>
       </Main>
    </div>
  );
}

export default App;
