import Link from "./Link"
import Icons from "./Icons"
import MoneyCounter from "./moneyCounter"

const LoginAndCart =()=>{
    return (
       <>
       <div>
        <Link href={"#"}target={"_self"} linkDesciption={"Crear Cuenta "}></Link>
        <Link href={"#"}target={"_self"} linkDesciption={" - Iniciar sesion"}></Link>
        </div>
        <div>
        <Icons content={"Logo de carrito "}/>
        <MoneyCounter content={0.0}/>
        </div>
       </> 
    )
}
export default LoginAndCart