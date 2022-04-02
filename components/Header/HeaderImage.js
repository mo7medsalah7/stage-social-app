import Image from "next/image";

function HeaderImage({ imageName }) {
  return (
    <div className="shadow-sm">
      <Image
        src={`/images/${imageName}.jpg`}
        width={300}
        height={400}
        layout="intrinsic"
        className="rounded-md"
      />
    </div>
  );
}

export default HeaderImage;
