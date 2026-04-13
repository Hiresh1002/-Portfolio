import { useState } from "react";

export default function Projects() {

  // 👉 Apne 2 image URLs yaha daalo
  const baseImages = [
    "https://res.cloudinary.com/duipuyys1/image/upload/v1776107410/D5_JUL24_PPM_egbfeh.png",
  "https://res.cloudinary.com/duipuyys1/image/upload/v1776107410/D4_JUL24_JPT_nereek.png",
  "https://res.cloudinary.com/duipuyys1/image/upload/v1776107409/D7_JUL24_PPM_usmyox.png",
  "https://res.cloudinary.com/duipuyys1/image/upload/v1776107408/D7_JUL24_SER_szb9ql.png",
  "https://res.cloudinary.com/duipuyys1/image/upload/v1776107406/D5_JUL24_YDS_oyxoeg.png",
  "https://res.cloudinary.com/duipuyys1/image/upload/v1776107403/D5_JUL24_OHB_2_dkg1dl.png",
  "https://res.cloudinary.com/duipuyys1/image/upload/v1776107403/D4_JUL24_YDS_znro8e.png",
  "https://res.cloudinary.com/duipuyys1/image/upload/v1776107398/D4_AUG24_KBC_w9zqp5.png",
  "https://res.cloudinary.com/duipuyys1/image/upload/v1776107396/D6_JUL24_SER_xntg4x.png",
  "https://res.cloudinary.com/duipuyys1/image/upload/v1776107400/D5_JUL24_JPT_zectxx.png",
  "https://res.cloudinary.com/duipuyys1/image/upload/v1776107401/D3_AUG24_SER_lun1hn.png",
  "https://res.cloudinary.com/duipuyys1/image/upload/v1776107398/D4_AUG24_JPT_i3ycmt.png",
  ];

  // 👉 32 images banane ke liye repeat kar rahe hain
  const images = Array.from({ length: 12 }, (_, i) => 
    baseImages[i % baseImages.length]
  );

  const [page, setPage] = useState(0);
  const [activeImage, setActiveImage] = useState(images[0]);

  const imagesPerPage = 16;

  // 👉 current 16 images
  const currentImages = images.slice(
    page * imagesPerPage,
    (page + 1) * imagesPerPage
  );

  return (
    <section className="section">

      <h1 className="head">
        Work <span className="outline-text">Project</span>
      </h1>

      <div className="container">

        {/* 👈 Left Preview */}
        <div className="left">
          <img src={activeImage} alt="preview" />
        </div>

        {/* 👉 Right Grid */}
        <div className="right">
          {currentImages.map((img, index) => (
            <img
              key={index}
              src={img}
              alt="grid"
              onMouseEnter={() => setActiveImage(img)}
            />
          ))}

          {/* 👇 Buttons */}
          <div className="controls">
            <button
              onClick={() => setPage(page - 1)}
              disabled={page === 0}
            >
              ⬅ Prev
            </button>

            <button
              onClick={() =>
                setPage((page + 1) % Math.ceil(images.length / imagesPerPage))
              }
            >
              Next ➡
            </button>
          </div>

        </div>

      </div>

    </section>
  );
}