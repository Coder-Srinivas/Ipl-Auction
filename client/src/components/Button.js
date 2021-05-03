
const Button =({href, txt}) =>{
    return (
        <div className="btn">
            <a href={href} className="btn-link">
             {/* <span>{txt}</span> */}
             {txt}
            </a>
            
        </div>
    )
}

export default Button;
