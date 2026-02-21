import { useNavigate } from 'react-router-dom';

type CardProps = {
  title: string;
  imgURL: string;
  id?: string | number;
};

export default function Card({ title, imgURL, id }: CardProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (id !== undefined) {
      navigate(`/gift/${id}`);
      return;
    }
    navigate('/gift/detail');
  };

  return (
    <div
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleClick();
        }
      }}
      style={{
        width: '161.324px',
        height: '194.136px',
        backgroundColor: '#FFF',
        borderRadius: '9px',
        padding: '12px',
        boxSizing: 'border-box',
        boxShadow: '0 6px 18px rgba(0, 0, 0, 0.08)',
        cursor: 'pointer',
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