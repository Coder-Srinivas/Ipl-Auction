import Input from './Input';


/*
Elements passed to form:

1) Title of the form
2) An array, where every element contains => type, placeholder, onChange, icon, error.
3) An additional message function, could be null.
4) onFormSubmit function
5) error 

*/

const Form = ({ title, data, onFormSubmit, message = () => {}, error }) => {
    return (
        <div className="form">
            <div className="form-container">
                <h3 className="form-container-title">{title}</h3>
                <form id="form" onSubmit={onFormSubmit} noValidate>
                    {data.map((inputFields, index) => {
                        return <Input key={index} {...inputFields} />
                    })}
                    <div className="btn">
                        <input type='submit' value={title} className="btn-link"/>
                    </div>
                </form>
                <p className={error === '' ? 'invisible' : 'error'}>{error}</p>
                <div className="form-container-additional">
                    {message()}
                </div>
            </div>
        </div>
    )
}

export default Form
