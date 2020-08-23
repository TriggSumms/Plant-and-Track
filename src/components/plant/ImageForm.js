import React, { useState, useEffect } from 'react';
import ImageManager from '../../modules/ImageManager';



//Method for Creating Time Stamp in readeable form(mdn docs)...
let timeStamp = new Intl.DateTimeFormat("en", {
    timeStyle: "medium",
    dateStyle: "short"
});

const ImageForm = props => {
    const [image, setImage] = useState({ plantId: props.plantId, entryDate: timeStamp.format(Date.now()), imageTitle: "", url: "" });
    const [importImage, setImportImage] = useState("")
    const [plants, setPlants] = useState([])
    const [isLoading, setIsLoading] = useState(false);

    //Tracks entries into text boxes
    const handleFieldChange = evt => {
        const stateToChange = { ...image };
        stateToChange[evt.target.id] = evt.target.value;
        setImage(stateToChange);
    };



    const importTheImage = async evt => {
        const files = evt.target.files
        const formData = new FormData()
        formData.append('file', files[0])
        formData.append('upload_preset', "CapstoneSumms")
        setIsLoading(true)
        const res = await fetch(
            'https://api.cloudinary.com/v1_1/triggsumms/image/upload',
            {
                method: 'POST',
                body: formData
            }
        )
        const file = await res.json()
        // this will save your photo
        setImportImage(file.secure_url)
        setImage({ ...image, url: file.secure_url })
        ImageManager.getAllImages('images')
        setIsLoading(false)
    }















    const currentUserId = sessionStorage.getItem("activeUser")
    image.userId = parseInt(currentUserId)




    const constructNewImage = evt => {
        evt.preventDefault();
        if (image.imageTitle === "") {
            window.alert("Please fill out all the entry requirements....");
        } else {
            setIsLoading(true);
            image.plantId = parseInt(image.plantId)
            ImageManager.post(image)
                //.then(() => PlantManager.getAll(plants))
                .then(() => props.history.push("/home"));
        }
    };





    /* const getTheImages = () => {
            return ImageManager.getAllImages("images").then(imagesFromAPI => {
                imagesFromAPI.sort((x, y) => {
                    let a = new Date(x.entryDate),
                      b = new Date(y.entryDate);
                    return a - b;
               });     
                setImage(imagesFromAPI)
            }); 
        }  */



    useEffect(() => {
        // getTheImages()
    }, []);






    return (
        <>

            <div className="row">
                <div className="col s12 m5">
                    <div className="card-panel transparent">
                        <div className="row">
                            <div >
                                <button
                                    className="waves-effect waves-light btn"
                                    type="button"
                                    disabled={isLoading}
                                    onClick={constructNewImage}
                                >Submit</button>
                            </div>
                            <input type="file" lassName="waves-effect waves-light btn" name="file" id="file" onChange={importTheImage} placeholder="upload" />

                            <form className="col s12">
                                <input
                                    type="hidden"
                                    required
                                    className="form-control"
                                    onChange={handleFieldChange}
                                    id='plantId'
                                    value={plants.plantId}
                                />

                                <div className="input-field col s5">
                                    Title of the Image:
                <input placeholder="Give your image a memorable title..." id="imageTitle" type="text" data-length="10" required
                                        onChange={handleFieldChange} className="validate"></input>
                                    <label for="imageTitleform"></label>
                                </div>


                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ImageForm;