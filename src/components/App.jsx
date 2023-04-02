import { Layout } from 'components/Layout/Layout';
import { Header } from 'components/Header/Header';
import { Hero } from 'components/Hero/Hero';


const App = () => {
  return (
    <Layout>
      <Header />
      <main>
        <Hero />
        {/* <h1>Layout</h1> */}
      </main>
      {/* <footer></footer> */}
    </Layout>
  );
};

export default App;
