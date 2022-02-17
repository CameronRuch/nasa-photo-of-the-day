import React from 'react';


const NasaImage = (props) => {
    return (
        <div className = "nasa-photo">
            <h2>{props.photo.title}</h2>
            <p>{props.photo.date}</p>
            <img src={props.photo.hdurl}/>
            <p className = "photo-description">{props.photo.explanation}</p>
            <footer>Copyright &copy; {props.photo.copyright}</footer>
        </div>

    )
}

export default NasaImage;