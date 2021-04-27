// /src/components/Album.js
import React from 'react';
import Image from './Image.js';

class Albums extends React.Component {
  render() {
    const albums = [{
      image: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/b0/Coldplay_-_Mylo_Xyloto.JPG/220px-Coldplay_-_Mylo_Xyloto.JPG',
      title: 'Mylo Xyloto',
      releaseDate: {
        year: '2011',
        month: '10',
        day: '24',
      },
      others: {
        recordCompany: 'Capitol, Parlophone',
        formats: 'CD, digital'
      }
    },
    {
      image: 'https://upload.wikimedia.org/wikipedia/pt/thumb/5/5d/Coldplay_-_Ghost_Stories.jpg/220px-Coldplay_-_Ghost_Stories.jpg',
      title: 'Ghost Stories',
      releaseDate: {
        year: '2014',
        month: '05',
        day: '16',
      },
      others: {
        recordCompany: 'Parlophone',
        formats: 'CD, digital'
      }
    }]

    return (
      albums.map(album =>
        <section style={{width:'500px'}}>
        <Image source={album.image } alternativeText={album.title } />
        <h2>{album.title }</h2>
        <p>{album.releaseDate.year }</p>
        <p>
          Lançamento:
          { `${album.releaseDate.day }/${album.releaseDate.month }/${album.releaseDate.year }` }
        </p>
        <p>Gravadora: {album.others.recordCompany }</p>
        <p>Formatos: {album.others.formats }</p>
      </section>
      )
    )
  }
}

export default Albums;