import { useState, createContext } from "react";

export const DataContext = createContext();

export const DataProvider = (props) => {
  const [tasks, setTasks] = useState([1, 2, 3, 4, 5]);

  return (
    <DataContext.Provider value={[tasks, setTasks]}>
      {props.children}
    </DataContext.Provider>
  );
};
