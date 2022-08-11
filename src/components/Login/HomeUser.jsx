import { useAuth } from "../context/AuthContext";

const HomeUser = () => {
  const authContext = useAuth();
  // const authContext = useContext(context);
  return <div>HomeUser</div>;
};

export default HomeUser;
