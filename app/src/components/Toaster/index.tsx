import { Loader2 } from "lucide-react";
import { Toaster as ReactToaster } from "react-hot-toast";

const Toaster = () => {
  return (
    <ReactToaster
      position="top-center"
      gutter={10}
      toastOptions={{
        duration: 3500,
        loading: {
          duration: Infinity,
          icon: (
            <Loader2
              size={24}
              style={{
                animation: "spin 1s linear infinite",
              }}
            />
          ),
        },
      }}
    />
  );
};

export default Toaster;
