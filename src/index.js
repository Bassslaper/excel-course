/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
import {Excel} from '@/components/excel/Excel';
import {Header} from './components/header/Header';
import {Toolbar} from './components/toolbar/Toolbar';
import {Formula} from './components/formula/Formula';
import {Table} from './components/table/Table';
import './sass/style.sass';


const excel = new Excel('#app', {
  components: [Header, Toolbar, Formula, Table]
});

excel.render();
