import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Routes from './components/Routes/Routes';

const App = () => {
  return (
    <div className='flex min-h-screen flex-col'>

      <Header />
      <Routes />
      <Footer />
    </div>
  );
};

export default App;
