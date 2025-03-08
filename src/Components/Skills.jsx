import React, { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useNavigate } from "react-router-dom";

function Skills() {
  const skillsRef = useRef(null);
  const isInView = useInView(skillsRef, { once: true, margin: "-100px" });

  const skills = [
    { name: "HTML5", image: "https://media-hosting.imagekit.io//6f26c6c8914c45b9/html.png?Expires=1836039441&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=HvyaTJ258rb2LFk2NrNZoodylCorAr76HZ0qCQNJRvcyDxD9-HkKpa1Jm~FHLO4TxMgBSuP8FiHn3gXwDEAmdbvqXQtyg3~Lg9XK7uMc2R9D-YDBk4bEkWX7vNfw0BiD88UQTM~xdOq42jOTEhpjmpN8yfFIv6HF6J0lOXU7JXAA7olIJczvoQeW0TMZ8qDCipUWLwEXLfjnX-RIEc3qsOvpFwjR7ppmN6jTT9qECVnIJJ1JNL6uFN4KBcubUgTo6FDS5yT9ZEwVCIbVZeTtC8Bl55sYoJVcmjawm-He3n8gb1QsIpJ8I-Igi2cXE-l1GjcARtzlwUgLhxfj~Jk-Eg__" },
    { name: "CSS3", image: "https://media-hosting.imagekit.io//ed9c5a8fbd4f4e8f/css-3.png?Expires=1836039441&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=fFFkCieI1tNFUv5fe3qh5zdGhcZ6ZcRcN4xw1Q0t3z7nfPbVvdVUqoEQnWc~z-S2sM4a~OTOnMaKLd8uGoHpdbwGsJX887Qzq~EcnVexS98DeZk-xf5Y8E2MmWrBok6C2abSrmNDwMwXbWHxnPxf9MDWNKv-rC1Qaoos5EIoRA85fhnXCLEZ3NB1EjRa8PU8BUzsanfrSHL1C~clGC2E1TThMg6h2QnnAcFQBg3fb2oadhM0~gxU1ONJuke2NV93GzxFn1Ql-l8RcGiemLkZDsXiTVfvF6kHFdLuDee7ImSyVPEUn4T6xKX1KVBbmuk1zTYJZ~UyEFVqw~ez8DBKhg__" },
    { name: "React", image: "https://media-hosting.imagekit.io//092ba6ae8ee3495c/react.png?Expires=1836040050&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=Ju6oJvnNpQ~gXtvz1eyPNkRlcEBJohf50RQs2tiiPegIMWt86lvaBEJ7WtjChT1btmqwp27K3hIlyIniWESfCF0bu~5NCjGPgFqwfUp-kF3Ta9FiGqB-TSwRf4M4tPrbc3JS0q15y0gTdeuH6wHNt8E~T1TkX3cCaVuWfWaoDuWjKjglRqtjAOM~WqTlfAUMkrxqwij9m1KRifrMvHWl4ZjF-8563S67EkS2P85Nb5alRr0~WLMnfPRg13bTaO~1-pPKtdbpU0NHfBo3~TLYm~aAQB7-Mbxz21WytWTGJKR3r7LfuLT9MpJE2Rmbu3ZHocpmx5Wb37feSF-rohfKHg__" },
    { name: "JavaScript", image: "https://media-hosting.imagekit.io//4c70d2175012447d/js.png?Expires=1836039441&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=lPHTjabTXydS9DQYRHCwu4XarYTj3QeJOvoNuz2XvonBoz1mFEacAjzny-z-NPJQxu4Euysbn2Wq-vCKP4l4k6VvObU9sJdAdwoPKmGYODJe6xpbWTe87TADeAdLuuTEIpSvBisXsFIraFXEMUEzKlkSfn2Uu~Aeamgg0YWX~sgqOtrOd5SRbzUTVeUNTgtbp94lVu8YeFgg2oBATNI4a~8pvAp~wfQjUHXtzCiTDOq5D5MUpr3jfcuNTYxU0PF0arzf~GORyAYLXCgQ7pfVkRGZubuQaNtqjgfM8GNdzPNW~dsRH8vqSgY~hBQUFGhCbOpnkZHFRWbHtx2VKjU44A__" },
    { name: "Redux", image: "https://media-hosting.imagekit.io//cce75451881c4aee/redux.png?Expires=1836040061&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=lJ~O0yMZMMgCexU8-kYCPteh1yEHsqhvXJCjxZNW~6m4ukVBy6XACcuxMPSK4kjZP8jIhxH-O8sO2G2Zjywo559YaCBKkBvwyd-j5VznfCql9DD6txxRAWVIy04CQIFxiKq0Nr5nCCIxS2~otPFORAodiAKRFSHA4k8wmtR9Sku~JaIv~v0nkHIlr1Uj1Mqxj-q69hJXs29IWA2xmDXaTCbTPM1NLxlaNLVfadcrc-1XTqtneS5d9~ZiCJIqRDtxjVNkTL3DxoYg-VwgYjAgxYi2KFv3KctKoq~8gtWCEJTAjKDgNAp6CHZorev57g5efo3jzFx7mPWxeNEPwbsF4A__" },
    { name: "Tailwind CSS", image: "https://media-hosting.imagekit.io//55f417b0e19b4f2d/tailwind.png?Expires=1836039441&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=b5kr2ntrQEotNQ6t71PejbMDE7I1gYQmZDws~Y01gwVPsfFSiCFz1QJLCa-CQEi5v1CqP~84af6zZU0I-DWwjPxxgQZbMFf6D2amPXU2SDjTRZOiK9aPdD-zCKMeAjNyze22HwHSmPDpNfY9xPLXWEhla5-GpR-Amk8cuQtUvY9~hf1Em45IjzwPQm6OC5Zeyw3Izjmhclx7iJ~SVUWqNZaH5fh6V89kI~33xWhloOU~xgEwzgOzKSpaWqFt9DileduTe3W4ORLrbZYaksQH9dAA8HzGxfP5khtA8Oki~vJN6ee3koWLZGmFPnhoOzqV2lMNq1SlwpxI~MwrkOjvFA__" },
    { name: "Bootstrap", image: "https://media-hosting.imagekit.io//84b3b95543c84fea/bootstrap.png?Expires=1836039441&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=yaTgI2Ir~HRR5VeE8pRCX2zIkzij9iEyLO2FASW7QJLs5FxNVXky1XGl7sGxW8KcQHWlmw8Qwo0HPL9n0~YfIPQHeSnxtSMXQ3hYBMVQ27Xb88TK1mJgI8P59KWYwnJcfJdzEVWW-1UwKxNtFZsyYp3pJA2Ivr6QBRHl3LExI565RJSJ-Tx1rnokFBNfnUFXMtBNtJkpFYgRWsHvaboMMsm0uXCmCwGuKQMdGxCqMdB1ez1zFdOnRe2V69YuKTYh62iMR7k-i4zBTRhwQ0tKMt4PBr8jS~NEb9nrtrwCfwlSB3CI3PCERqTv03Tx-saUCN0llTQL8dbt3~~Hjl~RRg__" },
    { name: "SASS", image: "https://media-hosting.imagekit.io//017fe7687b3c4660/sass.png?Expires=1836039441&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=qmrnd8pA50fEMouDrnjNQ6hTXCiqw0LnH6XOk5kf7zKxOQ-z6LduVXMP~FbYzj~7nu1QTnlBnBZvmwrMSylHWEGyxYzpcN8UvPsY9r21ca2T74ICPBEFZ6Uogu3j46ZancHznpaNhxOO1tvIZ5C3EZrOhSRl8aJZ4xqNJib7F4NBI8AzUoErD6O4~YOi1rmEMiYZCvO4I9DjqxM4v8Rh0Pm~2swbHAhz28VxpB5fk0C1-bILwt26E3l9w6-RaHjUm41ojiWhLHk92cjR6wZ7SFhlO1whlEeeRK7ZHz37D7i9~AvTNxRvHtvcZKfgoaFuGnwvvCf~K6QxCiaBa3bEFA__" },
    { name: "C Language", image: "https://media-hosting.imagekit.io//a1a2299eb5494bff/c.png?Expires=1836039441&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=Eu6sknmDtCZnbXSw5fyYr3-UMB49zRn45gkw4lg9NRdWx3FByVlAnSKL7upY33RV2SItAKvWc5VhQv4ZmsIm-XItykqHIGPxv~2gfDa1JD3oV8JvflLH4sSomeFsb~73bpUrZbxI6e1bK9ac4x6xcB7GVzBSoHiwW3FgenZHsHpf7HbtjOSaS0-UtAFmKdljYoPddR~VQy2ktZ-U3Vvjqm8rHl5mJDwCYuYTUHYAEqHMVV-SnL-3FPYP~gwTYpNvUGq6HanOrrQYwl~JgONiKTyfxc5MQ68FWTasyX9yJGRfoCt4TFxHPNzKzeuyzy1MZOBhjOz08KjFC1TdH1NsBw__" },
    { name: "Photoshop", image: "https://media-hosting.imagekit.io//7a64d8f8f03b4882/photoshop.png?Expires=1836039441&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=wcKvNwIq2XRxRq0EJLeMR74TyHIeKX~B51TJjDN2jz1bfczS6FtYbCVZldRGTmdVo-VrYNq5mnR7RQStcGlI8HAK23asg-~zsahRIv7YMLIZOCkcUc1lqQcKjvcL~Q178IHp0fMOhtu06jhImMFm9FkidFurs8lfl4laCCGcSa1AvrxmQEktV7Qe6TO6fe3sFHr77y7UL~GIQYHe1ANEZ0PgEyvyWMPMwhXMhtirYFT2hWjjQM1g0rX50V5TuPzJ-O6gvFs00eVw0lPrRxvYawrncneVmK7r5nQ2dGAR7O8CYs-90FcBTtvmBJigKpOEf7oXBOY2TQrmVfbhFzd5LA__" },
    { name: "GitHub", image: "https://media-hosting.imagekit.io//9c2f5ea9a92d4d07/github.png?Expires=1836040275&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=TvtRYHC63s9FDqNtcKiihXRBzJQn--z~ijn5-rtwJfReW5Pv2R8aNXeRE4vYPc4nl9vGKOADQGGmq1r4-fRH3TDntV4FZ4zW6dgn1tBL-ectP5OzW68UiStFQAIvljaVYcdvgifgRjPmJnQRVoB4oq-1Oge8HWUrsqZ~NO29zRae-XhXvPDxnNH58iNDgQD9gbLr0kF224KdhI5ow~RhYMgQ27IBMrOIOzDSqEkES2IIxgv5CKmnDmebFzKAky901dr6RR9iqRRxB008X2i3DAs6HGPtN6bfd5RdALzJZyUVCTITOjJzIzbb6Q4gZ47J9j5M-Zo3AV527Uug4Hy2Qw__" }
  ];

  return (
    <div ref={skillsRef} className='section2 h-auto flex justify-center py-20'>
      <div className='w-11/12 md:w-3/4 flex flex-col items-center'>
        <motion.h1 
          className='text-4xl lg:text-6xl font-black mb-12 text-orange-500'
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          My Skills
        </motion.h1>
        <div className='w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6'>
          {skills.map((skill, index) => (
            <motion.div 
              key={index} 
              className='flex flex-col items-center transition-transform transform hover:scale-110 hover:shadow-xl hover:text-purple-700'
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <img className='h-24 transition-all duration-300' src={skill.image} alt={skill.name} />
              <p className='text-lg font-medium mt-2'>{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
