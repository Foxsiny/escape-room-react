import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

export function NotFoundPage(): JSX.Element {
  return (
    <main className="page-content decorated-page">
      <div className="container" style={{ textAlign: 'center', padding: '100px 0' }}>
        <h1 className="title title--size-l">404. Страница не найдена</h1>
        <p className="page-content__title" style={{ marginTop: '20px' }}>
          Возможно, этот квест уже забронирован или адрес был введен неверно.
        </p>
        <Link
          to={AppRoute.Main}
          className="button button--accent button--size-m"
          style={{ marginTop: '40px', display: 'inline-block' }}
        >
          Вернуться на главную
        </Link>
      </div>
    </main>
  );
}

