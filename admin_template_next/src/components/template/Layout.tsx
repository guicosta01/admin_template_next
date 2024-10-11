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
    <div>
        <SideBar />
        <Header titulo={props.titulo} subtitulo={props.subtitulo}></Header>
        <Content>
            {props.children}
        </Content>
    </div>
  )
}