import { IconeHome, IconeNotification, IconeSettings, IconeLogout} from "../icons"
import MenuItem from "./MenuItem"
import Logo from "./Logo"


export default function SideBar() {
  return (
    <aside className="flex flex-col w-32">
      <div className="
          flex flex-col items-center justify-center
          bg-gradient-to-r from-indigo-500 via-blue-600 to-purple-800
          h-20 w-32">
        <Logo></Logo>
      </div>
      <ul className="flex-grow">
        <MenuItem url="/" texto="Home" icone={IconeHome} />
        <MenuItem url="/setting" texto="Setting" icone={IconeSettings} />
        <MenuItem url="/notification" texto="Notif." icone={IconeNotification} />
      </ul>
      <ul><MenuItem onClick={() => console.log('logout')} texto="Exit" icone={IconeLogout} /></ul>
    </aside>
  )
}