import { cn } from "@/lib/utils";

export const MaxWidthWrapper = ({
    className,
    children,
}: {
    className?: string;
    children: React.ReactNode;
}) => {
    return (
        <div className={cn(`mx-auto w-full max-w-7xl px-3.5 md:px-10`, className)}>
            {children}
        </div>
    );
}