import React, { useState, useEffect } from 'react';
import axios from 'axios';
import theMovieDb from '../tmdb/themoviedb';

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

import Movie from './Movie';



function App() {
  const [username, setUsername] = useState('impressionblend');
  const [watchlistLength, setWatchlistLength] = useState(null);
  const [movie, setMovie] = useState('The Lighthouse');

  /**
   * Success callback for TMDb API v3 call
   */
  const onSuccess = (data) => {
    console.log(`Success callback: ${data}`);
  }

  const onError = (data) => {
    console.log(`Error callback: ${data}`);
  }

  // Set the TMDb API key
  useEffect(() => {
    console.log("API KEY:")
    console.log(process.env.TMDB_API_KEY)
    theMovieDb.common.api_key = process.env.TMDB_API_KEY;
  }, [])

  useEffect(() => {
    console.log("Searching TMDb API for movie: " + movie);
    theMovieDb.search.getMovie({ "query": encodeURIComponent(movie.trim()) }, onSuccess, onError);
  }, [movie]);


  const searchUser = async () => {
    console.log(`Searching for user: ${username}`);
    const response = await axios.get(`https://cors-anywhere.herokuapp.com/https://letterboxd.com/${username}/`);
    console.log(response.status);
    // console.log(response.data);


    let parser = new DOMParser();
    let html = parser.parseFromString(response.data, 'text/html');
    let watchlist = html.getElementsByClassName('watchlist-aside');
    // console.log(html);
    let wl = watchlist.item(0).getElementsByClassName('all-link').item(0).innerHTML;
    console.log(wl);
    console.log(typeof wl);
    setWatchlistLength(Number(wl));
  }


  const selectMovie = async () => {
    const MOVIES_PER_PAGE = 28;

    let randomMovieIndex = Math.floor(Math.random() * watchlistLength);
    let page = Math.floor(randomMovieIndex / MOVIES_PER_PAGE) + 1;
    console.log(`Random movie: ${randomMovieIndex}`);
    console.log(`Page: ${page}`);

    const response = await axios.get(`https://cors-anywhere.herokuapp.com/https://letterboxd.com/${username}/watchlist/page/${page}`);
    console.log('Fetching watchlist page...');
    console.log(`Response status: ${response.status}`);
    
    let parser = new DOMParser();
    let html = parser.parseFromString(response.data, 'text/html');

    const pageMovies = html.getElementsByClassName('poster-container');
    console.log(`Total movies on page: ${pageMovies.length}`);

    let randomMoviePageIndex = randomMovieIndex % MOVIES_PER_PAGE;
    const randomMovie = pageMovies.item(randomMoviePageIndex);

    console.log('Random movie:');
    console.log(randomMovie);

    const image = randomMovie.getElementsByClassName('image').item(0);
    console.log(image.alt)
    setMovie(image.alt);

  }


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
          <Col span={18}>
            <Card style={{ borderRadius: '1.25em' }} hoverable>
              <h1>🎥 Letterboxd Watchlist Roulette</h1>
              <Input.Search
                size="large"
                placeholder="Enter Letterboxd username"
                value={username}
                prefix={<UserOutlined />}
                onChange={(e) => setUsername(e.target.value)}
                onSearch={() => searchUser()}
              />
              <Alert style={{ marginTop: 12 }} message="Sorry, could not find that user" type="error" closable />
            </Card>
          </Col>
        </Row>


        <Row justify="center" gutter={[32, 32]}>
          <Col span={18}>
            <Card style={{ borderRadius: '1.25em' }} hoverable>
              <Row justify="space-between">
                <h1>{watchlistLength} Movies Found</h1>
                <Button 
                  type="primary"
                  onClick={() => selectMovie()}
                >
                  I'm feeling lucky!
                </Button>
              </Row>
              
            </Card>
          </Col>
        </Row>




        <Movie />

        
        <Row justify="center">
          <Spin size="large" />
        </Row>
        
        
      </Content>
      
      {/* Footer */}
      <Footer>
        <Row justify="space-between">
          <Col>
            <Title style={{ fontSize: '1.25rem' }}>
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