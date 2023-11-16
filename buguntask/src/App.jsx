import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";

function App() {
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  const [users, setUsers] = useState([]);
  const [products, setProducts] = useState([]);
  const [active, setActive] = useState(false);
  const [register, setRegister] = useState(0);
  const [rname, setRName] = useState("");
  const [rpass, setRPass] = useState("");
  const [email, setEmail] = useState("");
  const [admin, setAdmin] = useState(false);
  const aysun = useRef();

  useEffect(() => {
    axios
      .get("https://6556162184b36e3a431efcfa.mockapi.io/api/users")
      .then((res) => {
        setUsers(res.data);
      });
  }, []);
  console.log(active);
  useEffect(() => {
    axios
      .get("https://6556162184b36e3a431efcfa.mockapi.io/api/products")
      .then((res) => {
        setProducts(res.data);
      });
  }, []);
  return (
    <ChakraProvider>
      <>
        <form
          action=""
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <input
            type="text"
            value={rname}
            placeholder="Enter username"
            onChange={(e) => {
              setRName(e.target.value);
            }}
          />
          <br />
          <input
            type="password"
            value={rpass}
            placeholder="Enter password"
            onChange={(e) => {
              setRPass(e.target.value);
            }}
          />
          <br />
          <input
            type="email"
            value={email}
            placeholder="Enter email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <br />
          <input
            id="admin"
            ref={aysun}
            type="checkbox"
            onChange={(e) => {
              setAdmin(e.target.value);
            }}
          />
          <label> Is admin?</label>
          <br />
          <Button
            onClick={() => {
              let newUser = {
                username: rname,
                email: email,
                password: rpass,
                isAdmin: aysun.current.checked,
              };

              axios
                .post(
                  "https://6556162184b36e3a431efcfa.mockapi.io/api/users",
                  newUser
                )
                .then((res) => {
                  setUsers(res.data);
                });

              setRName("");
              setRPass("");
              setEmail("");
              setAdmin("");
              console.log((aysun.current.checked = false));
            }}
          >
            Sign in
          </Button>
        </form>
        <Button
          className="log-out"
          onClick={() => {
            setActive(true);
          }}
        >
          Log out
        </Button>
        {!active ? (
          <TableContainer>
            <Table variant="striped" colorScheme="red">
              <TableCaption>Imperial to metric conversion factors</TableCaption>
              <Thead>
                <Tr>
                  <Th>To convert</Th>
                  <Th>into</Th>
                  <Th isNumeric>multiply by</Th>
                </Tr>
              </Thead>
              <Tbody>
                {products.map((product) => {
                  return (
                    <Tr key={uuidv4()}>
                      <Td>{product.id}</Td>
                      <Td>{product.name}</Td>
                      <Td>{product.description}</Td>
                    </Tr>
                  );
                })}
              </Tbody>
              <Tfoot>
                <Tr>
                  <Th>To convert</Th>
                  <Th>into</Th>
                  <Th isNumeric>multiply by</Th>
                </Tr>
              </Tfoot>
            </Table>
          </TableContainer>
        ) : (
          <form
            action=""
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <Input
              type="text"
              placeholder="Enter username"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <br />
            <Input
              type="password"
              placeholder="Enter password"
              onChange={(e) => {
                setPass(e.target.value);
              }}
            />
            <Button
              onClick={() => {
                let newUser = users.find((user) => {
                  return user.username == name && user.password == pass;
                });

                {
                  newUser ? setActive(!active) : console.log("yoxdu");
                }
              }}
            >
              Log in
            </Button>
            <p>
              Need an acount?
              <span className="register" onClick={() => {}}>
                Sign in
              </span>
            </p>
          </form>
        )}
      </>
    </ChakraProvider>
  );
}

export default App;
