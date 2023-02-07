import React, { useState } from 'react';
import './categories.css'

const topics = [
  'All',
  'Education',
  'Music',
  'News',
  'Entertainment',
  'Coding',
  'Comedy',
  'Life',
  'Nature',
  'Financial',
  'Pranks',
  'Horoscope',
  'Vlogs'
]

const Categories = () => {
  const [activeTopic, setActiveTopic] = useState('All');

  const handleSubmit = (topic) => {
    setActiveTopic(topic);
  }
  return (
    <div className='categories'>
      {topics.map((topic, i) => (
        <span key={`${topic}_${i}`}
          onClick={() => handleSubmit(topic)}
          className={activeTopic === topic ? "active_topic" : ''} >
          {topic}
        </span>
      ))}   
    </div>
  )
}

export default Categories;