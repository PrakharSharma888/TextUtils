import image from '../Assets/dp.jpeg'

function About(props){
    var bgcolor = 'black'
    var text = 'white'
    if(props.mode === 'light'){
        bgcolor = 'black'
        text = 'white'
    }
    else{
        bgcolor = 'white'
        text = 'black'
    }

    return (
        <>
        <div style={{backgroundColor: `${bgcolor}`,width: "16rem", color: `${text}`}} className="card border border-5 p-3">
            <img src={image} className="card-img-top" alt="dp.jpeg"/>
            <div className="card-body">
            <p className="card-text text-center">TextUtiles is the first React based project made by Prakhar Sharma</p>
            <div className="container d-flex justify-content-center">
            <a className="mx-2" href='https://github.com/PrakharSharma888'>Github</a>
            <a className="mx-2" href='https://www.linkedin.com/in/prakhar-sharma888/'>Linkedin</a>
            </div>
            </div>
        </div>
        </>
    )
}

export default About;