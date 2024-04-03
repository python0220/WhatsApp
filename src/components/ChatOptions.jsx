import ChatRoundedIcon from '@mui/icons-material/ChatRounded';
import PhoneRoundedIcon from '@mui/icons-material/PhoneRounded';


function ChatOptions() {
  return (
    <div className="ChatOptions">
      <div className="ChatIconDiv">
      <ChatRoundedIcon className='ChatIcon'/>
      </div>
      <div className="CallLogsIconDiv">
      <PhoneRoundedIcon className='CallLogsIcon'/>
      </div>
      
    </div>
  )
}

export default ChatOptions;
