import React, { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
interface CustomInput {

  defaultValue?: string;
    readOnly?: boolean;
    value?: string;
}

interface ModalProps {
  triggerButtonText: string;
  title: string;
  description: string;
  customInputs: CustomInput[];

}

const Modal: React.FC<ModalProps> = ({
  triggerButtonText,
  title,
  description,
  customInputs,
  info,
  handlingFunction
}) => {
  // const [data, setData] = React.useState<CustomInput[]>(customInputs);
  // console.log(data);
  const [data, setData] = useState({});
// this function is used to get the data from the input fields
// this function is used to get the data from the input fields


useEffect(() => {
  const defaultData = {};
  customInputs?.forEach(({ defaultValue, value }) => {
    defaultData[defaultValue] = value;
  });
  setData(defaultData);
}, [customInputs]);

 // Function to update the state with data
 const updateData = (defaultValue, value) => {
  setData(prevState => ({
    ...prevState,
    [defaultValue]: value
  }));
};


 const GetData = ()=>{
  handlingFunction(data)
 }





  return (
    <Dialog className="z-[9999999] ">
      <DialogTrigger asChild>
        <Button variant="outline">{triggerButtonText}</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        {customInputs.map((input, index) => (
          <div key={index} className="flex items-center space-x-2">
            <div className="grid flex-1 gap-2">

              <Input

               placeholder= {input.defaultValue}
                // type= {input.readOnly ? "text" : "text"}
                readOnly={input?.readOnly}
                defaultValue={input?.value}
                onChange={(e) => updateData(input?.defaultValue, e.target.value)}
              />
            </div>
          </div>
        ))}
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button"  className=' w-[90%] mx-auto bg-[#1B4FDB]'
            onClick={GetData}
            >
              Submit
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default Modal;
