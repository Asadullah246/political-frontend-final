import React from 'react';
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
  customInputs
}) => {
  return (
    <Dialog>
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
                type= {input.readOnly ? "text" : "text"}
              />
            </div>
          </div>
        ))}
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button"  className=' w-[90%] mx-auto bg-[#1B4FDB]'>
              Submit
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default Modal;
