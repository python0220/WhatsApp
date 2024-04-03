import ChatOptions from "./ChatOptions";
import SettingOptions from "./SettingOptions";



const MenuBar = ()=>{
    return (
        <div className="MenuBar">
            <ChatOptions/>
            <SettingOptions/>
        </div>
    );
}

export default MenuBar;