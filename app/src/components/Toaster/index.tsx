import { Loader2 } from "lucide-react";
import { Toaster as ReactToaster, ToastBar } from "react-hot-toast";

const Toaster = () => {
  return (
    <ReactToaster
      position="top-center"
      gutter={10}
      toastOptions={{
        style: {
          minWidth: "300px",
          height: "50px",
          fontSize: "14px",
        },
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
    >
      {(t) => (
        <ToastBar
          toast={t}
          style={{
            ...t.style,
            display: "flex",
            alignItems: "center",
            animation: t.visible
              ? "custom-enter 0.5s ease"
              : "custom-exit 0.5s ease forwards",
          }}
        >
          {({ icon, message }) => (
            <>
              <div style={{ display: "flex", alignItems: "center" }}>
                {icon}
              </div>
              <div>{message}</div>
            </>
          )}
        </ToastBar>
      )}
    </ReactToaster>
  );
};

export default Toaster;
