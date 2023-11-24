// import React from "react";
// import { Table } from 'antd';

// const AntDesingTable = () => {
//   return(<>

//   </>);
// };

// export default AntDesingTable;

import React, { useEffect, useState } from "react";
import { Table } from "antd";
import axios from "axios";

const onChange = (pagination, filters, sorter, extra) => {
  console.log("params", pagination, filters, sorter, extra);
};

const AntDesignTable = () => {
  const [suppliers, setSuppliers] = useState([]);
  useEffect(() => {
    axios.get("https://northwind.vercel.app/api/suppliers/").then((res) => {
      setSuppliers(res.data);
    });
  }, []);

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      sorter: (a, b) => a.id - b.id,
    },
    {
      title: "Company name",
      dataIndex: "companyName",
      sorter: (a, b) => a.companyName.localeCompare(b.companyName),
    },
    {
      title: "City",
      dataIndex: ["address", "city"],
      filters: suppliers.map((item) => {
        return { text: item.address.city, value: item.address.city };
      }),
      onFilter: (value, record) => record.address?.city?.startsWith(value),
      filterSearch: true,
      width: "40%",
    },
  ];

  return (
    <Table
      rowKey={(record) => record.id}
      columns={columns}
      dataSource={suppliers}
      onChange={onChange}
    />
  );
};

export default AntDesignTable;
