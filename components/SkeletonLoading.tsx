import { Skeleton } from "@/components/ui/skeleton";

interface SkeletonLoadingProps {
  count?: number;
  width?: string | number;
}

const SkeletonLoading: React.FC<SkeletonLoadingProps> = ({
  count = 7,
  width = "100%",
}) => {
  return (
    <div className="space-y-2">
      {Array.from({ length: count }).map((_, index) => (
        <Skeleton
          key={index}
          style={{ width }}
          className="w-[100px] h-[20px] rounded-md"
        />
      ))}
    </div>
  );
};

export default SkeletonLoading;
