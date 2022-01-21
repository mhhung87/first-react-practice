const UserItem = (props) => {
  return (
    <li>
      <h3>{props.name}</h3>
      <div>({props.age} years old)</div>
    </li>
  );
};

export default UserItem;
