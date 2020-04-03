import React from 'react';
import Movie from "./components/Movie";
import DetailMovie from "./components/DetailMovie"
import { Layout, Menu } from 'antd';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


const { Header, Content } = Layout;

function App() {
  return (
    <>
      <Router>
        <Layout>
          <Header>
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
          <Menu.Item key="1"><Link to="/">Home</Link></Menu.Item>
          {/* <Menu.Item key="2"><Link to="/about">About</Link></Menu.Item> */}
          </Menu>
          </Header>
          <Content>
          <Switch>
            <Route path="/:id" children={<DetailMovie />} />
            <Route path="/">            
              <Movie></Movie>
            </Route>
           </Switch>            
          </Content>
      </Layout>
    </Router>
    </>
  );
}

export default App;
