import { LoaderCircle } from "lucide-react";

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center mt-10">
      <LoaderCircle size={60} className="animate-spin text-orange-500" />
    </div>
  );
};

export default LoadingSpinner;
