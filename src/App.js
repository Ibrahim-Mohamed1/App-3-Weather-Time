import React, { Component } from 'react';
import { withData } from './DataProvider';
import clearSkyDay from "./icons/01d.png"
import clearSkyNight from "./icons/01n.png"
import fewCloudsDay from "./icons/02d.png"
import fewCloudsNight from "./icons/02n.png"
import scatterClouds from "./icons/03d.png"
import brokenClouds from "./icons/04d.png"
import showerRain from "./icons/09d.png"
import rainDay from "./icons/10d.png"
import rainNight from "./icons/10n.png"


class App extends Component {
  constructor() {
    super()
    this.state = {
      value: "",
      icon: {}
    }
  }

  componentDidMount(){
    this.props.getWeather()
  }

  handleChange = (e) => {
    e.preventDefault()
    this.setState({ value: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.getWeather(this.state.value)
    this.setState({
      value: ""
    })
  }

  render() {
    const styles={
      form:{
        textAlign:"center",
        zoom: 2,
        marginTop: 20
      },
      input:{
        outline:"none",
        width: 85,
        border:"solid white",
        borderRadius: 2
      },
      button:{
        marginLeft: 10,
        paddingTop: 2,
        backgroundColor:'yellow',
        border:"none",
        borderRadius: 2,
        outline: "none"
      },
      weather:{
        width: 310,
        display:"block",
        margin:"auto",
        height: "33vh",
        marginTop: 100,
        padding:"0% 3%",
        textAlign:"center",
        paddingTop: 70,
        backgroundSize:"contain",
        backgroundRepeat: "no-repeat",
      },
      city:{
        color:'red',
        fontSize: 30,
        fontWeight: 800,
      },
      weatherType:{
        color:'white',
        fontSize: 20,
        fontWeight: 800,
      }
    }
    if (this.props.icon === '01d'){
      styles.weather.backgroundImage = `url(${clearSkyDay})`
      styles.weatherType.backgroundColor = '#000000c7'
      styles.city.backgroundColor = '#000000c7'
    }
    if (this.props.icon === '01n'){
      styles.weather.backgroundImage = `url(${clearSkyNight})`
      styles.weatherType.backgroundColor = '#000000c7'
      styles.city.backgroundColor = '#000000c7'
    }
    if (this.props.icon === '02d'){
      styles.weather.backgroundImage = `url(${fewCloudsDay})`
      styles.weatherType.backgroundColor = '#000000c7'
      styles.city.backgroundColor = '#000000c7'
    }
    if (this.props.icon === '02n'){
      styles.weather.backgroundImage = `url(${fewCloudsNight})`
      styles.weatherType.backgroundColor = '#000000c7'
      styles.city.backgroundColor = '#000000c7'
    }
    if (this.props.icon === '03d' || this.props.icon === '03n'){
      styles.weather.backgroundImage = `url(${scatterClouds})`
      styles.weatherType.backgroundColor = '#000000c7'
      styles.city.backgroundColor = '#000000c7'
    }
    if (this.props.icon === '04d' || this.props.icon === '04n'){
      styles.weather.backgroundImage = `url(${brokenClouds})`
      styles.weatherType.backgroundColor = '#000000c7'
      styles.city.backgroundColor = '#000000c7'
    }
    if (this.props.icon === '09d' || this.props.icon === '09n'){
      styles.weather.backgroundImage = `url(${showerRain})`
      styles.weatherType.backgroundColor = '#000000c7'
      styles.city.backgroundColor = '#000000c7'
    }
    if (this.props.icon === '10d'){
      styles.weather.backgroundImage = `url(${rainDay})`
      styles.weatherType.backgroundColor = '#000000c7'
      styles.city.backgroundColor = '#000000c7'
    }
    if (this.props.icon === '10n'){
      styles.weather.backgroundImage = `url(${rainNight})`
      styles.weatherType.backgroundColor = '#000000c7'
      styles.city.backgroundColor = '#000000c7'
    }
    return (
      <div>
        <form style={styles.form} onSubmit={this.handleSubmit} action="">
          <input
            style={styles.input}
            type="number"
            max="99999"
            name="value"
            value={this.state.value}
            placeholder="Enter Zipcode"
            onChange={this.handleChange}
            required
            autoFocus
          />
            <button style={styles.button}>Submit</button>
        </form>
        <div style={styles.weather}>
          <span style={{...styles.city}}>{this.props.weather.name}</span>
          <br/>
          <br/>
          <span style={{...styles.weatherType}}>{this.props.weather.weather ? this.props.weather.weather[0].description : null}</span>
          <br/>
          <br/>
          <span style={{...styles.weatherType, color:'cyan'}}>{this.props.weather.weather ? this.props.weather.main.temp + " °F" : null}</span>
        </div>
      </div>
    );
  }
}

export default withData(App);