import SideBar from "./Sidebar"
import Header from "./Header"
import Content from "./Content"

interface LayoutProps {
    titulo: string
    subtitulo: string
    children?: any
}

export default function Layout(props: LayoutProps) {
  return (
    <div className="flex h-screen w-screen bg-white">
        <SideBar />
        <div className="
            flex flex-col w-full 
            p-7 bg-gray-400
            :bg-gray-600">
          <Header titulo={props.titulo} subtitulo={props.subtitulo}></Header>
          <Content>
              {props.children}
          </Content>
        </div>
    </div>
  )
}