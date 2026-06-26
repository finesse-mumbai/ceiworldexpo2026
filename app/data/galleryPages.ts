export type GallerySpan = "tall" | "wide" | "small" | "large";

export interface GalleryItem {
  id: string;
  url: string;
  span: GallerySpan;
  price: number;
  photographer: string;
}

const images2018 = [
  "Photo 1.jpg", "Photo 10.jpg", "Photo 11.jpg", "Photo 14.jpg", "Photo 16.jpg", "Photo 19.jpg",
  "Photo 2.jpg", "Photo 20.jpg", "Photo 22.jpg", "Photo 23.jpg", "Photo 25.jpg", "Photo 26.jpg",
  "Photo 27.jpg", "Photo 29.jpg", "Photo 3.jpg", "Photo 30.jpg", "Photo 32.jpg", "Photo 33.jpg",
  "Photo 35.jpg", "Photo 36.jpg", "Photo 37.jpg", "Photo 38.jpg", "Photo 39.jpg", "Photo 4.jpg",
  "Photo 40.jpg", "Photo 41.jpg", "Photo 5.jpg", "Photo 6.jpg", "Photo 7.jpg", "Photo 8.jpg",
  "Photo 9.jpg", "photo_45.jpg", "photo_46.jpg", "photo_47.jpg", "photo_48.jpg", "photo_49.jpg",
  "photo_50.jpg", "photo_51.jpg", "photo_52.jpg", "photo_53.jpg", "photo_54.jpg", "photo_55.jpg",
  "photo_56.jpg", "photo_57.jpg"
].map(name => `/images/gallery/2018/large/${encodeURI(name)}`);

const images2019 = [
  "BXSR0082.jpg", "BXSR0157.jpg", "BXSR0179.jpg", "BXSR0184.jpg", "BXSR0192.jpg", "BXSR0212.jpg",
  "BXSR0213.jpg", "BXSR0220.jpg", "BXSR0224.jpg", "BXSR0225.jpg", "BXSR0233.jpg", "BXSR0249.jpg",
  "BXSR0250.jpg", "C89A9355.jpg", "C89A9356.jpg", "C89A9364.jpg", "C89A9365.jpg", "C89A9369.jpg",
  "C89A9510.jpg", "C89A9520.jpg", "C89A9521.jpg", "C89A9522.jpg", "C89A9552.jpg", "IMG_20191115_103420.jpg",
  "IMG_20191115_103436.jpg", "IMG_20191115_104509.jpg", "IMG_20191115_111143.jpg", "IMG_20191115_111206.jpg",
  "IMG_20191115_111518.jpg", "IMG_20191115_113816.jpg", "IMG_20191115_123527.jpg", "IMG_20191115_131138.jpg",
  "IMG_20191116_113247.jpg", "IMG_8647.jpg", "IMG_8649.jpg", "IMG_8658.jpg", "IMG_8660.jpg", "IMG_8904.jpg",
  "IMG_8988.jpg", "IMG_9129.jpg", "IMG_9144.jpg", "IMG_E3392.jpg"
].map(name => `/images/gallery/2019/large/${encodeURI(name)}`);

// Total 86 images.
const allImages = [...images2018, ...images2019];

const photographers = [
  "Rohan Gupta", "Neha Sharma", "Arjun Patel", "Priya Singh", "Vikram Rathore", 
  "Anita Desai", "Siddharth Verma", "Kavita Rao", "Aditya Iyer", "Meera Kapoor",
  "CEI Official"
];

// Helper to get random item
const sample = <T>(arr: T[]) => arr[Math.floor(Math.random() * arr.length)];
const randomPrice = () => Math.floor(Math.random() * (99 - 16 + 1)) + 16;

const pageSpanPattern: GallerySpan[] = [
  "tall", "tall", "small", "small", "wide", "small", "small"
];

// Shuffle images once to ensure no duplicates in the first 86 cards
function shuffle(array: string[]) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

const shuffledImages = shuffle(allImages);

export const galleryPages: GalleryItem[][] = Array.from({ length: 10 }).map((_, pageIdx) => {
  return Array.from({ length: 7 }).map((_, itemIdx) => {
    // Pick image from shuffled array sequentially to avoid duplicates.
    // Wrap around if we exceed 86 (though 10 pages * 7 items = 70 items, so we have enough!)
    const globalIdx = pageIdx * 7 + itemIdx;
    const url = shuffledImages[globalIdx % shuffledImages.length];

    return {
      id: `gallery-item-${pageIdx}-${itemIdx}`,
      url: url,
      span: pageSpanPattern[itemIdx],
      price: randomPrice(),
      photographer: sample(photographers),
    };
  });
});
