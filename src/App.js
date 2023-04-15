import Home from './components/Home'
import HomeHeader from './components/HomeHeader';
import Brands from './components/Brands'
import PageFooter from './components/PageFooter';
import Copyright from './components/Copyright'
import { ConfigProvider } from 'antd';

function App() {
  return (
    <div>
      <ConfigProvider theme={{token: {colorPrimary: '#e628a6', colorLink: '#e628a6', colorLinkHover:'#ecb0d8'}}}>
        <HomeHeader/>
        <Home/>
        <Brands/>
        <PageFooter/>
        <Copyright/>
      </ConfigProvider>
    </div>
  );
}

export default App;
