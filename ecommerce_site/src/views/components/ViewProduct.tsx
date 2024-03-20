interface ViewProductProps {
  id: number;
  style?: string;
}

const ViewProduct: React.FC<ViewProductProps> = ({ id, style }) => {
  return (
    <a href={"/product/"+ id}>
    <button className={`w-full py-2 px-2  bg-black rounded-md ${style} `}>
            View Product
        </button>
    </a>
  )
}

export default ViewProduct;
