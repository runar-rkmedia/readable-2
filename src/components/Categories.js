import React from 'react'

export default function Categories ({ list }) {
  
  return (
    <div className='ingredients-list'>
      <h3 className='subheader'>
        categories
      </h3>
      <ul>
        {list.map((item) => (
          <li key={item}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}
