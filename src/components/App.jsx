import { useState } from 'react';

import { Layout } from 'components/Layout/Layout';
import { Header } from 'components/Header/Header';
import { Hero } from 'components/Hero/Hero';
import { About } from './About/About';
import { Footer } from './Footer/Footer';
import { Description } from './Description/Description';
import { Modal } from 'components/Modal/Modal';
import { ModalStateContext } from './ModalStateContext';
import { CardConteiner } from 'components/CardConteiner/CardConteiner';


const App = () => {
  const [isOpened, setIsOpened] = useState(false);


  return (
    <Layout>
      <ModalStateContext.Provider value={{openModal: () => setIsOpened(true)}}>
      <Header />
      <main>
        <Hero />
        <About />
        <CardConteiner />
        <Description />
      </main>
        <Footer />
        {isOpened && <Modal closeModal={() => setIsOpened(false)} />}
        </ModalStateContext.Provider>
    </Layout>
  );
};

export default App;
