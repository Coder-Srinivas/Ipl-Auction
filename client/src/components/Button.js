
const Button =({href, txt}) =>{
    return (
        <div className="btn">
            <a href={href} className="btn-link">
             {txt}
            </a>
            
        </div>
    )
}

export default Button;
