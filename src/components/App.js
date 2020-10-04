import React, { useState, useEffect } from 'react';

// https://movies.vitordino.com/
// Ant Design Components
import {
  Affix,
  Alert,
  Button,
  Card,
  Col,
  Form,
  Image,
  Input,
  Layout,
  Menu,
  notification,
  Radio,
  Row,
  Spin,
  Statistic,
  Typography
} from 'antd';

// Ant Design Icons
import {
  AuditOutlined,
  GithubFilled,
  HomeOutlined,
  SearchOutlined,
  UserOutlined,
  VideoCameraOutlined
} from '@ant-design/icons';

// Ant Design Sub-Components
const { Title, Text } = Typography;
const { Header, Content, Footer } = Layout;
const { Meta } = Card;


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
        <Menu.Item style={{ width: 200, textAlign: 'center', fontFamily: "'Roboto', sans-serif", fontSize: '1rem' }}>🍿 Watchlist Roulette</Menu.Item>
          <Menu.Item icon={<HomeOutlined />} key="/">Home</Menu.Item>
          <Menu.Item icon={<AuditOutlined />} key="/about">About</Menu.Item>
        </Menu>
      </Header>

      {/* Content body */}
      <Content style={{ padding: '100px 16px' }}>

        <Row justify="center" gutter={[32, 32]}>
          <Col span={20}>
            <Card style={{ borderRadius: '1.25em' }} hoverable>
              <h1>🎥 Letterboxd Watchlist Roulette</h1>
              <Input.Search
                size="large"
                placeholder="Enter Letterboxd username"
                value={username}
                prefix={<UserOutlined />}  
              />
              <Alert style={{ marginTop: 12 }} message="Sorry, could not find that user" type="error" closable />
            </Card>
          </Col>
        </Row>

        <Row justify="center" gutter={[32, 32]}>
          <Col span={20}>
            <Card style={{ borderRadius: '1.25rem' }} hoverable>
              <Row>
                <Col span={14}>
                  <Title level={1}>
                   🎬 Star Wars: A New Hope (Episode IV)
                  </Title>
                  📅 <Text type="secondary">1970 </Text>
                  ⏲️ <Text type="secondary">116 min</Text>
                  <Title level={4}>📖 Plot</Title>
                  <Text>
                    Princess Leia is captured and held hostage by the evil Imperial forces in their 
                    effort to take over the galactic Empire. Venturesome Luke Skywalker and dashing 
                    captain Han Solo team together with the loveable robot duo R2-D2 and C-3PO to rescue 
                    the beautiful princess and restore peace and justice in the Empire.
                  </Text>

                  <Row style={{ marginTop: 16 }}>
                    <Col span={12}>
                      {/* Actors */}
                      <Title level={4}>🌟 Actors</Title>
                      <Row><Text>Mark Hamill</Text></Row>
                      <Row><Text>Harrison Ford</Text></Row>
                      <Row><Text>Carrie Fisher</Text></Row>
                      <Row><Text>Peter Cushing</Text></Row>
                    </Col>
                    <Col span={12}>
                      {/* Genres */}
                      <Title level={4}>📙 Genres</Title>
                      <Row><Text>Adventure</Text></Row>
                      <Row><Text>Science Fiction</Text></Row>
                      <Row><Text>Action</Text></Row>
                      {/* Directors */}
                      <Title style={{ marginTop: 16 }} level={4}>🎬 Directors</Title>
                      <Row><Text>George Lucas</Text></Row>
                      <Row><Text>Anthony Wayne</Text></Row>
                      <Row><Text>Terry Madden</Text></Row>
                    </Col>
                  </Row>
                </Col>
                <Col span={8} offset={2}>
                  <Image
                    src="https://pbs.twimg.com/media/Eezz1XCVoAAumhu?format=jpg&name=4096x4096"
                    alt="Movie Poster"
                    height='auto'
                    width="auto"
                  />
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>

        <Row justify="center">
          <Spin size="large" />
        </Row>
        
        
      </Content>
      
      {/* Footer */}
      <Footer>
        <Row justify="space-between">
          <Col>
            <Title level={5}>
              Emmanuel Macario
            </Title>
          </Col>
          <Col>
            <Title level={5}>
              <GithubFilled />
            </Title>
          </Col>
        </Row>
      </Footer>
    </Layout>
  )
}

export default App;