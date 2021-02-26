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
                     <div class="col-6 col-md-4">
                        {/* <h3>All countries here:</h3> */}

                        {
                            allCountries.map ((country, index) => {
                                console.log(country)
                                return (
                                     <div key={index}>
                                        <Link class="container-country" to={'/country/${country.cca3}'}> 
                                            <div class="flag">{country.flag}</div> 
                                            <p class="name-in-list">{country.name.common}</p>
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