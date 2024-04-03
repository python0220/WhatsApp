import UserIconBar from "./UserIconBar";
import UserSearchBar from "./UserSearchBar";
import UsersAvailableChats  from "./UsersAvailableChats";

function UserBar() {
  return (
    <div className="UserBar">
      <UserIconBar/>
      <UserSearchBar/>
      <UsersAvailableChats/>
      
    </div>
  )
}

export default UserBar
