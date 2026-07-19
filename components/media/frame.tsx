import Image from "next/image";
import { clsx } from "clsx";
import type { MediaImage } from "@/lib/content/types";
import AssetPlaceholder from "./asset-placeholder";

/**
 * An artwork shown in a painted/carved frame. Dan's frames are part of the
 * work, so the frame is intentional, not decoration. Falls back to an
 * elegant placeholder when the image file has not been supplied.
 */
export default function Frame({
  image,
  ratio = "aspect-[4/5]",
  sizes = "(max-width: 768px) 100vw, 40vw",
  priority = false,
  className,
}: {
  image: MediaImage;
  ratio?: string;
  sizes?: string;
  priority?: boolean;
  className?: string;
}) {
  if (image.placeholder) {
    return (
      <AssetPlaceholder
        kind="image"
        label={image.alt}
        path={image.src}
        ratio={ratio}
        className={className}
      />
    );
  }

  return (
    <figure
      className={clsx(
        "canvas-tex group relative overflow-hidden border-[7px] border-tobacco/80 bg-loam shadow-frame",
        ratio,
        className
      )}
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
      />
      {(image.caption || image.credit) && (
        <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-aged/85 to-transparent p-4 text-left opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          {image.caption && <span className="block text-sm text-cream">{image.caption}</span>}
          {image.credit && (
            <span className="block text-xs text-cream/60">{image.credit}</span>
          )}
        </figcaption>
      )}
    </figure>
  );
}
