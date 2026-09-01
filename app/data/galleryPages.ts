import { galleryBlur, FALLBACK_META } from "./galleryBlur";

export interface GalleryItem {
  id: string;
  url: string;
  layoutClass: string;
  /** Descriptive alt text carrying the edition — one per photograph, never repeated. */
  alt: string;
  /** Show edition the photograph belongs to. */
  edition: string;
  /** Tiny base64 LQIP for next/image's blur placeholder. */
  blurDataURL: string;
  /** Intrinsic dimensions — lets the lightbox size correctly without a layout shift. */
  width: number;
  height: number;
  price: number;
  photographer: string;
}

const images2018 = [
  "Photo_37.jpg", "Photo_10.jpg", "Photo_11.jpg", "Photo_14.jpg", "Photo_16.jpg", "Photo_19.jpg",
  "Photo_2.jpg", "Photo_20.jpg", "Photo_22.jpg", "Photo_23.jpg", "Photo_25.jpg", "Photo_26.jpg",
  "Photo_27.jpg", "Photo_29.jpg", "Photo_3.jpg", "Photo_30.jpg", "Photo_32.jpg", "Photo_33.jpg",
  "Photo_35.jpg", "Photo_36.jpg", "Photo_37.jpg", "Photo_38.jpg", "Photo_39.jpg", "Photo_4.jpg",
  "Photo_40.jpg", "Photo_41.jpg", "Photo_5.jpg", "Photo_6.jpg", "Photo_7.jpg", "Photo_8.jpg",
  "Photo_9.jpg", "photo_45.jpg", "photo_46.jpg", "photo_47.jpg", "photo_48.jpg", "photo_49.jpg",
  "photo_50.jpg", "photo_51.jpg", "photo_52.jpg", "photo_53.jpg", "photo_54.jpg", "photo_55.jpg",
  "photo_56.jpg", "photo_57.jpg"
].map(name => ({ edition: "2018", url: `/images/gallery/2018/large/${encodeURI(name)}` }));

const images2019 = [
  "BXSR0082.jpg", "BXSR0157.jpg", "BXSR0179.jpg", "BXSR0184.jpg", "BXSR0192.jpg", "BXSR0212.jpg",
  "BXSR0213.jpg", "BXSR0220.jpg", "BXSR0224.jpg", "BXSR0225.jpg", "BXSR0233.jpg", "BXSR0249.jpg",
  "BXSR0250.jpg", "C89A9355.jpg", "C89A9356.jpg", "C89A9364.jpg", "C89A9365.jpg", "C89A9369.jpg",
  "C89A9510.jpg", "C89A9520.jpg", "C89A9521.jpg", "C89A9522.jpg", "C89A9552.jpg", "IMG_20191115_103420.jpg",
  "IMG_20191115_103436.jpg", "IMG_20191115_104509.jpg", "IMG_20191115_111143.jpg", "IMG_20191115_111206.jpg",
  "IMG_20191115_111518.jpg", "IMG_20191115_113816.jpg", "IMG_20191115_123527.jpg", "IMG_20191115_131138.jpg",
  "IMG_20191116_113247.jpg", "IMG_8647.jpg", "IMG_8649.jpg", "IMG_8658.jpg", "IMG_8660.jpg", "IMG_8904.jpg",
  "IMG_8988.jpg", "IMG_9129.jpg", "IMG_9144.jpg", "IMG_E3392.jpg"
].map(name => ({ edition: "2019", url: `/images/gallery/2019/large/${encodeURI(name)}` }));

const allImages = [...images2018, ...images2019]; // 86 photographs

/**
 * Deterministic PRNG (mulberry32).
 *
 * The previous implementation shuffled with Math.random() at module scope, which
 * evaluates once on the server and again in the browser — producing a different
 * order in each, and a hydration mismatch. A fixed seed makes server and client
 * agree, keeps "page 7" the same photographs on every visit, and is what makes
 * the adjacent-page preload meaningful.
 */
