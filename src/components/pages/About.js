import React from 'react'

function About() {
    return (
        <React.Fragment>
            <div className="about">

                <h1>About</h1>
                <h2 style = {h2Style}>The Application: Noter</h2>
                <p>Noter is a todo list to track your tasks... add items  
                you want to keep track of on your personal page.</p>
                <p>Noter was built for an academic assignment using React and Redux.</p>  
            </div>
            <div className="about">
                <h2 style = {h2Style}>The Creator: Ben</h2>
                {/*Add a photo of myself*/}
                <p>
                    I'm a second-degree student at UBC studying computer science with an interest in machine learning
                    and computer vision. Before attending UBC, I attended UWO, where I received a BMSc in interdisciplinary
                    medical sciences. 
                </p>
                <p>
                    You can find me out and about in coffee shops, art shows, or just wandering the city.
                    If there's a Raptors game on, you can bet your bottom dollar I'm watching it. Thanks for checking out my project!
                </p>
            </div>
      </React.Fragment>
    )
}

const h2Style = {
    position: 'center',
    textAlign: 'center',
    fontSize: '24px',
    color: '#87ceeb',
    textShadow: '0 0 6px #ffffff'
}

const pStyle = {
    justifyContent: 'center',
    textAlign: 'center',
}

export default About;
