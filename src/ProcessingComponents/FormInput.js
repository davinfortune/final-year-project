

const FormInput = (props) => {
    const {label, onChange, id, ...inputProps} = props;
    return (
        <div className = "formInput">
            <label>{label}</label>
            <input {...inputProps} onChange={onChange} required/>
        </div>
    );
};

export default FormInput;