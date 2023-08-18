import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
// COMPONENTS
import { Layout } from 'components/Layout/Layout';
import { Header } from 'components/Header/Header';
import { Hero } from 'components/Hero/Hero';
import { About } from 'components/About/About';
import { Footer } from 'components/Footer/Footer';
import { Description } from 'components/Description/Description';
import { Modal } from 'components/Modal/Modal';
import { CardConteiner } from 'components/CardConteiner/CardConteiner';
import { Gallery } from 'components/Gallery/Gallery';

import { Privacy } from './Privacy/Privacy';
import { Imprint } from './Imprint/Imprint';
import Payment from './PaymentPolicy/PaymentPolicy';

import { Discount } from './Modal/ModalContent/Discount/Discount';
import { AddYourReview } from "components/Modal/ModalContent/AddYourReview/AddYourReview";


// CONTEXT
import { ModalStateContext } from 'components/ModalStateContext';

const App = () => {
  const [isOpened, setIsOpened] = useState(false);
  const [showVideo, setShowVideo] = useState(true);

  const [isOpenPrivacy, setIsOpenPrivacy] = useState(false);
  const [isOpenImprint, setIsOpenImprint] = useState(false);
  const [isOpenPayment, setIsOpenPayment] = useState(false);

  const [isOpenedForm, setIsOpenedForm] = useState(false);

  const [isOpenedDiscont, setIsOpenedDiscont] = useState(false);

  function handleToggleForm () {
    const timeoutId = setTimeout(() => {
      setIsOpenedForm(!isOpenedForm);
    }, 600);
    return () => clearTimeout(timeoutId);
  }

  function handleToggleDiscont() {
    setIsOpenedDiscont(!isOpenedDiscont);
  }

  function handleTogglePrivacy() {
    setIsOpenPrivacy(!isOpenPrivacy);
  }

  function handleToggleImprint() {
    setIsOpenImprint(!isOpenImprint);
  }

  function handleTogglePayment() {
    setIsOpenPayment(!isOpenPayment);
  }

  function handleCloseVideo() {
    setShowVideo(false);
  }

  if (isOpened) {
    document.body.classList.add('modal-open');
  } else {
    document.body.classList.remove('modal-open');
  }

  return (
    <>
      <Layout>
        <Routes>
          <Route
            path="/"
            element={
              <ModalStateContext.Provider
                value={{ openModal: () => setIsOpened(true) }}
              >
                {!showVideo && <Header handleToggleForm={handleToggleForm}/>}
                <main>
                  <Hero
                    handleCloseVideo={handleCloseVideo}
                    showVideo={showVideo}
                  />
                  {!showVideo && <About />}
                  {!showVideo && <CardConteiner />}
                  {!showVideo && <Gallery />}
                  {!showVideo && <Description />}
                </main>
                {!showVideo && (
                  <Footer
                    handleTogglePrivacy={handleTogglePrivacy}
                    handleToggleImprint={handleToggleImprint}
                    isOpenPayment={isOpenPayment}
                    handleTogglePayment={handleTogglePayment}
                  />
                )}
                {isOpened && <Modal closeModal={() => setIsOpened(false)} />}
                {isOpenedForm && <AddYourReview handleToggleForm={handleToggleForm} /> }

                {isOpenPrivacy && (
                  <Privacy
                    isOpenPrivacy={isOpenPrivacy}
                    handleTogglePrivacy={handleTogglePrivacy}
                  />
                )}
                {isOpenImprint && (
                  <Imprint
                    isOpenImprint={isOpenImprint}
                    handleToggleImprint={handleToggleImprint}
                  />
                )}
                {isOpenPayment && (
                  <Payment
                    isOpenPayment={isOpenPayment}
                    handleTogglePayment={handleTogglePayment}
                  />
                )}
              </ModalStateContext.Provider>
            }
          />
          <Route
            path="gratitude"
            element={<Discount handleToggleDiscont={handleToggleDiscont} />}
          />
        </Routes>
      </Layout>
    </>
  );
};

export default App;
