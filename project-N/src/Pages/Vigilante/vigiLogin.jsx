import React from "react";

export const LoginVigilante = () => {
  return (
    <div className="relative w-[1440px] h-[1024px] bg-[#1c294b]">
      <div className="absolute w-[645px] h-[706px] top-[159px] left-[398px]">
        <div className="absolute top-0 left-[80px] [font-family:'Plus_Jakarta_Sans-Bold',Helvetica] font-bold text-white text-[96px] tracking-[0] leading-[normal]">
          Bienvenido
        </div>
        <img className="absolute w-[645px] h-[533px] top-[106px] left-0 object-cover" alt="Image" src="image-4.png" />
        <div className="flex w-[422px] h-[106px] items-center justify-center gap-[15px] p-[15px] absolute top-[600px] left-[111px] bg-white rounded-[50px] shadow-[0px_2px_3px_#0000002b,0px_0px_3px_#00000015]">
          <img className="relative w-[26px] h-[26px]" alt="Google logo" src="google-logo.svg" />
          <div className="relative w-fit [font-family:'Roboto-Medium',Helvetica] font-medium text-[#0000008a] text-[24px] tracking-[0] leading-[normal] whitespace-nowrap">
            Registrarse con Google
          </div>
        </div>
      </div>
      <div className="absolute w-[1304px] h-[51px] top-[47px] left-[78px]">
        <div className="absolute top-[12px] left-[1094px] [font-family:'Inter-Bold',Helvetica] font-bold text-white text-[32px] tracking-[0] leading-[normal] underline">
          Iniciar sesión
        </div>
        <img className="absolute w-[57px] h-[51px] top-0 left-0" alt="Vector" src="vector.svg" />
      </div>
    </div>
  );
};
