import React, { useState } from "react";
import { IDoctor } from "@/types/user";
import CustomLink from "./Link";
import moment from "moment";
import Button from "./Button";

interface IDoctorProps {
  doctor: IDoctor;
}
const DoctorCard = ({ doctor }: IDoctorProps) => {
  const { field, name, about, image, id, slots } = doctor;
  const [selectedSlot, setSelectedSlot] = useState<number | string>();
  return (
    <div>
      <div className='shadow-lg h-full w-full p-6 min-h-80 rounded-md mt-6'>
        <div className='flex'>
          <img src={image ?? ""} width='10%' height='10%' alt='image' />
          <div className='ml-3'>
            <p className='text-xl'>{name}</p>
            <p className='text-sm mt-3 font-light'>{field}</p>
          </div>
        </div>
        <div className='text-sm mt-4 font-light'>{about}</div>

        <div className='mt-6 mb-4'>
          <p className='text-sm'>Next Available Slots</p>
          <div className='flex space-x-3 mt-4'>
            {slots?.map((slot) => (
              <div
                key={slot.id}
                onClick={() => {
                  if (selectedSlot === slot.id) {
                    setSelectedSlot("");
                  } else {
                    setSelectedSlot(slot.id);
                  }
                }}
                className={
                  slot.id === selectedSlot
                    ? "border h-14 min-w-40 flex items-center justify-center rounded-full text-xs cursor-pointer bg-primary text-white"
                    : "border h-14 min-w-40 flex items-center justify-center rounded-full text-xs cursor-pointer"
                }
              >
                {moment(slot.date).calendar()}
              </div>
            ))}
          </div>
        </div>
        <div className='flex justify-between'>
          <CustomLink href='#' className='text-primary'>
            Check Full profile and availability
          </CustomLink>
          {selectedSlot && <Button>Confirm</Button>}
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
