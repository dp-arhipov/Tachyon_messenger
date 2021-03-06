import React from 'react';

import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import Box from "@mui/material/Box";

function stringToColor(string) {
    let hash = 0;
    let i;

    for (i = 0; i < string.length; i += 1) {
        hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = '#';

    for (i = 0; i < 3; i += 1) {
        const value = (hash >> (i * 8)) & 0xff;
        color += `00${value.toString(16)}`.substr(-2);
    }

    return color;
}

function stringAvatar(id, isFavourites) {

    if (id) {
        const sx = {
            bgcolor: !isFavourites ? stringToColor(id) : '#1976d2',
        }
        if (isFavourites) {
            return {
                sx,
                children: '★'
            }
        }else return{
            sx
        }
    }

}


const Dialog = ({name, id, caption, unreadMessagesNumber,isFavourites, ...props}) => {

    return (
        <ListItem {...props} >

            <ListItemAvatar sx={{paddingLeft:1}}>
                <Avatar {...stringAvatar(id, isFavourites) }/>
            </ListItemAvatar>

                <ListItemText
                    primary={
                        <Typography sx={{
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap',
                            color: 'text.primary'
                        }}>
                            {name}
                        </Typography>
                    }
                    secondary={
                        <Typography sx={{
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap',
                            color: 'text.secondary',

                        }}>
                            {caption}
                        </Typography>
                    }
                />
            <Box>
                <Badge color="primary" badgeContent={unreadMessagesNumber} sx={{width: '1rem', marginRight:'0.5rem'}} />
            </Box>

        </ListItem>
    );
};

export default Dialog;