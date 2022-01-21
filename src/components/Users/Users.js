import UserList from "./UsersList";

const Users = (props) => {
  return (
    <div>
      <UserList items={props.items} />
    </div>
  );
};

export default Users;
