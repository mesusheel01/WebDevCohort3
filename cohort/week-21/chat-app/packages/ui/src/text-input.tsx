
interface propType{
    placeholder: string;
    size: 'big' | 'small';
}

export function TextInput({
    placeholder,
    size,

}: propType){
    return <input placeholder={placeholder}  style={{
        padding: size === "big"?20:10,
        margin: size === "big"?20:10,
        borderColor: "black",
        borderWidth: 1,
    }} />
}