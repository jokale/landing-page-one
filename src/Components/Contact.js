import React from 'react'

class Contact extends React.Component {
    render(){
        return(
            
            <div id="contact">
               
                <div id="contact-details"> 
                <h3>
                    contact us 

                    
                </h3>                    
                
                <div id="address">

                    <h5>Contact us and we will get back to you in 24 hours</h5>
                    <h5>London, United Kingdom</h5>
                    <h5>+441234567890</h5>
                    <h5>company@company.com</h5></div>
                </div>
                <div id="form">
                    <form>
                       <h5> <label>Name</label> <br></br>
                        <input placeholder="Name"></input> <br></br>
                        <label>Email</label> <br></br>
                        <input placeholder="Email"></input> <br></br>
                        <label>Attach CV</label> <br></br>
                        <br></br><input type="file" id="myfile" name="myfile"></input> <br></br>
                       <br></br><button>Submit</button> <br></br>
                   </h5> </form>
                </div>
            </div>
        )
    }
}

export default Contact 

