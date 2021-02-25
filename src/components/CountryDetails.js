import React, { Component } from 'react'
import countries from '../countries.json'
import CountryDetails from './CountryDetails'



class CountryDetails extends Component {

    state = {
        country: countries
    }

    getCountry = () => {
        let cca3 = this.props.match.params.country.cca3

        fetch("../countries.json")

        .then((res) => {

            let country = {
                name: country.name.common,
                capital: country.capital,
                area: country.area

            }

            this.setState({
                country: country
            })
        })
    
    } 

    componentDidMount() {
        console.log("Component DidMount")
        this.getCountry

    }

    render() {

       

        return (
            <div>
                <h2>{this.name.common}</h2>
                <h4>Capital {this.capital}</h4>
                <h4>Area {this.area}</h4>
                <div>
                    <h4>Borders </h4>
                       
                </div>


            </div>

        )



    }
        
}


export default CountryDetails;
