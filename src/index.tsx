import { Hono } from 'hono'
import type { Database } from '@cloudflare/d1'
import { renderToString } from 'react-dom/server';

interface Env {
  DB: Database
}
const app = new Hono()
//routes

//pages
import {Layout} from './pages/layout';
import Top from './pages/Top';
import Test1 from './pages/test/App';
import Test2 from './pages/test2/App';
import Test3 from './pages/test3/App';
//
app.get('/', (c) => {
  return c.html(renderToString(Top([])))
})
/* test */
app.get('/test1', async (c) => { 
  return c.html(renderToString(Test1([])));
});
app.get('/test2', async (c) => { 
  return c.html(renderToString(Test2([])));
});
app.get('/test3', async (c) => { 
  return c.html(renderToString(Test3([])));
});

/******
API
******/
export default app
