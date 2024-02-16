import { ReactNode } from "react";

import { Skeleton } from "@ui/skeleton";

const SkeletonTable = (): ReactNode => {
  return (
    <div>
      <div className="grid grid-cols-4 gap-x-6 gap-y-3">
        <div className="flex gap-2 col-span-1">
          <Skeleton className="w-[70%] h-[36px]" />
          <Skeleton className="w-[30%] h-[36px]" />
        </div>
        <div className="flex col-start-4 gap-2">
          <Skeleton className="w-full h-[36px]" />
          <Skeleton className="w-full h-[36px]" />
        </div>
        <Skeleton className="h-[320px] col-span-4" />
      </div>
    </div>
  );
};

export default SkeletonTable;
