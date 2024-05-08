import React from "react";

export const InicioDeSesion = () => {
  return (
    <div className="relative w-[1440px] h-[1024px] bg-[#1c294b]">
      <div className="flex w-[368px] h-[88px] items-center justify-center gap-[15px] p-[15px] absolute top-[785px] left-[528px] bg-white rounded-[10px] shadow-[0px_2px_3px_#0000002b,0px_0px_3px_#00000015]">
        <img
          className="relative w-[53.41px] h-[54.5px] mt-[-4.00px] ml-[-3.00px]"
          alt="Google logo"
          src="google-logo.svg"
        />
        <div className="relative w-fit [font-family:'Roboto-Medium',Helvetica] font-medium text-[#0000008a] text-[24px] tracking-[0] leading-[normal] whitespace-nowrap">
          Registrarse con Google
        </div>
      </div>
      <div className="absolute w-[447px] h-[74px] top-[150px] left-[523px] [font-family:'Inter-Bold',Helvetica] font-bold text-white text-[74px] tracking-[0] leading-[74px]">
        Bienvenido
      </div>
      <img
        className="absolute w-[483px] h-[533px] top-[252px] left-[470px] object-cover"
        alt="Image"
        src="image-4.png"
      />
    </div>
  );
};
