
interface TitleProps {
    titulo: string
    subtitulo: string
}

export default function Title(props: TitleProps) {
  return (
    <div>
      <h1 className="title">
        {props.titulo}
      </h1>

      <h2 className="subtitle">
        {props.subtitulo}
      </h2>
    </div>
  );
}