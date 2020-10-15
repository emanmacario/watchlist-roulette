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
      <Col span={18}>
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
                  <ul>
                    <li><Text>Mark Hamill</Text></li>
                    <li><Text>Harrison Ford</Text></li>
                    <li><Text>Carrie Fisher</Text></li>
                    <li><Text>Peter Cushing</Text></li>
                  </ul>

                </Col>
                <Col span={12}>
                  {/* Genres */}
                  <Title level={4}>📙 Genres</Title>
                  <ul>
                    <li><Text>Adventure</Text></li>
                    <li><Text>Science Fiction</Text></li>
                    <li><Text>Action</Text></li>
                  </ul>
                  
                  {/* Directors */}
                  <Title style={{ marginTop: 16 }} level={4}>🎬 Directors</Title>
                  <ul>
                    <li><Text>George Lucas</Text></li>
                    <li><Text>Anthony Wayne</Text></li>
                    <li><Text>Terry Madden</Text></li>
                  </ul>
                  
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