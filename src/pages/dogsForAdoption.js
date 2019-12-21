import React from 'react'
import pawprint from '../assets/images/pawprint.png'

class dogsForAdoption extends React.Component {

    state = {
        animals: []

    }


    componentDidMount() {
        fetch('/api/animals')
            .then(response => response.json())
            .then(data => this.setState({ animals: data }))
    }
    render() {
        console.log(this.state.animals)
        return (

            <div className="dogs">
                {
                    this.state.animals.map(dog => {
                        if (dog.photo) {
                            return (
                                <div key={dog.id} className="card" id={dog.id} >
                                    <img className="pic-dogs" src={dog.photo && dog.photo.medium} alt="Dog" />
                                    <div className="overlay">
                                        {/* <img className="fa-paw" src={pawprint} alt={"pawprint"} /> */}
                                    </div>
                                    <div className="container">
                                        <p className="dog-name">{dog.name}</p>
                                        <p>{dog.age}</p>
                                        <p>{dog.breed}</p>
                                    </div>

                                </div>

                            )
                        }

                    })
                }
            </div >
        )
    }


}
export default dogsForAdoption
