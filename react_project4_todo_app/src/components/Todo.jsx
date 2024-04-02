import {
    Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import React from "react";
import './Todo.css'


const Todo = (props) => {
  return (
    <>
    <ListItem alignItems="flex-start" className="todo__list">
     <ListItemAvatar>
          <Avatar alt="Travis Howard" src="https://media.tenor.com/SNhSgyX_JNMAAAAM/dancing-elon-musk-dancing.gif" />
        </ListItemAvatar>
      
        <ListItemText primary="Todo" secondary={props.text} />
      </ListItem>
    </>
  );
};

export default Todo;
