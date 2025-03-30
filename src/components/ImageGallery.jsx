import ImageCard from "./ImageCard";


export default function ImageGallery({ items, openModal }) {
    
    return (
        <ul className="image-gallery">
          {items.map(({ id, urls, alt_description }) => (
            <li key={id} className="image-item" onClick={() => openModal({ urls, alt_description })}>
           <ImageCard id={id}
           urls={urls}
           description={alt_description}/>
            </li>
          ))}
        </ul>
      );
    
    }