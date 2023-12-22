import "./../assets/style/style.scss";
import UserTable from "../components/UsersTable";
const Home = () => {
  return (
    <>
      <section className="users">
        <header>
          <input type="text" placeholder="Search ..." />
        </header>
        <div className="container">
          <UserTable />
        </div>
      </section>
    </>
  );
};

export default Home;
