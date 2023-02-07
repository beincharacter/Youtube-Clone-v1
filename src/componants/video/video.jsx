import React, { useEffect, useState } from 'react'
import './video.css';
import { AiFillEye } from 'react-icons/ai'
import { apiRequest } from '../../api';
import moment from 'moment';
import numeral from 'numeral';

const Video = ({ video }) => {

  // console.log(video)

  const { id,
          snippet: {
            channelId,
            channelTitle,
            title,
            publishedAt,
            thumbnails: { medium }
          },
          contentDetails: {
            duration
          },
          statistics: {
            viewCount
          }
        } = video;
        const [channelIcon, setChannelIcon] = useState(null);

        let sec = moment.duration(duration).asSeconds();
        let FinalDuration = moment.utc(sec*1000).format('mm:ss');

        let viewCount_k = numeral(viewCount).format('0.a');
        let _pusblishedAt_T = moment(publishedAt).fromNow();
        
        useEffect(() => {
          const get_channel_details = async () => {
            const { data: { items }} = await apiRequest.get('/channels', {
              params: {
                part: 'snippet',
                id: channelId
              }
            })
            // console.log(items, ' channels')
            setChannelIcon(items[0].snippet.thumbnails.default.url)
          }
          get_channel_details();
        }, [channelId])
  return (
    <>
      <div className="video_div">
        <div className="video_thumbnail">
          <img src={medium.url} alt="thumbnail" />
          <span className='video-duration'>{FinalDuration}</span>
        </div>
        <div className="video_title">{title}</div>
        <div className="video_details">
          <AiFillEye />
          <span> {viewCount_k} views • {_pusblishedAt_T} </span>
        </div>
        <div className="video_channel">
          <img src={channelIcon} alt="channel pp" />
          <span>{channelTitle}</span>
        </div>
      </div>
    </>
  )
}

export default Video;