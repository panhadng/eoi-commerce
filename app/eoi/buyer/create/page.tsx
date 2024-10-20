"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Create = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [status, setStatus] = useState("");
  const [productInfo, setProductInfo] = useState({
    name: "",
    description: "",
    category: "",
  });
  const [preferences, setPreferences] = useState({
    min_product_price: "",
    max_product_price: "",
    earliest_active_date: "",
    latest_active_date: "",
    product_condition: "new",
  });
  const [isImageUploaded, setIsImageUploaded] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const [categories, setCategories] = useState<string[]>([]);
  const router = useRouter();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/categories/");
        if (response.ok) {
          const data = await response.json();
          setCategories(data);
        } else {
          console.error("Failed to fetch categories");
        }
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleProductInfoChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setProductInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handlePreferencesChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setPreferences((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = async () => {
    if (!selectedFile) {
      setStatus("Please select a file!");
      return;
    }

    const formData = new FormData();
    formData.append("image", selectedFile);

    try {
      const response = await fetch("http://127.0.0.1:8000/api/upload-to-s3/", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
        credentials: "include",
      });

      if (response.ok) {
        const data = await response.json();
        setStatus("Image uploaded successfully!");
        setImageUrl(data.image_url);
        setIsImageUploaded(true);

        // Fetch product info from backend
        const productInfoResponse = await fetch(
          "http://127.0.0.1:8000/api/product-info/",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ image_url: data.image_url }),
          }
        );

        if (productInfoResponse.ok) {
          const productInfoData = await productInfoResponse.json();
          setProductInfo({
            name: productInfoData.name,
            description: productInfoData.description,
            category: productInfoData.category,
          });
        } else {
          setStatus("Failed to retrieve product information");
        }
      } else {
        const errorData = await response.json().catch(() => null);
        setStatus(
          `Image upload failed: ${errorData?.message || response.statusText}`
        );
      }
    } catch (error) {
      setStatus("Error uploading image: Network error or CORS issue");
      console.error("Error uploading image:", error);
    }
  };

  const handleCreateEOI = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("http://127.0.0.1:8000/api/eois/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...productInfo,
          ...preferences,
          imageUrl: imageUrl, // Make sure this matches the server-side key
        }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setStatus("EOI created successfully");
        router.push("/eoi/buyer"); // Redirect to buyer dashboard or confirmation page
      } else {
        const errorData = await response.json();
        setStatus(`Failed to create EOI: ${JSON.stringify(errorData)}`);
      }
    } catch (error) {
      setStatus("Error creating EOI");
      console.error(error);
    }
  };

  return (
    <div className="container mx-auto p-4 overflow-y-auto">
      <h1 className="text-2xl font-bold mb-4">Create EOI</h1>

      {/* Image Upload Section */}
      <div className="space-y-4 mb-8">
        <div>
          <input
            type="file"
            onChange={handleFileChange}
            className="w-full p-2 border rounded"
            accept="image/*"
          />
        </div>
        <button
          onClick={handleImageUpload}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          disabled={!selectedFile || isImageUploaded}
        >
          Upload Image
        </button>
      </div>

      {imageUrl && (
        <div className="mt-4 mb-8">
          <h2 className="text-xl font-semibold mb-2">Uploaded Image:</h2>
          <Image
            src={imageUrl}
            alt="Uploaded"
            width={500}
            height={300}
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>
      )}

      {/* Product Info Section */}
      <form onSubmit={handleCreateEOI} className="space-y-8">
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Product Information</h2>
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-1">
                Product Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={productInfo.name}
                onChange={handleProductInfoChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div>
              <label htmlFor="description" className="block mb-1">
                Description
              </label>
              <textarea
                id="description"
                name="description"
                value={productInfo.description}
                onChange={handleProductInfoChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div>
              <label htmlFor="category" className="block mb-1">
                Category
              </label>
              <select
                id="category"
                name="category"
                value={productInfo.category}
                onChange={handleProductInfoChange}
                className="w-full p-2 border rounded"
                required
              >
                <option value="">Select a category</option>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Preferences Section */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Product Preferences</h2>
          <div className="space-y-4">
            <div>
              <label htmlFor="min_product_price" className="block mb-1">
                Minimum Price
              </label>
              <input
                type="number"
                id="min_product_price"
                name="min_product_price"
                value={preferences.min_product_price}
                onChange={handlePreferencesChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div>
              <label htmlFor="max_product_price" className="block mb-1">
                Maximum Price
              </label>
              <input
                type="number"
                id="max_product_price"
                name="max_product_price"
                value={preferences.max_product_price}
                onChange={handlePreferencesChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div>
              <label htmlFor="earliest_active_date" className="block mb-1">
                Earliest Active Date
              </label>
              <input
                type="date"
                id="earliest_active_date"
                name="earliest_active_date"
                value={preferences.earliest_active_date}
                onChange={handlePreferencesChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div>
              <label htmlFor="latest_active_date" className="block mb-1">
                Latest Active Date
              </label>
              <input
                type="date"
                id="latest_active_date"
                name="latest_active_date"
                value={preferences.latest_active_date}
                onChange={handlePreferencesChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div>
              <label htmlFor="product_condition" className="block mb-1">
                Product Condition
              </label>
              <select
                id="product_condition"
                name="product_condition"
                value={preferences.product_condition}
                onChange={handlePreferencesChange}
                className="w-full p-2 border rounded"
                required
              >
                <option value="new">New</option>
                <option value="used">Used</option>
                <option value="refurbished">Refurbished</option>
              </select>
            </div>
          </div>
        </div>

        {/* Create EOI Button */}
        <button
          type="submit"
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          disabled={!isImageUploaded}
        >
          Create EOI
        </button>
      </form>

      <p className="mt-4">{status}</p>
    </div>
  );
};

export default Create;
