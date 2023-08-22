import { Space, Table, Button } from "antd";
import React, { useEffect, useState } from "react";
// import { getAllUsers } from "../../../../Service/userService";

export default function AddUser(props) {
 
  const columns = [
    {
      title: "Email",
      dataIndex: "Email",
      value: (text, object) => {
        return <span key={object}>{text}</span>;
      },
      width: "20%",
      sorter: (a, b) => a.Email - b.Email,
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "Username",
      dataIndex: "Username",
      value: (text, object) => {
        return <span key={object}>{text}</span>;
      },
      width: "20%",
      sorter: (a, b) => a.Username - b.Username,
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "Address",
      dataIndex: "Address",
      value: (text, object) => {
        return <span key={object}>{text}</span>;
      },
      width: "20%",
      sorter: (a, b) => a.Address - b.Address,
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "Phonenumber",
      dataIndex: "Phonenumber",
      value: (text, object) => {
        return <span key={object}>{text}</span>;
      },
      width: "20%",
      sorter: (a, b) => a.Phonenumber - b.Phonenumber,
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "Action",
      key: "Action",
      render: (_, record) => (
        <Space size="middle">
          <Button type="primary" danger>
            Invite{" "}
          </Button>
          <Button type="primary" ghost>
            Delete
          </Button>
        </Space>
      ),
    },
  ];
  const data = []
  const onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };
  return <Table columns={columns} dataSource={data} onChange={onChange} />;
}
