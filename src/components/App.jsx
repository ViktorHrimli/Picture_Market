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

// CONTEXT
import { ModalStateContext } from 'components/ModalStateContext';

const App = () => {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <Layout>
      <ModalStateContext.Provider
        value={{ openModal: () => setIsOpened(true) }}
      >
        <Header />
        <main>
          <Hero />
          <About />
          <CardConteiner />
          <Description />
          <Gallery />
        </main>
        <Footer />
        {isOpened && <Modal closeModal={() => setIsOpened(false)} />}
      </ModalStateContext.Provider>
    </Layout>
  );
};

export default App;
