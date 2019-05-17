import React, { Component } from 'react';
import axios from "axios"
const { Provider, Consumer } = React.createContext()


class DataProvider extends Component {
    constructor(){
        super()
        this.state={
            weather: [],
            icon: ""
        }
    }
    getWeather = (zip) => {
        axios.get(`http://api.openweathermap.org/data/2.5/weather?zip=${zip},us&units=imperial&APPID=e50aa7507fdcf8e3acbcd4ad2f45345b`).then(res => {
            this.setState({
                weather: res.data,
                icon: res.data.weather[0].icon
            })
        })
    }
    
    render() {
        return (
            <Provider value={{
                getWeather: this.getWeather,
                ...this.state
            }}
            >
                {this.props.children}
            </Provider>
        );
    }
}

export default DataProvider;

export function withData(C) {
    return props => <Consumer>{value => <C {...value}{...props} />}</Consumer>
}