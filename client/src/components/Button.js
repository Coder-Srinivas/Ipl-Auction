const Button =({txt, handleClick = () => {}}) =>{
    return (
        <div className="btn" onClick={() => (handleClick())}>
            <p className="btn-link">
                {txt}
            </p>
        </div>
    )
}

export default Button;
