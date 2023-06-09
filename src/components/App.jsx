import { useState } from 'react';
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



// CONTEXT
import { ModalStateContext } from 'components/ModalStateContext';



const App = () => {
  const [isOpened, setIsOpened] = useState(false);
  const [showVideo, setShowVideo] = useState(true);

  const [isOpenPrivacy, setIsOpenPrivacy] = useState(false);
  const [isOpenImprint, setIsOpenImprint] = useState(false);


  function handleTogglePrivacy () {
    setIsOpenPrivacy(!isOpenPrivacy);
  }
  
  function handleToggleImprint () {
    setIsOpenImprint(!isOpenImprint);
  }

  function handleCloseVideo() {
    setShowVideo(false);
  }

  if (isOpened) {
    document.body.classList.add('modal-open');
  } else {
    document.body.classList.remove('modal-open');
  };

  return (<>
    <Layout>
      <ModalStateContext.Provider
        value={{ openModal: () => setIsOpened(true)}}
      >
        {!showVideo && <Header /> }
        <main>
          <Hero handleCloseVideo={handleCloseVideo} showVideo={showVideo} />
          {!showVideo && <About />}
          {!showVideo && <CardConteiner />}
          {!showVideo && <Gallery />}
          {!showVideo && <Description />}
        </main>
        {!showVideo && <Footer handleTogglePrivacy={handleTogglePrivacy}  handleToggleImprint={handleToggleImprint} />}
        
        {isOpened && <Modal closeModal={() => setIsOpened(false)} />}
        {isOpenPrivacy && <Privacy isOpenPrivacy={isOpenPrivacy} handleTogglePrivacy={handleTogglePrivacy} />}
        {isOpenImprint && <Imprint isOpenImprint={isOpenImprint} handleToggleImprint={handleToggleImprint} />}
      </ModalStateContext.Provider>
    </Layout>
  </>
  );
};

export default App;
