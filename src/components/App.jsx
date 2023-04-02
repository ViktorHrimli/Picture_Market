import { Layout } from 'components/Layout/Layout';
import { Header } from 'components/Header/Header';
import { About } from './About/About';

const App = () => {
  return (
    <Layout>
      <Header />
      <main>
        <About />
      </main>
      {/* <footer></footer> */}
    </Layout>
  );
};

export default App;
