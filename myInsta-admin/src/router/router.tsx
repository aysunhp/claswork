import Dashboard from "../pages/Dashboard";
import AddUser from "../pages/AddUser";
import Home from "../pages/Home";

const router = [
  {
    path: "/",
    element: <Dashboard />,

    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/addUser",
        element: <AddUser />,
      },
    ],
  },
];

export default router;
