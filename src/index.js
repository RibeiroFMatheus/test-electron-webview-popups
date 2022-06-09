import ReactDOM from 'react-dom/client'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%' }}>
    <webview style={{ width: '100%', height: '100%' }} src='https://classroom.google.com' allowpopups='true' />
  </div>
)
