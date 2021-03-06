import React from 'react';
import {logOut} from "../../store/actions"
import {useDispatch, useSelector} from "react-redux";
import * as selectors from "../../store/selectors";

import {AppBar, IconButton, Typography} from '@mui/material';

import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import AccountCircle from "@mui/icons-material/AccountCircle";
import PixIcon from '@mui/icons-material/Pix';

import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Popover from "@mui/material/Popover";


import UserProfileModal from "./UserProfileModal";


const Header = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const dispatch = useDispatch();

    const logOutButtonHandler = () => {

        dispatch(logOut());

    }

    const currentUserName = useSelector(selectors.currentUserName);

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleChatIconClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClosePopover = () => {
        setAnchorEl(null);
    };

    const openPopover = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <AppBar position="static">
            <Toolbar>

                <IconButton color="inherit" onClick={handleChatIconClick}>
                    <PixIcon fontSize="medium"/>
                </IconButton>

                <Popover
                    id={id}
                    open={openPopover}
                    anchorEl={anchorEl}
                    onClose={handleClosePopover}

                    anchorOrigin={{
                        vertical: 'center',
                        horizontal: 'right',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                >
                    <Typography sx={{p: 1}}>Made by D.Arhipov</Typography>
                </Popover>

                <Box display={'flex'} alignItems={'center'} justifyContent={'flex-end'} flex={1} width={'200px'}>
                    <Typography variant="h6" component="div" onClick={handleOpen} sx={{
                        cursor: "pointer",
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                        paddingLeft: '1rem'
                    }}>

                        {currentUserName}
                    </Typography>

                    <IconButton color="inherit" onClick={handleOpen}>
                        <AccountCircle/>
                    </IconButton>

                    <IconButton color="inherit" onClick={logOutButtonHandler}>
                        <LogoutRoundedIcon fontSize="medium"/>
                    </IconButton>
                </Box>

            </Toolbar>
            <UserProfileModal handleClose={handleClose} handleOpen={handleOpen} open={open}/>
        </AppBar>
    );
};

export default Header;
