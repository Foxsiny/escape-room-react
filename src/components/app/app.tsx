import {Routes, Route} from 'react-router-dom';
import {Header} from '../header/header';
import {Footer} from '../footer/footer';
import {MainPage} from '../../pages/main-page/main-page';
import {QuestPage} from '../../pages/quest-page/quest-page';
import {ContactsPage} from '../../pages/contacts-page/contacts-page';
import {BookingPage} from '../../pages/booking-page/booking-page';
import {LoginPage} from '../../pages/login-page/login-page';
import {MyQuestsPage} from '../../pages/my-quests-page/my-quests-page';
import {NotFoundPage} from '../../pages/not-found-page/not-found-page';
import {AppRoute} from '../../const';

export function App(): JSX.Element {
  return (
    <div className="wrapper">
      <Header />

      <Routes>
        <Route path={AppRoute.Main} element={<MainPage />} />
        <Route path={AppRoute.Quest} element={<QuestPage />} />
        <Route path={AppRoute.Contacts} element={<ContactsPage />} />
        <Route path={AppRoute.Booking} element={<BookingPage />} />
        <Route path={AppRoute.Login} element={<LoginPage />} />
        <Route path={AppRoute.MyQuests} element={<MyQuestsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      <Footer />
    </div>
  );
}
