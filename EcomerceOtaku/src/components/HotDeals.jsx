const  HotDeals = (props) =>{
    return (
        <>
        <div>
            <h3>Productos en descuento</h3>
        </div>
        <div>
            {props.children}
        </div>
        </>
    )
}
export default HotDeals