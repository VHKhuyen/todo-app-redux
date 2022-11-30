import { useRef, useState } from "react";
import { Col, Row, Input, Button, Select, Tag } from "antd";
import Todo from "../Todo";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidV4 } from "uuid";
import { searchRemainingSelector } from "../../redux/selector";
import { addTodo } from "../../redux/todoSlice";

export default function TodoList() {
  const dispatch = useDispatch();
  const todoList = useSelector(searchRemainingSelector);

  const [inputValue, setInputValue] = useState("");
  const [priority, setPriority] = useState("Medium");

  const inputRef = useRef(null);

  const handleChangeInput = (e) => {
    setInputValue(e.target.value);
  };

  const handleChangeSelect = (value) => {
    setPriority(value);
  };

  const handleSubmit = () => {
    dispatch(
      addTodo({
        id: uuidV4(),
        name: inputValue,
        priority: priority,
        completed: false,
      })
    );
    setInputValue("");
    setPriority("Medium");
    inputRef.current.focus();
  };

  return (
    <Row style={{ height: "calc(100% - 40px)" }}>
      <Col span={24} style={{ height: "calc(100% - 40px)", overflowY: "auto" }}>
        {todoList.map((todo) => (
          <Todo
            key={todo.id}
            id={todo.id}
            name={todo.name}
            completed={todo.completed}
            priority={todo.priority}
          />
        ))}
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: "flex" }} compact>
          <Input
            value={inputValue}
            ref={inputRef}
            onChange={handleChangeInput}
          />
          <Select defaultValue="Medium" onChange={handleChangeSelect}>
            <Select.Option value="High" label="High">
              <Tag color="red">High</Tag>
            </Select.Option>
            <Select.Option value="Medium" label="Medium">
              <Tag color="blue">Medium</Tag>
            </Select.Option>
            <Select.Option value="Low" label="Low">
              <Tag color="gray">Low</Tag>
            </Select.Option>
          </Select>
          <Button type="primary" onClick={handleSubmit}>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}
