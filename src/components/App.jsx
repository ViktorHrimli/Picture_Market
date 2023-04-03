import { Layout } from 'components/Layout/Layout';
import { Header } from 'components/Header/Header';
import { Hero } from 'components/Hero/Hero';
import { About } from 'components/About/About';
import { Card } from 'components/Card/Card';

const App = () => {
  return (
    <Layout>
      <Header />
      <main>
        <Hero />
        <About />
        <Card />
      </main>
    </Layout>
  );
};

export default App;
