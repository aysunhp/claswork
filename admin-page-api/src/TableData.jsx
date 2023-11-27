import React from "react";
import { Table, Button, Modal, Input } from "antd";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { Alert } from "antd";

const onChange = (pagination, filters, sorter, extra) => {
  console.log("params", pagination, filters, sorter, extra);
};
const TableData = () => {
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [editName, setEditName] = useState("");
  const [editTitle, setEditTitle] = useState("");
  const [edited, setEdited] = useState({});
  console.log(name);
  console.log(title);
  useEffect(() => {
    axios.get("https://northwind.vercel.app/api/suppliers").then((res) => {
      setData(res.data);
    });
  }, []);

  const columns = [
    {
      title: "ID",
      dataIndex: "id",

      width: "30%",
      sorter: (a, b) => a.id - b.id,
    },
    {
      title: "Company Name",
      dataIndex: "companyName",
    },
    {
      title: "Contact Title",
      dataIndex: "contactTitle",
      filters: data.map((item) => {
        return { text: item.contactTitle, value: item.contactTitle };
      }),
      onFilter: (value, record) => record?.contactTitle?.startsWith(value),
      filterSearch: true,
      width: "40%",
    },
    {
      title: "Delete",
      render: (text, record) => (
        <Button
          danger
          onClick={() => {
            <Alert message="Success Text" type="success" />;
            axios.delete(
              "https://northwind.vercel.app/api/suppliers/" + record.id
            );
            setData((items) => items.filter((x) => x.id !== record.id));
          }}
        >
          {"Delete"}
        </Button>
      ),
    },
    {
      title: "Edit",
      render: (text, record) => {
        console.log(record);
        return (
          <>
            <Button
              type="primary"
              onClick={showEditModal}
              style={{ display: "block", margin: "20px auto" }}
            >
              Edit
            </Button>
            <Modal
              title="Basic Modal"
              open={isModalEditOpen}
              onOk={handleEditOk}
              onCancel={handleEditCancel}
            >
              {" "}
              <Input
                type="text"
                placeholder="Enter company name"
                style={{ marginBottom: "30px" }}
                onChange={(e) => {
                  setEditName(e.target.value);
                }}
              />
              <Input
                type="text"
                placeholder="Enter contact title"
                onChange={(e) => {
                  setEditTitle(e.target.value);
                }}
              />
            </Modal>
          </>
        );
      },
    },
  ];
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalEditOpen, setIsModalEditOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
    newObj = {
      companyName: name,
      contactTitle: title,
    };
    setEdited(newObj);
  };
  const handleOk = () => {
    setIsModalOpen(false);
    let obj;
    obj = {
      companyName: name,
      contactTitle: title,
    };
    axios.post("https://northwind.vercel.app/api/suppliers/", obj);

    setData([...data, obj]);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  //////
  const showEditModal = () => {
    setIsModalEditOpen(true);
    setEdited();
    console.log(record.id);
  };
  const handleEditOk = (e) => {
    setIsModalEditOpen(false);
    console.log(e.target);
    // let found = data.find((item) => item.id == record.id);
    // let newObj = { ...found, companyName: editName, ontactTitle: editTitle };

    // axios.patch("https://northwind.vercel.app/api/suppliers/" + record.id, {
    //   companyName: editName,
    //   contactTitle: editTitle,
    // });

    // let updatedData = data.filter((item) => item.id != record.id);
    // console.log(updatedData);
    // console.log(data);
    // setData([...data, newObj]);
  };
  const handleEditCancel = () => {
    setIsModalEditOpen(false);
  };
  return (
    <>
      <Button
        type="primary"
        onClick={showModal}
        style={{ display: "block", margin: "20px auto" }}
      >
        Open Modal
      </Button>
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Input
          type="text"
          placeholder="Enter company name"
          style={{ marginBottom: "30px" }}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <Input
          type="text"
          placeholder="Enter contact title"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
      </Modal>
      <Table
        columns={columns}
        dataSource={data}
        onChange={onChange}
        rowKey={(record) => record.id}
      />
    </>
  );
};
export default TableData;
