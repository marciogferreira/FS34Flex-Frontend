import { createContext, useState } from "react";

export const AuthContext = createContext();

export default function AuthProvider(props) {

    const[autorizado, setAutorizado] = useState(false)

    return (
        <AuthContext.Provider value={{ autorizado, setAutorizado }}>
            {props.children}
        </AuthContext.Provider>
    )
}