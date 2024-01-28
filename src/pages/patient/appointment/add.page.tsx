import AuthLayout from "@/components/AuthLayout";
import { ReactElement } from "react";
import { NextPageWithLayout } from "@/pages/_app.page";
import DoctorCard from "@/components/DoctorCard";
import { useGetDoctorsQuery } from "@/store/api/doctors.api";
import Input from "@/components/Input";
import CustomSelect from "@/components/Select";

const AddAppointment: NextPageWithLayout = () => {
  const {
    data: doctors,
    isLoading: isLoadingDoctors,
    refetch,
  } = useGetDoctorsQuery();
  return (
    <div className='flex'>
      <div className='w-1/3'></div>
      <div className='w-3/5 h-full'>
        <div className='flex w-full space-x-2'>
          <div className='w-1/3'>
            <Input type='date' label='Date' />
          </div>
          <div className='w-1/3'>
            <Input type='date' label='Time' />
          </div>
          <div className='w-1/3'>
            <CustomSelect
              label='Expertise'
              data={[
                { label: "Virtual visit only", value: "Virtual visit only" },
                {
                  label: "In-person visit only",
                  value: "In-person visit only",
                },
              ]}
            />
          </div>
        </div>
        {doctors?.data.map((doctor) => (
          <DoctorCard key={doctor.id} doctor={doctor} />
        ))}
      </div>
    </div>
  );
};

AddAppointment.getLayout = function getLayout(page: ReactElement) {
  return <AuthLayout>{page}</AuthLayout>;
};

export default AddAppointment;
