import { Layout } from 'components/Layout/Layout';
import { Header } from 'components/Header/Header'
import { Hero } from 'components/Hero/Hero';
import { About } from './About/About';


const App = () => {
  return (
    <Layout>
      <Header />
      <main>
        <Hero />
        <About />
      </main>
    </Layout>
  );
};

export default App;
