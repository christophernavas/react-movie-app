import React, { useState, useEffect } from "react";
import { Card, Skeleton, Row, Col } from 'antd';
import {
  Link
} from "react-router-dom";
import '../../App.css';

function Movie() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const {Meta} = Card

  useEffect(() => {
    // Trending movie 
    fetch("https://api.themoviedb.org/3/trending/movie/day?api_key=a300ad80b62f40a00453674ec5c5a217")
    .then(res => res.json())
    .then(setData)
    .then(setLoading(false))
  }, [])

    return (
      <>
      <Row justify="center">
            {!loading && data.results && data.results.map(item => 
            <Link to={"/" + item.title}>
              <Col span={4} offset={1} style={{ marginTop: "1rem", marginBottom: "1rem" }}>
                <Card
                hoverable
                style={{ width: 200 }}
                cover={<img alt="example" src={"http://image.tmdb.org/t/p/w342/" + item.poster_path}/>}
                >
                <Meta title={item.title} description={item.release_date} />
                </Card>
              </Col>
            </Link>
            )}
            {loading &&           
            <Skeleton loading={loading}  active>
              <Card/>
            </Skeleton>
        }
        </Row>
      </>
    );
}

export default Movie;