import React, { Component } from 'react'
import countries from '../countries.json'
import { Link, Route } from 'react-router-dom'
import CountryDetails from './CountryDetails'

 class CountriesList extends Component {

    state = {
        allCountries: countries
    }

    componentDidMount() {

        fetch("../countries.json")

            .then((res) => {
                this.setState({countries})
            })

            .catch((err) => {
                console.log('Something went wrong while getting countries')
            })   
        
    }

    componentDidUpdate() {
        console.log('Component is updated')
    }
  

    render() {

        const { allCountries } = this.state

        return (

            <div class="container">
                <div class="row">
                     <div class="col">
                        <h3>All countries here:</h3>

                        {
                            allCountries.map ((country, index) => {
                                console.log(country)
                                return (
                                     <div class="container-country" key={index}>
                                        <Link to={'/country/${country.cca3}'}> 
                                            <div>{country.flag}</div> 
                                            <p>{country.name.common}</p>
                                        </Link>  
                                    </div>
                                                
                                )
                        
                            })

                        }
                    
                    </div>

                    <div class="col">
                        <Route path='/country/:country.cca3' component={CountryDetails} />
                    </div>

                </div>
            </div>

        )      
        
    }
}

export default CountriesList;