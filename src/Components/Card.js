import React from 'react'

class Card extends React.Component {
    render(){
        return(
            <div id="about">
                <h3 id="h3-about">About us</h3>
                <p id="p-about"> J-Tech is one of the world leading Tech agencies. <br></br>Outsourcing the best talent across the globe for amazing clients such as Apple, Google and more</p>

                 <br></br>
            <div id="vision">
                <div id="text-vision">
                    <h3 id="h3-vision">The vision</h3>
                    <p>Here at J-Tech we aim to ensure all our tech family are placed in <br></br> the best companies and that the best companies get the best of our talent</p>
                    <p>With our intensive tech programs we train you up to be employment ready in 3 months!</p>
                </div>
                
            </div>
            <div id="mission">
                
                
                <h3 id="h3-vision">The J-Tech Mission</h3>
                <p>Here at J-Tech we aim to ensure all our tech family are placed in <br></br> the best companies and that the best companies get the best of our talent</p>
            </div>

            <div id="vision">
                <h3 id="h3-vision">Where you fit in?</h3>
                <p>Do you want to be working in one of the best tech companies? Then send over your CV and let us do the rest</p>
                <p>Check out below some of our tech specialists have to say about our serivice.</p>
                <div class="cards">
                     <div class="card">                   
                     <h4><b>Jacob</b></h4> 
                     <h6>Software Engineer</h6>
                     <p>"J-Tech was ecerything I needed to step up my career" </p> <br></br>
                    <h4><b>Helen</b></h4> 
                     <h6>DevOpsEngineer</h6>
                     <p>"J-Tech was ecerything I needed to step up my career" </p> <br></br>
                     <h4><b>Samuel</b></h4> 
                     <h6>UX/UI Engineer</h6>
                     <p>"J-Tech was ecerything I needed to step up my career" </p> 
                      </div>
                   
                </div>
            </div>

            </div>
        )
    }
}

export default Card 