function mulberry32(seed: number) {
  return function random() {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const SHUFFLE_SEED = 20260817;
const random = mulberry32(SHUFFLE_SEED);

function shuffle<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

const shuffledImages = shuffle(allImages);

// Swap out the images at index 0 and 5 (first and last on page 1) which appear 
// blurred due to source quality/stretching, replacing them with known crisp images.
const crispPortraitIdx = shuffledImages.findIndex(img => img.url.includes("Photo%2036.jpg"));
if (crispPortraitIdx > 5) {
  [shuffledImages[0], shuffledImages[crispPortraitIdx]] = [shuffledImages[crispPortraitIdx], shuffledImages[0]];
}

const crispLandscapeIdx = shuffledImages.findIndex(img => img.url.includes("photo_55.jpg"));
if (crispLandscapeIdx > 5) {
  [shuffledImages[5], shuffledImages[crispLandscapeIdx]] = [shuffledImages[crispLandscapeIdx], shuffledImages[5]];
}

/** The bento grid renders exactly six tiles per page to match the animation. */
export const PHOTOS_PER_PAGE = 6;

/**
 * Whole pages only — a partial final page would leave empty tiles in the bento.
 * 86 photographs yields 17 pages (85 reachable); the remainder is one photograph.
 * Add or remove a single file and this self-corrects.
 */
export const TOTAL_PAGES = Math.floor(shuffledImages.length / PHOTOS_PER_PAGE);

const layoutPatterns = [
  // Pattern 0
  [
    "aspect-square md:aspect-auto md:col-span-1 md:row-span-2",
    "aspect-[2/1] md:aspect-auto md:col-span-2 md:row-span-1",
    "aspect-square md:aspect-auto md:col-span-1 md:row-span-1",
    "aspect-square md:aspect-auto md:col-span-1 md:row-span-1",
    "aspect-square md:aspect-auto md:col-span-1 md:row-span-1",
    "aspect-square md:aspect-auto md:col-span-1 md:row-span-1"
  ],
  // Pattern 1
  [
    "aspect-[2/1] md:aspect-auto md:col-span-2 md:row-span-1",
    "aspect-square md:aspect-auto md:col-span-1 md:row-span-2",
    "aspect-square md:aspect-auto md:col-span-1 md:row-span-1",
    "aspect-square md:aspect-auto md:col-span-1 md:row-span-1",
    "aspect-square md:aspect-auto md:col-span-1 md:row-span-1",
    "aspect-square md:aspect-auto md:col-span-1 md:row-span-1"
  ],
  // Pattern 2
  [
    "aspect-square md:aspect-auto md:col-span-1 md:row-span-1",
    "aspect-square md:aspect-auto md:col-span-1 md:row-span-1",
    "aspect-[2/1] md:aspect-auto md:col-span-2 md:row-span-1",
    "aspect-square md:aspect-auto md:col-span-1 md:row-span-1",
    "aspect-[2/1] md:aspect-auto md:col-span-2 md:row-span-1",
    "aspect-square md:aspect-auto md:col-span-1 md:row-span-1"
  ]
];

// Retained only so the (currently unreferenced) GalleryCard/GalleryGrid components
// still typecheck. Neither is rendered on the live gallery route.
const photographers = [
  "Rohan Gupta", "Neha Sharma", "Arjun Patel", "Priya Singh", "Vikram Rathore",
  "Anita Desai", "Siddharth Verma", "Kavita Rao", "Aditya Iyer", "Meera Kapoor",
  "CEI Official"
];

export const galleryPages: GalleryItem[][] = Array.from({ length: TOTAL_PAGES }).map(
  (_, pageIdx) =>
    Array.from({ length: PHOTOS_PER_PAGE }).map((_, itemIdx) => {
      const globalIdx = pageIdx * PHOTOS_PER_PAGE + itemIdx;
      const { url, edition } = shuffledImages[globalIdx];
      const meta = galleryBlur[url] ?? FALLBACK_META;

      return {
        id: `gallery-item-${pageIdx}-${itemIdx}`,
        url,
        edition,
        layoutClass: layoutPatterns[pageIdx % 3][itemIdx],
        alt: `CEI World Expo ${edition} exhibition photograph ${globalIdx + 1} of ${shuffledImages.length}`,
        blurDataURL: meta.blurDataURL,
        width: meta.width,
        height: meta.height,
        // Deterministic, so these no longer differ between server and client.
        price: 16 + Math.floor(random() * 84),
        photographer: photographers[globalIdx % photographers.length],
      };
    }),
);
