
interface TitleProps {
    titulo: string
    subtitulo: string
}

export default function Title(props: TitleProps) {
  return (
    <div>
      <h1 className="font-black bold">
        <strong>{props.titulo}</strong>
      </h1>

      <h2 className="subtitle">
        {props.subtitulo}
      </h2>
    </div>
  );
}