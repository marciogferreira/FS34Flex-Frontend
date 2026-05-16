import { useContext } from "react"
import { AuthContext } from "../../../contexts/AuthContext"

function DashboardPage() {

    const { setAutorizado } = useContext(AuthContext)
    function handleLogout() {
        setAutorizado(false)
    }

    return (
        <>
            <a href="" onClick={handleLogout}>Sair</a>
            <h1>Dashboard</h1>
        </>
    )
}

export default DashboardPage