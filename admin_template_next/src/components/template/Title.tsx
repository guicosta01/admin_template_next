interface TitleProps {
    titulo: string
    subtitulo: string
}

export default function Title(props: TitleProps) {
  return (
    <div>
      <h1 className="font-black text-3xl font-bold">
        {props.titulo}
      </h1>

      <h2 className="font-light text-sm">
        {props.subtitulo}
      </h2>
    </div>
  );
}