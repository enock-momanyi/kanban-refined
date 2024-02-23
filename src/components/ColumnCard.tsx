import { TextField } from "@mui/material"

const ColumnCard: React.FC<any> = ({cardText,handleOnDrag}) => {
  
    return(
        <>
        <TextField
          id="outlined-multiline-flexible"
          multiline
          maxRows={4}
          defaultValue={cardText}
          sx={{width:"90%", mt:"6px", mb:"6px"}}
          draggable
          onDragStart={(e) => handleOnDrag(e)}
          disabled
        />
        </>
    )
}

export default ColumnCard