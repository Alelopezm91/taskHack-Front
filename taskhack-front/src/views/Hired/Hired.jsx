import { useAuthContext } from "../../contexts/AuthContext";
import { useEffect } from "react";

const Hired = () => {
  const { user, getUser } = useAuthContext();

  useEffect(() => {
    getUser();
  }, [getUser]);

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
