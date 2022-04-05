import React, { useState, useEffect } from 'react'
import axios from 'axios'
const baseURL =
  'https://femmyte:library1@opensky-network.org/api/flights/all?begin=1517227200&end=1517230800'

const Dashboard = () => {
  const [flight, setFlight] = useState(null)
  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setFlight(response.data)
    })
  }, [])
  const time = (timestamp) => {
    let date = new Date(timestamp * 1000)

    var hours = date.getHours()
    var ampm = hours >= 12 ? 'pm' : 'am'
    hours = hours % 12
    hours = hours ? hours : 12
    var minutes = '0' + date.getMinutes()
    var seconds = '0' + date.getSeconds()
    // Will display time in 10:30:23 format
    // hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2)
    var formattedTime = hours + ':' + minutes.substr(-2) + ampm
    console.log(formattedTime)
    return formattedTime
  }
  let timeZone = new Date()
    .toLocaleDateString(undefined, { day: '2-digit', timeZoneName: 'long' })
    .substring(4)
  if (!flight) return null
  return (
    <div>
      {flight.map((items) => {
        const { icao24, firstSeen, lastSeen } = items
        let last = time(lastSeen)
        let first = time(firstSeen)
        let date = time(new Date()) + '  ' + timeZone
        return (
          <div className='container'>
            <div className='wrapper' key={icao24}>
              <p>{icao24} |</p>
              <p>{date} |</p>
              <p>{first} |</p>
              <p>{last}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Dashboard
