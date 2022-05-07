import { useAuthContext } from "../../contexts/AuthContext";

const Hired = () => {
  const { user } = useAuthContext();

  return (
    <div className="Favourites">
      <h1 className="mt-3">Favourites</h1>
      {user.hired.map((hired) => {
        return <p>{hired.targetUser.email}</p>;
      })}
    </div>
  );
};

export default Hired;
