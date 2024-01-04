"use client"
import { Check } from "lucide-react"
import { useEffect, useState } from "react"
import { Button } from "../ui/button"
import data from "./data"
// import data from './data.js'

const HeroIq: React.FC = () => {
    const [click, setClick] = useState<any>({})
    const [index, setIndex] = useState<any>(
        localStorage.getItem('index') ? JSON.parse(localStorage.getItem('index') as string) : {}
    )
    // const [score, setScore] = useState(0)
    // const [next, setNext] = useState(false)
    // const [finish, setFinish] = useState(false)
    // const [nextIndex, setNextIndex] = useState(0)
    const [score, setScore] = useState<number>(0);
    const [next, setNext] = useState<boolean>(false);
    const [yourAnswer, setYourAnswer] = useState<number>();
    const [finish, setFinish] = useState<boolean>(
        localStorage.getItem('finish') ? JSON.parse(localStorage.getItem('finish') as string) : false
    );
    const [nextIndex, setNextIndex] = useState<number>(0);

    const OnClick = (i: any) => {
        setIndex({ ...index, [nextIndex]: i })
        setClick({
            ...click,
            [nextIndex]: true
        })
        setYourAnswer(i)
    }
    const OnClickNext = () => {
        setNextIndex(nextIndex + 1)
        setNext(true)
        // setClick(false)

    }
    const OnClickPrev = () => {
        setNextIndex(nextIndex - 1)
        setNext(false)
        // setClick(false)
    }
    const Finish = () => {
        console.log(data.length -1)
        setFinish(true)
        setIndex({ ...index, [nextIndex]: yourAnswer })
        localStorage.setItem('index', JSON.stringify(index))
        localStorage.setItem('finish', JSON.stringify(true))
    }
    useEffect(() => {
        const ScoreCheck = () => {
            let score = 0
            data.map((item, ind) => {
                item.map((item, i) => {
                    if (index[ind] == item.quiz.findIndex((item: any) => item.answer === true)) {
                        score = score + 1
                    }
                })
                setScore(score)
            })
            return score
        }
        ScoreCheck()
    }, [finish])
    return (
        <div className=" lg:w-[70%] w-[90%] mx-auto shadow-2xl rounded-[15px]
            max-w-[88.125rem] min-h-[48.4375rem] bg-[url('/assets/iq.png')]
              bg-no-repeat bg-cent bg-white relative overflow-hidden" style={{
                backgroundPosition: 'center top',
                backgroundSize: '88.125rem 16.5rem'
            }}>
            {
                finish ?
                    //  ------amswer page---
                    <div className=" block mt-[10rem] w-full bg-white h-full py-6">
                        <div className=" w-[90%] mx-auto">
                            <span className=" block text-center font-[800] text-[#222222] text-[30px] uppercase pb-8">
                                Your Score is {score} out of {data.length}
                            </span>
                            <div className=" grid grid-cols-12 lg:gap-x-8 gap-x-[10px]">
                                {
                                    data.map((item, ind) => (
                                        item.map((item, i) => (
                                            <div  className={`lg:col-span-6 col-span-12 pt-3 pb-3 shadow-xl rounded-[15px] mb-[20px] ${index[ind] == item.quiz.findIndex((item: any) => item.answer === true) ? "bg-green-500/20" : "bg-red-500/20"}`} key={i}>

                                                <p className="  px-4 font-[600] text-gray-500">
                                                    {
                                                        item.tittle
                                                    }
                                                </p>
                                                {
                                                    item.quiz.map((item, i) => (
                                                        item.answer && item.text ? <div className=" px-4 py-1 border-gray-200" key={i}>
                                                            <p className=" font-[600] text-gray-500">
                                                                Right Answer: {
                                                                    item.text
                                                                }
                                                            </p>
                                                        </div> : null

                                                    ))
                                                }
                                                {
                                                    index[ind] == item.quiz.findIndex((item: any) => item.answer === true) ? <div className=" px-4   border-gray-200">
                                                        <p className=" font-[600] text-green-400">
                                                            Your Answer: {
                                                                item.quiz[index[ind]].text
                                                            }
                                                        </p>
                                                    </div> : <p className="px-4 font-[600] text-red-500">
                                                        Your Answer: {
                                                            item.quiz[index[ind]]?.text
                                                        }
                                                    </p>
                                                }
                                            </div>

                                        ))
                                    ))
                                }
                            </div>
                        </div>
                         <div className=" absolute bottom-0 right-0">
                         <Button className=" bg-[#2013d7d4] text-white"
                            >Next Quiz!</Button>
                         </div>
                        </div>
                    //  ------amswer page---
                    : <div className=" mb-[150px]">
                        {
                            data[nextIndex].map((item, i) => (<div key={item.id}>
                                <div className=" block">
                                    <div className=" border border-[#0c01e574] mt-[10rem] rounded-[15px] text-[#0D01E5]/70 text-[24px] border-b-2  bg-white font-[800] h-[180px] flex justify-center items-center w-[100%]">
                                        <div className=" w-[80%] mx-auto text-center">
                                            <span>
                                                {
                                                    item.tittle
                                                }
                                            </span>
                                        </div>

                                    </div>
                                </div>
                                <div className=" mt-[20px]">
                                    <div className=" w-[90%] mx-auto">
                                        <div className=" grid grid-cols-12 lg:gap-8 gap-2">
                                            {/* quiz question--- */}
                                            {
                                                item.quiz.map((item, i) => (
                                                <div key={i} onClick={() => OnClick(i)} className={
                                                    `lg:col-span-6 col-span-12 py-4 pl-[10px] flex gap-4 border-2 border-b-[3px] rounded-[10px] cursor-pointer ${click && index[nextIndex] === i ? 'border-[#0c01e574] bg-[#0c01e528]' : ''}`
                                                }>
                                                    <div className={` w-[40px] h-[40px] rounded-[8px] ${click[nextIndex] === true && index[nextIndex] === i ? 'bg-[#0c01e574] text-white' : 'bg-[#0c01e537] text-gray-500 font-[700]'} flex justify-center items-center`}>
                                                        {
                                                            click[nextIndex] === true && index[nextIndex] === i ? <Check size={20} /> : i + 1
                                                        }
                                                    </div>
                                                    <div className={`font-[800] text-[18px] mt-[5px] ${click[nextIndex] === true && index[nextIndex] === i ? "text-[#0c01e574]" : "text-gray-500"}`}>
                                                        <span>
                                                            {
                                                                item.text
                                                            }
                                                        </span>
                                                    </div>
                                                </div>))
                                            }

                                            {/* quiz question--- */}
                                        </div>
                                    </div>
                                </div>
                                {/* ----render quiz--- */}
                                <div className=" absolute bottom-[30px] w-[100%] pb-[20px]">
                                    <div className="w-[50%] mx-auto">
                                        <span className=" text-center block font-[800] text-gray-600 text-[20px]">
                                            {
                                                `Question ${nextIndex + 1}/${data.length}`
                                            }
                                        </span>
                                        <div className=" w-[100%] rounded-[15px] h-[15px] bg-gray-300">
                                            <div className={`bg-[#2013d7d4] h-full rounded-[15px]`} style={{
                                                width: `${(nextIndex + 1) * 100 / data.length
                                                    }%`
                                            }}>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>))
                        }
                        <div className=" absolute bottom-0 right-0 ">

                            {
                                nextIndex === data.length - 1 ? <Button className="relative z-[5] bg-[#2013d7d4] text-white"
                                    onClick={Finish}
                                >Finish</Button> : <Button className=" bg-[#2013d7d4] text-white" onClick={OnClickNext}
                                disabled={
                                    click[nextIndex] === undefined
                                }
                            >Next Question</Button>
                            }
                        </div>
                        <div className=" absolute bottom-0 left-0 ">
                            <Button className="relative z-[5] bg-[#2013d7d4] text-white"
                                onClick={OnClickPrev}
                                disabled={
                                    nextIndex === 0
                                }
                            >
                                Previous Question
                            </Button>
                        </div>
                    </div>
            }
            {/* ----render quiz--- */}

        </div>
    )
}

export default HeroIq
