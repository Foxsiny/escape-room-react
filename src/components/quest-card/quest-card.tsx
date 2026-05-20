import { Link } from 'react-router-dom';
import { Quest } from '../../types/quest';
import { AppRoute } from '../../const';
import { QuestLevelLabel } from '../../const';

type QuestCardProps = {
  quest: Quest;
};

export function QuestCard({ quest }: QuestCardProps): JSX.Element {
  // Вытаскиваем нужные поля из объекта квеста для удобства
  const { id, title, previewImg, previewImgWebp, level, peopleCount } = quest;

  const levelLabels: Record<QuestLevelLabel, string> = {
    [QuestLevelLabel.Easy]: 'Простой',
    [QuestLevelLabel.Medium]: 'Средний',
    [QuestLevelLabel.Hard]: 'Сложный',
  };

  return (
    <div className="quest-card">
      <div className="quest-card__img">
        <picture>
          <source
            type="image/webp"
            srcSet={previewImgWebp}
          />
          <img
            src={previewImg}
            srcSet={`${previewImg} 2x`}
            width="344"
            height="232"
            alt={title}
          />
        </picture>
      </div>
      <div className="quest-card__content">
        <div className="quest-card__info-wrapper">
          <Link className="quest-card__link" to={`${AppRoute.Quest.replace(':id', id)}`} >{title}</Link>
        </div>
        <ul className="tags quest-card__tags">
          <li className="tags__item">
            <svg width="11" height="14" aria-hidden="true">
              <use xlinkHref="#icon-person"></use>
            </svg>
            {peopleCount[0]}–{peopleCount[1]}&nbsp;чел
          </li>
          <li className="tags__item">
            <svg width="14" height="14" aria-hidden="true">
              <use xlinkHref="#icon-level"></use>
            </svg>
            {levelLabels[level as QuestLevelLabel] || level}
            {levelLabels[level] || level}
          </li>
        </ul>
      </div>
    </div>
  );
}
