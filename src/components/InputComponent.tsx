import { Button, Card, Stack, TextField } from "@mui/material"

const InputComponent:React.FC<any> = ({label, inputRefVar, cancelFunc, addFunc,value=''}) => {
    return(
        <Card sx={{p:"10px",height:"100px"}}>
            <Stack direction="column">
                <TextField 
                    id="outlined-basic" 
                    autoComplete="off" 
                    variant="outlined"
                    defaultValue={value}
                    inputRef={inputRefVar}
                    label={label}
                    multiline={false}
                />
                <Stack direction="row" justifyContent="space-between" >
                    <Button onClick={cancelFunc}>Cancel</Button>
                    <Button onClick={addFunc} >{!!value ? "Rename":"Add"}</Button>
                </Stack>
            </Stack>
        </Card>
    )
}

export default InputComponent