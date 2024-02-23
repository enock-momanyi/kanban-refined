import { Breadcrumbs, Link } from "@mui/material"

const MyHeader:React.FC = () => {
    return(
        <>
        <h1>Kanban</h1>
        <Breadcrumbs separator=">">
            <Link>
            Dashboard
            </Link>
            <Link>
            Kanban
            </Link>
        </Breadcrumbs>
        </>

    )
}

export default MyHeader