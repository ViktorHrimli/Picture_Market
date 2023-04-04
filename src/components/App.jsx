import { Layout } from 'components/Layout/Layout';
import { Header } from 'components/Header/Header';
import { Hero } from 'components/Hero/Hero';
import { About } from './About/About';
import { Footer } from './Footer/Footer';
import { Description } from './Description/Description';
import { Card } from 'components/Card/Card';

const App = () => {
  return (
    <Layout>
      <Header />
      <main>
        <Hero />
        <About />
        <Card />
        <Description />
      </main>
      <Footer />
    </Layout>
  );
};

export default App;
