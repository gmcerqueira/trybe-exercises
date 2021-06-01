import React, { Component } from "react";
import "./Dogs.css";

class Dogs extends Component {
  constructor() {
    super();

    this.state = {
      breeds: '',
      search: '',
      imageData: "",
      images: [],
      loading: true,
    };
    this.fetchDogImage = this.fetchDogImage.bind(this);
    this.fetchBreeds = this.fetchBreeds.bind(this);
    this.addDog = this.addDog.bind(this);
    this.newDog = this.newDog.bind(this);
    this.saveList = this.saveList.bind(this);
    this.searchBreed = this.searchBreed.bind(this);
    this.checkLocalStorage = this.checkLocalStorage.bind(this);
  }

  async fetchDogImage() {
    this.setState({ loading: true }, async () => {
      const request = await fetch("https://dog.ceo/api/breeds/image/random");

      const responseObj = await request.json();
      try {
        !responseObj.message.includes("terrier")
          ? this.fetchDogImage()
          : this.setState({ imageData: responseObj, loading: false });
      } catch (error) {
        console.log(error);
      }
    });
  }

  async fetchBreeds() {
    const breedsList = await fetch("https://dog.ceo/api/breeds/list/all").then(res => res.json()).then(res => res.message)
    this.setState({ breeds: breedsList })
  }

  addDog() {
    this.setState(({ images, imageData }) => ({
      images: [...images, imageData],
    }));
    this.fetchDogImage();
  }

  newDog() {
    this.fetchDogImage();
  }

  saveList() {
    localStorage.setItem('dogs', JSON.stringify(this.state.images))
  }

  searchBreed() {
    const breed = document.querySelector('#search').value.toLowerCase()
    if(this.breeds[breed]) this.setState({ search: breed })
  }

  checkLocalStorage() {
    if (localStorage.length > 0) {
      const images = JSON.parse(localStorage.getItem('dogs'))
      this.setState({ images: images })
    } else {
      console.log('nada')
    }
  }

  componentDidMount() {
    this.fetchDogImage();
    this.fetchBreeds()
    this.checkLocalStorage()
  }

  render() {
    const { imageData, images, loading } = this.state;
    const currentImage = imageData.message;
    const loadingElement = <span className="loading">loading...</span>;
    return (
      <div>
        <div className="search-dog">
          <input id="search" type="text" />
          <button onClick={this.searchBreed}>Search breed</button>
        </div>

        <div className="dogs">
          {images.map((image, index) => (
            <img
              className="dog-image"
              alt="dog"
              src={image.message}
              key={index + 1}
            />
          ))}
          {loading ? (
            loadingElement
          ) : (
            <img className="dog-image" alt="dog" src={currentImage} />
          )}

        </div>
        <button className="add-btn" onClick={this.addDog}>
          Add dog
        </button>
        <button className="new-btn" onClick={this.newDog}>
          New dog
        </button>
        <button className="save-btn" onClick={this.saveList}>
          Save list
        </button>
      </div>
    );
  }
}

export default Dogs;
