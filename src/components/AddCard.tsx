import { Button, Card } from "@mui/material"

const AddCard:React.FC<any> =({buttonText, buttonFunction})=>{
    return (
        <Card sx={{display:"flex", justifyContent:"center"}}>
            <Button onClick={buttonFunction}>{buttonText}</Button>
        </Card>
    )
}

export default AddCard