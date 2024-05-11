interface TodoProps {
  description: string;
  status: string;
}

function toDo(todo: Partial<TodoProps>) {
  return todo;
}

toDo({ description: "cleaner", status: "" });
