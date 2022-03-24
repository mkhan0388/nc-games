import { useEffect, useState } from "react";

import { getUser } from "../utils/api";

const User = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    getUser("tickle122").then((res) => {
      setUser(res);
    });
  }, []);

  return (
    <div>
      <h2>My page: tickle122 </h2>
      <main>
        <div>
          <img alt="avatar_iamge" src={user.avatar_url} />
        </div>
      </main>
    </div>
  );
};

export default User;
