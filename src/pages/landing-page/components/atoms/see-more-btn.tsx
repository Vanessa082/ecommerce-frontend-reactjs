type SearchBtnProp = {
  loadMoreProducts: () => void;
};
export default function SeeMoreBtn({ loadMoreProducts }: SearchBtnProp) {
  return (
    <button
      className="bg-primary btn text-white text-nowrap uppercase font-lato md:max-w-[20vw] w-full py-1 rounded  "
      onClick={loadMoreProducts}
    >
      See More
    </button>
  );
}
