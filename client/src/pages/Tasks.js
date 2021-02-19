import { useContext, useEffect, useState } from "react";
import { DataContext } from "../context/TaskContext";
import { Container, List, Button } from "semantic-ui-react";
import actions from "../services/api";

const Tasks = () => {
  const [tasks, setTasks] = useContext(DataContext);
  const [edit, setEdit] = useState(false);
  const [editTarget, setEditTarget] = useState(null);
  const [tempValue, setTempValue] = useState(null);

  useEffect(() => {
    getTasks();
  }, []);

  const getTasks = async () => {
    let res = await actions.getTasks();
    console.log(res);
    setTasks(res.data.tasks);
  };

  const addTask = (newTask) => {
    let newTasks = [...tasks];
    newTasks.push(newTask);
    setTasks(newTasks);
  };

  const deleteTask = (index) => {
    let newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  const handleEdit = (e, index) => {
    setEditTarget(index);
    setEdit(true);
  };

  const saveEdit = (e, index) => {
    let newTasks = [...tasks];
    newTasks[index] = tempValue;
    setTasks(newTasks);
    setEdit(false);
    setEditTarget(null);
    setTempValue(null);
  };

  const handleChange = (e) => {
    console.log(e.target.value);
    setTempValue(e.target.value);
  };

  return (
    <>
      <Container>
        <Button onClick={actions.seed}>Seed</Button>
        <Button onClick={actions.drop}>Drop</Button>
        <h2>Tasks</h2>
        <List>
          {tasks?.map((task, index) =>
            edit && editTarget === index ? (
              <List.Item horizontal key={index}>
                <input
                  type="text"
                  defaultValue={task}
                  onChange={(e) => handleChange(e)}
                />
                <Button onClick={(e) => saveEdit(e, index)}>Save</Button>
              </List.Item>
            ) : (
              <List.Item horizontal key={index}>
                {task.title}
                <div>
                  <Button onClick={(e) => handleEdit(e, index)}>Edit</Button>
                  <Button onClick={(index) => deleteTask(index)}>Delete</Button>
                </div>
              </List.Item>
            )
          )}
        </List>
      </Container>
    </>
  );
};

export default Tasks;
