import { useContext } from "react"
import { AuthContext } from "../../../contexts/AuthContext"
import LayoutAdmin from "../../../layouts/LayoutAdmin"

function DashboardPage() {

    const { setAutorizado } = useContext(AuthContext)
    function handleLogout() {
        setAutorizado(false)
    }

    return (
        <>
          
            <LayoutAdmin>
<               a href="" onClick={handleLogout}>Sair</a>
                <h1>Dashboard</h1>
            </LayoutAdmin>
            
        </>
    )
}

export default DashboardPage