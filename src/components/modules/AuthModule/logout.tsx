import { useEffect } from "react";
import secureLocalStorage from "react-secure-storage";
import { DialogueCard } from "./module-elements/DialogueCard";
import { useRouter } from "next/router";
import { useAuthContext } from "src/components/contexts/AuthContext";

export const LogoutModule: React.FC = () => {
  const router = useRouter();
  const { setJwt, setUser } = useAuthContext();

  useEffect(() => {
    secureLocalStorage.removeItem("user");
    secureLocalStorage.removeItem("token");
    setUser(null);
    setJwt(null);

    setTimeout(() => {
      router.replace("/");
    }, 3000);
  }, []);

  return (
    <>
      <div className=" bg-blue-light relative w-full min-h-[100vh] lg:pt-32 md:pt-28 pt-24 lg:px-32 md:px-16 px-3">
        <DialogueCard className="flex flex-col min-h-[50vh] justify-center text-center">
          <h1 className="text-3xl">You have been logged out.</h1>
          <p>You will be redirected...</p>
        </DialogueCard>
      </div>
    </>
  );
};
