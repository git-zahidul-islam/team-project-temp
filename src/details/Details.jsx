import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import img1 from '../assets/details/s-l1600 (1).webp'
import img2 from '../assets/details/s-l1600 (2).webp'
import img3 from '../assets/details/s-l1600.webp'


const Details = () => {
  const images = [
    {
      original: img1,
      thumbnail: img1,
    },
    {
      original: img2,
      thumbnail: img2,
    },
    {
      original: img3,
      thumbnail: img3
    },
  ];




  return (
    <div className="flex flex-col md:flex-row p-4 bg-white">
      {/* Image Section */}
      <div className="w-full md:w-1/2 flex justify-center">
        <ImageGallery
         isFullscreen={false}
          thumbnailPosition={'left'}
           items={images}
            showThumbnails={true}
             />
      </div>

      {/* Details Section */}
      <div className="w-full md:w-1/2 p-4">
        <h1 className="text-2xl font-semibold mb-2">Jordan 4 Retro Mid Military Black</h1>
        <div className="text-gray-500 text-sm mb-4">
          <p>Rating: ★★★★☆ (84 reviews)</p>
        </div>
        <div className="text-lg mb-2">
          <p><strong>Colorway:</strong> White / Black / Neutral Grey</p>
          <p><strong>Style Code:</strong> DH6927-111</p>
          <p><strong>Release Date:</strong> May 22, 2022</p>
          <p><strong>Department:</strong> Men</p>
          <p><strong>Brand:</strong> Jordan</p>
          <p><strong>Model:</strong> Air Jordan 4</p>
        </div>
        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Sell one like this
        </button>
      </div>
    </div>
  );
};

export default Details;
