
import styles from "./Header.module.css";

const Header = (props) => {
  return (
    <div className = {styles.header}>
      <p>
        Aqui va el monto a partir del cual el envio de los productos es gratis
      </p>
      <div>
      {props.children}
      </div>
    </div>
  );
};
export default Header;
