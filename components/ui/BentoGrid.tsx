import { cn } from "@/lib/utils";
import { gridItems } from "@/data"; // Assuming your gridItems are in './data.js'

export const BentoGrid = ({
  className,
}: {
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-7xl grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6",
        className,
      )}
    >
      {gridItems.map((item) => (
        <BentoGridItem
          key={item.id}
          {...item} // Spread all properties from gridItem
        />
      ))}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  return (
    <div
      className={cn(
        "group/bento shadow-input row-span-1 flex flex-col justify-between relative rounded-3xl border border-neutral-200 bg-white p-4 transition duration-200 hover:shadow-xl dark:border-white/[0.2] dark:bg-black dark:shadow-none overflow-hidden",
        className,
      )}
      style={{
        background: 'rgb(4,7,29)',
        // backgroundColor: 'gradient...' // You'll need to define this gradient
      }}
    >
      {img && (
        <div className="absolute inset-0 overflow-hidden rounded-3xl">
          <img
            src={img}
            alt={title as string}
            className={cn("w-full h-full object-cover transition duration-300 group-hover/bento:scale-105", imgClassName)}
          />
        </div>
      )}

      {spareImg && (
        <div className="absolute inset-0 overflow-hidden rounded-3xl opacity-20">
          <img
            src={spareImg}
            alt="Spare"
            className="w-full h-full object-cover"
          />
        </div>
      )}

      <div className={cn("relative z-10", titleClassName)}>
        {title && (
          <div className="mt-2 mb-2 font-sans font-bold text-neutral-600 dark:text-neutral-200">
            {title}
          </div>
        )}
        {description && (
          <div className="font-sans text-xs font-normal text-neutral-600 dark:text-neutral-300">
            {description}
          </div>
        )}
      </div>
    </div>
  );
};