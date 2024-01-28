import AuthLayout from "@/components/AuthLayout";
import { ReactElement } from "react";
import { NextPageWithLayout } from "@/pages/_app.page";
import { useRouter } from "next/router";
import UserCalendar from "@/components/Calendar";
import Button from "@/components/Button";
import { FaPlus } from "react-icons/fa6";

const Appointment: NextPageWithLayout = () => {
  const router = useRouter();

  return (
    <div className='w-full'>
      <Button onClick={() => router.replace("/patient/appointment/add")}>
        <div className='flex items-center'>
          <FaPlus /> <p className='ml-4'>Schedule appointment</p>
        </div>
      </Button>
      <UserCalendar />
    </div>
  );
};

Appointment.getLayout = function getLayout(page: ReactElement) {
  return <AuthLayout>{page}</AuthLayout>;
};

export default Appointment;
