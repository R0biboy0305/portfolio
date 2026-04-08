export default function Input({placeholder, name, type}: {placeholder: string, name: string, type: string}) {
        return (
            <input className="text-white placeholder:text-white/70 shadow-xl p-4 rounded-2xl" type={type} placeholder={placeholder} name={name} />
        )
}