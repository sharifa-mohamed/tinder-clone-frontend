import React, { useEffect, useState, useContext } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Avatar1 from '../images/avatar1.jpg'
import { Button, TextField } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { SwipedContext } from '../Context/SwipedContext'


export default function Chat() {

    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const { selectedProfile } = useContext(SwipedContext);

    const sendMessage = () => {
        setMessages(oldArray => [...oldArray, message]);
        setMessage('');
    }

    return (
        <div>

            {selectedProfile && <Typography
                sx={{ display: 'block' }}
                component="span"
                variant="h6"
                color="pink"
                textAlign='center'

            >
                Chat with {selectedProfile}
            </Typography>}

            <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                {messages.map(msg => {
                    return (
                        <ListItem alignItems="center">
                            <ListItemAvatar>
                                <Avatar alt="Remy Sharp" src={Avatar1} />
                            </ListItemAvatar>
                            <ListItemText
                                secondary={
                                    <React.Fragment>
                                        <Typography
                                            sx={{ display: 'inline' }}
                                            component="span"
                                            variant="body2"
                                            color="text.primary"
                                        >
                                        </Typography>
                                        {msg}
                                    </React.Fragment>
                                }
                            />
                        </ListItem>
                    )
                })}
                <Divider variant="inset" component="li" />
            </List>

            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <TextField id="msg" focused placeholder="Enter Message" value={message} onChange={e => setMessage(e.target.value)}
                    style={{ width: '75%', marginRight: '10px' }}
                />
                <Button variant="contained" endIcon={<SendIcon />} onClick={sendMessage} >
                    Send
                </Button>
            </div>

        </div>
    );
}