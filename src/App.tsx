import './App.css';
import { $k18n } from './utils/i18n';

const App = () => {
  const changeLang = (lang: string) => {
    localStorage.setItem('langType', lang);
    window.location.reload();
  }

  return (
    <div className="App">
      <header className="App-header">
        <h3>
          <p>{ $k18n('商品') + '-' + $k18n({ id:'k_252262' }) }</p>
          <p>{ $k18n({ id:'k_269564', params: { time: new Date() } }) }</p>
        </h3>
        <div className="buttonBox">
          <button onClick={() => changeLang('zh')}>切换到中文</button>
          <button onClick={() => changeLang('en')}>切换到英文</button>
          <button onClick={() => changeLang('pt')}>切换到葡文</button>
          <button onClick={() => changeLang('id')}>切换到印尼文</button>
        </div>
      </header>
    </div>
  );
}

export default App;
