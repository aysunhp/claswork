// import React from "react";
// import axios from "axios";
// import { v4 as uuidv4 } from "uuid";
// import { useState, useEffect } from "react";
// import {
//   Table,
//   Thead,
//   Tbody,
//   Tfoot,
//   Tr,
//   Th,
//   Td,
//   TableCaption,
//   TableContainer,
//   Text,
// } from "@chakra-ui/react";

// function Tablex() {
//   const [data, setData] = useState([]);
//   useEffect(() => {
//     axios("https://northwind.vercel.app/api/products").then((res) => {
//       setData(res.data);
//     });
//   }, []);
//   return (
//     <>
//       <TableContainer>
//         <Table variant="simple">
//           <TableCaption>Imperial to metric conversion factors</TableCaption>
//           <Thead>
//             <Tr>
//               <Th>Id</Th>
//               <Th>Name</Th>
//               <Th>Price</Th>
//             </Tr>
//           </Thead>
//           <Tbody>
//             {console.log(data)}
//             {data.map((elem) => {
//               return (
//                 <Tr key={uuidv4()}>
//                   <Td>{elem.id}</Td>
//                   <Td>{elem.name}</Td>
//                   <Td>{elem.unitPrice}</Td>
//                 </Tr>
//               );
//             })}
//           </Tbody>
//           <Tfoot>
//             <Tr>
//               <Th>Id</Th>
//               <Th>Name</Th>
//               <Th>Price</Th>
//             </Tr>
//           </Tfoot>
//         </Table>
//       </TableContainer>
//     </>
//   );
// }

// export default Tablex;
