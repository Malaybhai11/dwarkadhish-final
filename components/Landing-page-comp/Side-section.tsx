import Image from "next/image";
import TheMarque from "./The-marque";

// Expanded product data to match the image content
const products = [
  {
    id: 1,
    description: "Navneet HQ | Masterpiece | Actual Canvas cover Notebook | Abstract designs| Canvas Notebook|Case Bound / Hard Cover Notebook | A5 Size - 21 cm x 14.8 cm | Single Line | 192 Pages | Pack of 1 Pack Of 1",
    price: "₹ 300.00",
    image: "/dummy/notebook-hq-1.jpg", // Placeholders for new images
    rating: 4,
    reviews: 1,
  },
  {
    id: 2,
    description: "Navneet HQ | Evolve | Rubberised Cork cover designs| Case Bound / Hard Cover Notebook | Office / Personal stationery | Single Line | A5 Size - 14.8 x 21 cm | Single Line | 192 Pages | Pack of 1 Pack Of 1",
    price: "₹ 350.00",
    image: "/dummy/notebook-hq-2.jpg",
  },
  {
    id: 3,
    description: "Navneet Youva | Case Bound / Hard Cover Notebook â€“ Colour Pattern Edge | Office / Personal stationery | Single Line | A5 Size - 14.8 x 21 CM | 192 Pages | Pack Of 1",
    price: "₹ 136.00",
    image: "/dummy/notebook-youva-1.jpg",
  },
  {
    id: 4,
    description: "Navneet Youva | Metallica | Magnetic Case Bound / Hard Cover Notebook | Office / Personal stationery | Single Line | A5 Size - 14.8 x 21 CM | Single Line | 192 Pages Pack Of 1",
    price: "₹ 136.00",
    image: "/dummy/notebook-metallica.jpg",
    soldOut: true,
  },
 
];

// Helper for star ratings
const StarRating = ({ rating }) => {
  if (!rating) return null;
  return (
    <div className="flex items-center mt-1">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < rating ? "text-yellow-400" : "text-gray-300"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.26.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.55-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
      {rating && <span className="ml-2 text-xs text-gray-600">1 review</span>}
    </div>
  );
};


export default function SchoolEssentialsSection() {
  return (
    <section className="w-full bg-white py-8 md:py-12">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6">

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-[45%_55%] gap-8 lg:gap-12">

          {/* LEFT IMAGE */}
          <div className="relative h-[300px] sm:h-[400px] lg:h-auto rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/the-side-image.jpg" // Replace with your actual left image path
              alt="School Essentials Banner"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* RIGHT CONTENT */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-8 uppercase tracking-wide text-gray-900">
              School Essentials
            </h2>

            {/* PRODUCT GRID (3 columns on larger screens) */}
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-x-4 gap-y-6">

              {products.map((product) => (
                <div key={product.id} className="flex flex-col">
                  
                  {/* IMAGE CONTAINER */}
                  <div className="relative w-full aspect-[3/4] bg-gray-50 rounded-lg overflow-hidden border border-gray-100">
                    {/* <Image
                      src={product.image}
                      alt={product.description}
                      fill
                      className="object-contain p-2" // 'contain' to show the whole product and ruler
                    /> */}
                    {/* SOLD OUT BADGE */}
                    {product.soldOut && (
                      <div className="absolute top-2 left-2 bg-red-600 text-white text-[10px] font-bold px-2 py-1 uppercase rounded-sm">
                        Sold Out
                      </div>
                    )}
                  </div>

                  {/* PRODUCT DETAILS */}
                  <div className="mt-4 flex flex-col flex-grow">
                    <p className="text-sm text-gray-700 leading-snug line-clamp-3 sm:line-clamp-none">
                      {product.description}
                    </p>
                    
                    {/* RATING (Optional) */}
                    <StarRating rating={product.rating} />

                    {/* PRICE */}
                    <div className="mt-auto pt-2">
                      <p className="text-lg font-bold text-gray-900">
                        {product.price}
                      </p>
                    </div>
                  </div>
                </div>
              ))}

            </div>
          </div>

        </div>
      </div>

         <section className="mt-0">
        <TheMarque />
        </section>

    </section>

 
    

    
  );
}