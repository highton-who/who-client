type CardProps = {
  title: string;
  imgURL: string;
};

export default function Card({ title, imgURL }: CardProps) {
  return (
    <div
      style={{
        width: '161.324px',
        height: '194.136px',
        backgroundColor: '#FFF',
        borderRadius: '9px',
        padding: '12px',
        boxSizing: 'border-box',
        boxShadow: '0 6px 18px rgba(0, 0, 0, 0.08)',
      }}
    >
      <img
        src={imgURL}
        alt={title}
        style={{
          width: '100%',
          aspectRatio: '1 / 1',
          objectFit: 'cover',
          borderRadius: '5px',
          display: 'block',
        }}
      />

      <p
        style={{
          margin: '18px 0 0 0',
          fontSize: '12px',
          fontWeight: 700,
          color: '#555555',
          lineHeight: 1.25,
          wordBreak: 'keep-all',
        }}
      >
        {title}
      </p>
    </div>
  );
}