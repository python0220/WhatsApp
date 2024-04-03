import StarOutlineRoundedIcon from '@mui/icons-material/StarOutlineRounded';
import Inventory2RoundedIcon from '@mui/icons-material/Inventory2Rounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import Logo from "../profile/logo.png";


function SettingOptions() {
  return (
    <div className="SettingOptions">
      <div className="StarredMessagesDiv">
        <StarOutlineRoundedIcon className='StarredMessagesIcon'/>
      </div>
      <div className="ArchievedMessagesDiv">
        <Inventory2RoundedIcon className='ArchievedMessagesIcon'/>
      </div>
      <div className="SettingIconDiv">
        <SettingsRoundedIcon className='SettingIcon'/>
      </div>
      <div className="ProfileIconDiv">
        <img src={Logo} alt="DP" className='ProfileIcon' />
          
      </div>
      
    </div>
  )
}

export default SettingOptions;
