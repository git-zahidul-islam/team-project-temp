import { useState } from "react";
import axios from "axios";

const BannerPost = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: null,
  });
  const [imageURL, setImageURL] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // ImageBB API key
    const apiKey = "ff0901c85eca618a88be651e3a2650cd";
    const formDataImage = new FormData();
    formDataImage.append("image", formData.image);

    try {
      // Upload image to ImageBB and get the image URL
      const response = await axios.post(
        `https://api.imgbb.com/1/upload?key=${apiKey}`,
        formDataImage
      );
      const imageUrl = response.data.data.url;
      setImageURL(imageUrl);

      // Display the form data
      console.log("Title: ", formData.title);
      console.log("Description: ", formData.description);
      console.log("Image URL: ", imageUrl);


      const formResponse = await axios.post("http://localhost:5000/banner-change",{
        title: formData.title,
        description: formData.description,
        bannerImage: imageUrl,
    });
      console.log("return data get",formResponse.data);

      
    } catch (error) {
      console.error("Error uploading the image", error);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Upload Form</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            className="mt-1 p-2 block w-full border rounded-md"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            className="mt-1 p-2 block w-full border rounded-md"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Image</label>
          <input
            type="file"
            name="image"
            onChange={handleImageChange}
            className="mt-1 block w-full text-sm text-gray-900 border rounded-md"
            required
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-md"
        >
          Submit
        </button>
      </form>

    </div>
  );
};

export default BannerPost;
