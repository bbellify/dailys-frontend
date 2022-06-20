import Daily from './components/daily'
import Monthly from './components/monthly';
import shell from '../src/shell.png'

function App() {
  return (
    <div>
      <header>
        <div className='d-flex align-items-center justify-content-center my-3'>
          <img src={shell} width='15%' alt='shell'/>
          <h1 className=''>
            dailys
          </h1>
          <img src={shell} className='' width='15%' alt='shell'/>
        </div>
      </header>
        <Daily/>
        <Monthly/>
    </div>
  );
}

export default App;
