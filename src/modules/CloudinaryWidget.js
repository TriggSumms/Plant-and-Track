import React from 'react';
//import axios from 'axios';
//import { CloudinaryContext, Transformation, Image } from 'cloudinary-react';
//import { render } from 'react-dom';






class CloudFiles extends React.Component {
  state = {
    imageUrl: undefined,
    imageAlt: undefined,
  }

  handleImageUpload = () => {
    const { files } = document.querySelector('input[type="file"]')

    const formData = new FormData();
    formData.append('file', files[0]);
    formData.append('upload_preset', 'CapstoneSumms');

    const options = {
      method: 'POST',
      body: formData,
    };


    return fetch('https://api.cloudinary.com/v1_1/triggsumms/image/upload', options)

      .then(res => res.json())
      .then(res => {

        this.setState({
          imageUrl: res.secure_url,
          imageAlt: `An image of ${res.original_filename}`
        })
      })

      .catch(err => console.log(err));

  }

  openWidget = () => {
    window.cloudinary.createUploadWidget(
      {
        cloudName: 'triggsumms',
        uploadPreset: 'CapstoneSumms',
        sources: [
          "google_drive",
          "local",
          "dropbox",
          "url",
          "camera",
          "image_search",
          "instagram",
          "facebook"
        ],
        googleApiKey: "<image_search_google_api_key>",
        showAdvancedOptions: true,
        cropping: false,
        multiple: true,
        defaultSource: "local",
        styles: {
          palette: {
            window: "#CAD2C5",
            sourceBg: "#84A98C",
            windowBorder: "#354F52",
            tabIcon: "#2F3E46",
            inactiveTabIcon: "#354F52",
            menuIcons: "#0094C7",
            link: "#CAD2C5",
            action: "#2F3E46",
            inProgress: "#0194c7",
            complete: "#53ad9d",
            error: "#c43737",
            textDark: "#000000",
            textLight: "#FFFFFF"
          },
          fonts: {
            default: null,
            "'Poppins', sans-serif": {
              url: "https://fonts.googleapis.com/css?family=Poppins",
              active: true
            }
          }
        }
      },

      (error, { event, info }) => {
        if (event === 'success') {
          this.setState({
            imageUrl: info.secure_url,
            imageAlt: `An image of ${info.original_filename}`
          })
        }
      },
    ).open();
  };






  render() {
    const { imageUrl, imageAlt } = this.state;

    return (
      <main className="App">
        <section className="left-side">
          <form>
            <div className="form-group">
              <input type="file" />
            </div>
            <button type="button" className="btn widget-btn" onClick={this.openWidget}>Upload Via Widget</button>
            <button type="button" className="btn" onClick={this.handleImageUpload}>Submit</button>

          </form>
        </section>
      </main>
    );
  }
}

export default CloudFiles;