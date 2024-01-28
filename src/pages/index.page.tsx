import { useAppSelector } from "@/hooks/reduxHooks";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Index() {
  const user = useAppSelector((state) => state.auth.user);
  const router = useRouter();

  const handleAuthUserRouting = () => {
    router.replace("/patient/dashboard");
  };

  useEffect(() => {
    if (user) {
      handleAuthUserRouting();
    } else {
      router.replace("/login");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return <div></div>;
}
