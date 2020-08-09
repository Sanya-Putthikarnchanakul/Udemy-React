import React from 'react';
import ReactDOM from 'react-dom';

/*ถ้า Import css File เข้ามาแบบนี้จะเป็น Global*/
import './index.css';

/*ถ้า Import css File ที่มี [Filename].module.css จะใช้ Style ในระดับ Component เท่านั้น ไม่ได้ Global*/
/*ถ้าจะใช้ Style แบบนี้เวลาสร้างให้ตั้งชื่อ File เป็น [Filename].module.css*/
//import styles from './index.module.css';

import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
