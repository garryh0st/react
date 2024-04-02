import {  useState } from "react";
import "./App.css";
import { Button, FormControl, Input, InputLabel } from "@mui/material";
import Todo from "./components/Todo";


function App() {
  const [todos, setTodos] = useState([]);
  const [input, SetInput] = useState([]);

  // useEffect(() => {
  //   db.collection("todos").onSnapshot(snapshot => {
  //     setTodos(snapshot.docs.map(doc => doc.data().todo))
  //   })
  // },[input])

  

  

  const addTodo = (event) => {
    setTodos([...todos, input]);
    SetInput("");
    event.preventDefault();
  };

  return (
    <div className="App">
      <h1>TODO LIST</h1>
      <form>
        <FormControl>
          <InputLabel htmlFor="my-input">Todo</InputLabel>
          <Input
            value={input}
            onChange={(event) => SetInput(event.target.value)}
          />
        </FormControl>

        <Button disabled={!input} onClick={addTodo} variant="contained">
          Add Todo
        </Button>
      </form>

      <ul>
        {todos.map((todo) => (
          <Todo text={todo} />
        ))}
      </ul>
    
    </div>
  );
}

export default App;
