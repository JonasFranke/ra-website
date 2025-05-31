import Image from "next/image";
import { referenceImages } from "~/app/components/ReferenceComponent";

export default function ImagePage({ params }: { params: { id: string } }) {
  const { id } = params;

  const imageSrc = referenceImages.find((image) => image.id === +id)?.url;

  if (!imageSrc) {
    return <p>Image not found</p>;
  }

  return <Image src={imageSrc} alt="" width={500} height={500} />;
}
