import UserItem from "./UserItem";
import Card from "../UI/Card";
import styles from "./UsersList.module.css";

const UserList = (props) => {
  if (props.items.length === 0) {
    return (
      <Card className={styles.users}>
        <h2>Found no users.</h2>{" "}
      </Card>
    );
  }
  return (
    <Card className={styles.users}>
      <ul>
        {props.items.map((user) => (
          <UserItem key={user.id} name={user.name} age={user.age} />
        ))}
      </ul>
    </Card>
  );
};

export default UserList;
