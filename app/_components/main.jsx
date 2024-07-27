"use client";
import { Button } from "@/components/ui/button";
import { Bell } from "lucide-react";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";

function getFormattedDateTime() {
  const now = new Date();

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const dayOfWeek = days[now.getDay()];
  const month = months[now.getMonth()];
  const date = now.getDate();
  const year = now.getFullYear();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const ampm = hours >= 12 ? "PM" : "AM";
  const displayHours = hours % 12 || 12;
  const displayMinutes = minutes < 10 ? `0${minutes}` : minutes;

  return `${dayOfWeek}, ${month} ${date}, ${year} at ${displayHours}:${displayMinutes} ${ampm}`;
}

export default function Main() {
  const { toast } = useToast();
  return (
    <div>
      <div className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl pt-[5vh] flex items-center justify-center font-mono">
        Hola!
      </div>
      <div className="flex flex-col items-center justify-center h-[62vh]">
        <div className="relative flex items-center justify-center mt-4">
          <div>
            <Bell
              size={100}
              className=" w-40 h-40 sm:w-48 sm:h-48 p-7 sm:p-5 text-white bg-purple-950 rounded-full "
            />
          </div>
          <div className="absolute w-[13rem] h-[13rem] sm:w-[15rem] sm:h-[15rem] border-2 border-purple-400 rounded-full animate-glow-circle1"></div>
          <div className="absolute w-[16rem] h-[16rem] sm:w-[18rem] sm:h-[18rem] border-4 border-purple-500 rounded-full animate-glow-circle2"></div>
          <div className="absolute w-[19rem] h-[19rem] sm:w-[21rem] sm:h-[21rem] border-4 border-purple-600 blur-sm rounded-full animate-glow-circle3 "></div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center text-center">
        <div className="font-serif text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl">
          Welcome to Notify
        </div>
        <div className="text-gray-500 mt-2">
          Your go-to solution for generating notifications effortlessly!
        </div>

        <div className="rounded-lg">
          <Button
            className="m-4 text-white hover:border border-purple-800 bg-gradient-to-b from-purple-950 to-gray-950 my-10 text-sm sm:text-lg md:text-lg lg:text-lg rounded-lg"
            onClick={() => {
              toast({
                title: "Reminder: Scheduled Event",
                description: getFormattedDateTime(),
                action: (
                  <ToastAction altText="Go to schedule to undo">
                    Undo
                  </ToastAction>
                ),
              });
            }}
          >
            Send Notification
          </Button>
        </div>
      </div>
    </div>
  );
}
