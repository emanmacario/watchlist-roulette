import React from 'react';

import {
  Row,
  Image,
  Col,
  Card,
  Typography
} from 'antd';

const { Text, Title } = Typography;


const Movie = () => {
  return (
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
  )
}

export default Movie;