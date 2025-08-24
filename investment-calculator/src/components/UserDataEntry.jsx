export default function UserDataEntry({text, label, value, onChange}) {
    return (
        <p>
            <label htmlFor={label}>{text}</label>
            <input name={label} id={label} type="number" defaultValue={value} onChange={onChange} required />
        </p>
    )
}