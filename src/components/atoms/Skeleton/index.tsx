import { Card, Skeleton } from '@nextui-org/react';
import { FC } from 'react';
import { SKELETON_VARIANT } from 'src/utils/enums';
import Divider from '../Divider';

interface CustomSkeletonProps {
  variant: SKELETON_VARIANT;
}

const CustomSkeleton: FC<CustomSkeletonProps> = ({ variant }) => {
  if (variant === SKELETON_VARIANT.TABLE) {
    return (
      <Card className="w-full space-y-5 p-4" radius="lg">
        <div className="mt-2 flex justify-between gap-12">
          {Array(5)
            .fill(0)
            .map((_, index) => (
              <Skeleton
                key={`TableSkeleton1: ${index}`}
                className="w-1/5 rounded-lg"
              >
                <div className="h-6 rounded-lg bg-default-300"></div>
              </Skeleton>
            ))}
        </div>
        <div className="space-y-3">
          <Divider className="my-1 h-[2px]" />
          {Array(4)
            .fill(0)
            .map((_, ind) => (
              <>
                <div
                  key={`TableSkeleton2: ${ind}`}
                  className="flex justify-between gap-12 py-2"
                >
                  {Array(5)
                    .fill(0)
                    .map((_, index) => (
                      <Skeleton
                        key={`TableSkeleton3: ${index}`}
                        className="w-1/5 rounded-lg"
                      >
                        <div className="h-3 rounded-lg bg-default-300"></div>
                      </Skeleton>
                    ))}
                </div>
                <Divider className="h-[2px]" />
              </>
            ))}
        </div>

        <div className="flex items-center justify-center gap-4">
          {Array(3)
            .fill(0)
            .map((_, index) => (
              <Skeleton key={`TableSkeleton4: ${index}`} className="rounded-lg">
                <div className="h-10 w-10 rounded-full bg-default-300"></div>
              </Skeleton>
            ))}
          <Skeleton className="rounded-lg">
            <div className="h-10 w-24 rounded-full bg-default-300"></div>
          </Skeleton>
        </div>
      </Card>
    );
  } else if (variant === SKELETON_VARIANT.CARD) {
    return (
      <Card className="w-full space-y-5 p-4" radius="lg">
        <Skeleton className="w-1/3 rounded-lg">
          <div className="h-12 rounded-lg bg-default-300"></div>
        </Skeleton>
        <div className="space-y-3">
          <Skeleton className="w-3/5 rounded-lg">
            <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
          </Skeleton>
          <Skeleton className="w-4/5 rounded-lg">
            <div className="h-3 w-4/5 rounded-lg bg-default-200"></div>
          </Skeleton>
          <Skeleton className="w-2/5 rounded-lg">
            <div className="h-3 w-2/5 rounded-lg bg-default-300"></div>
          </Skeleton>
        </div>
      </Card>
    );
  } else {
    // For text variant
    return (
      <>
        <Skeleton className="mb-2 w-44 rounded-lg">
          <div className="h-3 rounded-lg bg-default-300"></div>
        </Skeleton>
        <Skeleton className="w-56 rounded-lg">
          <div className="h-3 rounded-lg bg-default-300"></div>
        </Skeleton>
      </>
    );
  }
};

export default CustomSkeleton;
