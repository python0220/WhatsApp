import Chats from "./Chats"
import UserBar from "./UserBar"

function ChatBar() {
  return (
    <div className="ChatBar">
        <UserBar/>
        <Chats/>
    </div>
  )
}

export default ChatBar
