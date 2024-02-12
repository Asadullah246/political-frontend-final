// @ts-nocheck
"use client";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { CourseMgmt, baseUrl } from "@/store/Store";
import { useUser } from "@clerk/nextjs";
import { loadStripe } from '@stripe/stripe-js';
import { BrainCircuit, Check, Image, Video, Zap } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { Button } from "./ui/button";
import { Card } from "./ui/card";

type BadgeProps = {
  // ... other props
  variant?: "default" | "destructive" | "outline" | "secondary" | "premium" | null | undefined;
};

const tools =[
    {
      label:'To See Premium Video',
      icon:Video,
      color:'text-violet-500',
      bgColor:'bg-violet-500/10',

    },
    {
      label:'Test Your IQ',
      icon:BrainCircuit,
      color:'text-emerald-500',
      bgColor:'bg-emerald-500/10',

    },
    {
      label:'Skill Test',
      icon:Image,
      color:'text-pink-700',
      bgColor:'bg-pink-700/10',

    }

  ]

export const ProModal = () => {
  const { isSignedIn, user, isLoaded } = useUser();
  const [loading , setLoading] = useState(false)
  const  [isMounted, setIsMounted] = useState(false)
  useEffect(() => {
    setIsMounted(true)
  },[])
  if (!isLoaded) {
    return null;
  }
  if (!isSignedIn) {
    return null;
  }
    const proModal = CourseMgmt()  


    if (!isMounted) return null

    const  onSubscribe = async() => {
      const userId = '123'
      try {
        setLoading(true)
        const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY!)
        const body = {
           video:{
                id:'123',
                title:'title',
                description:'description',
                thumbnail:'thumbnail',
                url:'url',
                price:100,
                email:user.emailAddresses[0].emailAddress,
                clerkUserId:userId
           }
        }
        const headers = {
          "Content-type":"application/json"
        }
        // const response = await fetch('http://localhost:5000/api/v1/payment/create-checkout-session',{
        const response = await fetch(`${baseUrl}/api/v1/payment/create-checkout-session`,{
          method:'POST',
          body:JSON.stringify(body),
          headers
        })
        const session = await response.json()
        const result = await stripe?.redirectToCheckout({
          sessionId:session.id
        })
        if(result?.error){
          toast.error("Something went wrong")
        }
      } catch (error) {
          toast.error('wrong')
      }
      finally{
        setLoading(false)
      }
    }

    type BadgeProps = {
      variant?: any;
      // variant?: "default" | "destructive" | "outline" | "secondary" | "premium" | null | undefined;
      // other props...
    };
    return (
       <Dialog open={proModal.isOpen} onOpenChange={proModal.onClose}>
         <DialogContent>
            <DialogHeader>
                <DialogTitle className=" flex justify-center items-center flex-col gap-y-4 pb-2">
                    <div className=" flex items-center gap-x-2 font-bold py-1">
                    Upgrade to PolitIQ
                    <Badge className=" uppercase text-sm py-1" variant='premium' >
                        pro
                    </Badge>
                   </div>
                </DialogTitle>
                <DialogDescription className=" text-center pt-1 space-y-2 text-zinc-900 font-medium">
                     {
                            tools.map((tool,index)=>(
                                <Card
                                key={index}
                                className=" p-3 border-black/5 flex items-center justify-between"
                                >
                                  <div className=" flex items-center gap-x-4">
                                     <div className={cn('p-2 w-fit rounded-md',tool.bgColor)}>
                                         <tool.icon className={cn(tool.color,'w-6 h-6')}/>
                                     </div>
                                     <div className=" font-semibold text-sm">
                                            {tool.label}
                                     </div>
                                  </div>
                                  <Check className=" text-primary w-5 h-5"/>
                                </Card>
                            ))
                     }
                </DialogDescription>
            </DialogHeader>
            <DialogFooter>
                <Button
                size='lg'
                variant='premium'
                className=" w-full"
                onClick={()=>onSubscribe()}
                disabled={loading}
                >
                    Upgrade
                    <Zap className=" w-4 h-4 ml-2 fill-white"/>
                </Button>
            </DialogFooter>
         </DialogContent>
       </Dialog>
    )
}
