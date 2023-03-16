const Link = ({href, target, rel, title, linkDescription})=>{
    return (
        <a href={href} target={target} rel={rel} title={title}>
        {linkDescription}
        </a>
    )
}
export default Link