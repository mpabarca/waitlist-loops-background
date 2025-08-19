import EarlyAccessBadge from "@/components/EarlyAccessBadge";
import Footer from "@/components/Footer";
import LoopsForm from "@/components/LoopsForm";

export default function LandingPage() {
  const parentStyle = {
    background: "bg-[url(/bg/bg-01.jpg)] bg-no-repeat bg-cover bg-center", // For more images check free versions on https://www.freepik.com/
    padding: "px-5 pt-5",
    sizeLogo: "w-12 h-12 md:w-15 md:h-15",
    fontColor: "text-white", // for bg-04 try -> text-gray-700
  };
  const badgeStyle = {
    background: "transparent",
    fontColor: "text-white font-bold",
    borderColor: "rounded-md border-2 border-white",
  };

  return (
    <main className='min-h-screen flex flex-col'>
      <div className={`flex-1 flex ${parentStyle.padding}`}>
        <div
          className={`w-full flex flex-1 flex-col justify-center items-center text-center rounded-xl gap-8 pb-16 ${parentStyle.background}`}
        >
          {/* Logo + Badge */}
          <section className='flex flex-col gap-4 items-center'>
            <img src='/logo-white.png' alt='Logo' className={parentStyle.sizeLogo} />
            <EarlyAccessBadge
              background={badgeStyle.background}
              borderColor={badgeStyle.borderColor}
              fontColor={badgeStyle.fontColor}
            />
          </section>

          {/* Title & Subtitle */}
          <section
            className={`flex flex-col items-center gap-4 ${parentStyle.fontColor}`}
          >
            <h1 className='text-6xl md:text-7xl font-bold'>
              Launch with Confidence
            </h1>
            <p className='max-w-lxl md:text-lg'>
              Collect emails, build hype, and validate your idea with a
              beautiful pre-launch page.
            </p>
          </section>

          {/* Form */}
          <section className='h-32 w-full flex flex-col justify-center'>
            <LoopsForm />
          </section>
        </div>
      </div>

      {/* Sticky Footer */}
      <Footer />
    </main>
  );
}
