import { COLORS } from '../constants';

export default function StarRating({ rating, size = 14 }) {
  return (
    <div style={{ display: 'flex', gap: 2, alignItems: 'center' }}>
      {[1, 2, 3, 4, 5].map((s) => (
        <span
          key={s}
          style={{
            color: s <= Math.round(rating) ? COLORS.yellow : '#ddd',
            fontSize: size,
            lineHeight: 1,
          }}
        >
          ★
        </span>
      ))}
      <span style={{ fontSize: size - 2, color: '#aaa', marginLeft: 4 }}>
        ({rating})
      </span>
    </div>
  );
}
