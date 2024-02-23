import { Box, Stack, Typography } from "@mui/material"
import ColumnDropDown from "./ColumnDropDown"
import ColumnTitle from "./ColumnTitle"

const ColumnHeader:React.FC<any> = ({columnTitle, functionSet})=>{
    return (
        <Box>
        <Stack direction="row" justifyContent="space-between" sx={{mr:"3px", ml:"3px"}}>
            <ColumnTitle 
                columnTitle={columnTitle} 
            />
            <ColumnDropDown 
                functionSet={functionSet}
            />
        </Stack>
    </Box>
    )
}

export default ColumnHeader