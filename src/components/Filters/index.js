import { Col, Row, Input, Typography, Radio, Select, Tag } from "antd";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { priorityFilter, searchFilter, statusFilter } from "./filterSlice";

const { Search } = Input;

export default function Filters() {
  const dispatch = useDispatch();

  const [searchValue, setSearchValue] = useState("");
  const [statusValue, setStatusValue] = useState("All");
  const [priorityValue, setPriorityValue] = useState([]);

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
    dispatch(searchFilter(e.target.value));
  };

  const handleStatusChange = (e) => {
    setStatusValue(e.target.value);
    dispatch(statusFilter(e.target.value));
  };

  const handlePriorityChange = (value) => {
    setPriorityValue(value);
    dispatch(priorityFilter(value));
  };

  return (
    <Row justify="center">
      <Col span={24}>
        <Typography.Paragraph
          style={{ fontWeight: "bold", marginBottom: 3, marginTop: 10 }}
        >
          Search
        </Typography.Paragraph>
        <Search
          onChange={handleSearchChange}
          value={searchValue}
          placeholder="input search text"
        />
      </Col>
      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: "bold", marginBottom: 3, marginTop: 10 }}
        >
          Filter By Status
        </Typography.Paragraph>
        <Radio.Group value={statusValue} onChange={handleStatusChange}>
          <Radio value="All">All</Radio>
          <Radio value="Completed">Completed</Radio>
          <Radio value="Todo">To do</Radio>
        </Radio.Group>
      </Col>
      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: "bold", marginBottom: 3, marginTop: 10 }}
        >
          Filter By Priority
        </Typography.Paragraph>
        <Select
          mode="multiple"
          value={priorityValue}
          onChange={handlePriorityChange}
          allowClear
          placeholder="Please select"
          style={{ width: "100%" }}
        >
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
      </Col>
    </Row>
  );
}
