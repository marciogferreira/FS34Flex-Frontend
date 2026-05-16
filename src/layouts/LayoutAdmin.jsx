import { NavLink } from "react-router";

export default function LayoutAdmin(props) {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-3">
                    <NavLink to={"/admin"}>
                        Dashboard
                    </NavLink>
                    <br />
                    <NavLink to={"/admin/produtos"}>
                        Produtos
                    </NavLink>
                </div>
                <div className="col-md-9">
                    {props.children}
                </div>
            </div>
        </div>
    )
}