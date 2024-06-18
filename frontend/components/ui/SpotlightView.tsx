import { Spotlight } from "@/components/aceternity/Spotlight";

type SpotlightViewProps = {
  className?: string;
  fill?: string;
  title: string;
  title2?:string;
  subTitle: string;
  button: React.ReactNode;
};

export default function SpotlightView(props: SpotlightViewProps) {
    const { className, fill, title, title2, subTitle, button } = props;
    return (
    <div className="h-[40rem] flx flex-col w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
        <Spotlight
          className={className}
          fill={fill}
        />
        <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
          <h1 className="text-4xl md:text-8xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 py-4">
            {title}
            </h1>          
            <h1 className="text-3xl md:text-6xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
            {title2}
          </h1>
          <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
            {subTitle}
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
          {button}
        </div>
      </div>);
}