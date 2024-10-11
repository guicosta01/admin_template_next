import { IconeHome, IconeNotification, IconeSettings } from "../icons"
import MenuItem from "./MenuItem"

export default function SideBar() {
  return (
    <aside>
      <ul>
        <MenuItem url="/" texto="Home" icone={IconeHome} />
        <MenuItem url="/" texto="Setting" icone={IconeSettings} />
        <MenuItem url="/" texto="Notification" icone={IconeNotification} />
      </ul>
    </aside>
  )
}