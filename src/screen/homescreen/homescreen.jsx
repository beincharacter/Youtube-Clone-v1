import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Categories from "../../componants/categoriesBar/categories";
import Video from "../../componants/video/video"
import { HomeVideos } from '../../redux/actions/videos.action';
import moment from 'moment/moment';
import numeral from 'numeral';

const HomeScreen = () => {

    const { videos } = useSelector(state => state.homeVideos);



  
    // console.log(videos, ' inside homescreen')

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(HomeVideos())
    },[dispatch]);

  return (
    <>
        <Container>
            <Categories />
            <Row>
                {videos.map((video) => (
                    <Col lg={4} md={3} >
                        <Video video={video} key={video.id} />
                    </Col>
                ))}
            </Row>
        </Container>
    </>
  )
}

export default HomeScreen