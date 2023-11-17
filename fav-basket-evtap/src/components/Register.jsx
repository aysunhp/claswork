import React from "react";
import { Input } from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import axios from "axios";

const Register = ({
  setRName,
  setRPass,
  setEmail,
  setAdmin,
  setUsers,
  rname,
  rpass,
  email,
  aysun,
  toggle,
  setToggle,
}) => {
  return (
    <form
      action=""
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <input
        type="text"
        className="login-inp"
        value={rname}
        placeholder="Enter username"
        onChange={(e) => {
          setRName(e.target.value);
        }}
      />
      <br />
      <input
        type="password"
        className="login-inp"
        value={rpass}
        placeholder="Enter password"
        onChange={(e) => {
          setRPass(e.target.value);
        }}
      />
      <br />
      <input
        type="email"
        className="login-inp"
        value={email}
        placeholder="Enter email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <br />
      <input
        id="admin"
        className="login-inp"
        ref={aysun}
        type="checkbox"
        onChange={(e) => {
          setAdmin(e.target.value);
        }}
      />
      <label id="admin-write"> Is admin?</label>
      <br />
      <Button
        className="login-btn"
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

          setToggle(false);
        }}
      >
        Sign in
      </Button>
    </form>
  );
};

export default Register;
