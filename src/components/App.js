import React, { useState, useEffect } from 'react';

// Ant Design Components
import {
  Affix,
  Alert,
  Button,
  Card,
  Col,
  Form,
  Input,
  Layout,
  Menu,
  notification,
  Radio,
  Row,
  Statistic,
  Typography
} from 'antd';

// Ant Design Icons
import { 
  GithubFilled,
  HomeOutlined,
  SearchOutlined,
  UserOutlined,
  VideoCameraOutlined
} from '@ant-design/icons';

// Ant Design Sub-Components
const { Title } = Typography;
const { Header, Content, Footer } = Layout;


function App() {
  const [username, setUsername] = useState(null);

  useEffect(() => {
    console.log(process.env.PUBLIC_URL);
  }, []);

  return (

    <Layout style={{ minHeight: '100vh' }}>
      {/* Top navigation bar */}
      <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['/order']}>
        <Menu.Item style={{ width: 256, textAlign: 'center', fontFamily: "'Roboto', sans-serif", fontSize: '1.25rem' }}><VideoCameraOutlined /> Watchlist Roulette</Menu.Item>
          <Menu.Item icon={<HomeOutlined />} key="/">Home</Menu.Item>
        </Menu>
      </Header>

      {/* Content body */}
      <Content style={{ padding: '80px 16px' }}>
        <h1>Letterboxd Watchlist Roulette</h1>
        <Input.Search
          size="large"
          placeholder="Enter Letterboxd username"
          value={username}
          prefix={<UserOutlined />}  
        >
        </Input.Search>
      
      
      </Content>
      
      {/* Footer */}
      <Footer style={{ textAlign: 'center' }}>Made by Emmanuel Macario <GithubFilled /></Footer>
    </Layout>
  )
}

export default App;