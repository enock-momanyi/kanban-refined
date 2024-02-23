import { MoreHorizSharp } from '@mui/icons-material';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import React from 'react';
import MoreHorizSharpIcon from '@mui/icons-material/MoreHorizSharp';

const ColumnDropDown:React.FC<any> = ({functionSet}) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (e:any) => {
    setAnchorEl(e.currentTarget);
  };
  const handleClose = (action:Function) => {
    if(typeof action === 'function'){
      action()
    }
    setAnchorEl(null);
  };

  return (
    <div>
      <MoreHorizSharpIcon
        id="demo-positioned-button"
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Dashboard
      </MoreHorizSharpIcon>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
      >
        <MenuItem onClick={() => handleClose(functionSet.rename)}>Rename</MenuItem>
        <MenuItem onClick={()=> handleClose(functionSet.clear)}>Clear</MenuItem>
        <MenuItem onClick={() => handleClose(functionSet.deleteColumn)}>Delete</MenuItem>
      </Menu>
    </div>
  );
}

export default ColumnDropDown
