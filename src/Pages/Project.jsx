import React, { useState } from "react";
import { motion } from "framer-motion";

function Project() {
  const [activeSection, setActiveSection] = useState("webpages");

  const sections = {
    webpages: [
      {
        src: "https://media-hosting.imagekit.io//9732e44305e94c91/Byfaith.png?Expires=1836041145&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=xj9QzDtU508CZ9V3Xy0y4x~VYkUkQ-r3C7cs08HeX~OqdrOSTisNB99GLdEDT7DhbUGGJflAqQdGfMKG9vcU7Hfp8tPu9ENvZCbSeLbAvEeNqy2S41OhzErVtkebTfhZXxoDVBfU7po0BALBsid68h8BbRsM~w5hzNZkivLtBQaenIo2kB9O6ZuQtvukHgW7td3EKQHFsX5XVMWJQGlwsTl9JEJQb7IHmL5pDWRAZUuO-XcepvspnKVQfr3aMUb9oRZNvfy7jpn33s-MIdghOwEjR3592Cw78oBNIpl0agCaMdCGUuQeoPz4yFE9sPkthFjR0d0dgk65aMesWkjRWQ__",
        view: "https://sage-dodol-c05ab6.netlify.app/",
        git: "https://github.com/hiren3107/Our_Works/tree/main/Webpages/Byfaith"
      },
      {
        src: "https://media-hosting.imagekit.io//f8dba20c50a94569/Consul.png?Expires=1836041145&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=JF4nMfJuMlXJi2~5JUugTRdFmfxubZ7BdCXOlyjsQ0s-F0OJ-BoRleX0Xv4Jt~P-3PGeEVC3fO1GP5bpkDoUazr-QJNFJOqRbufENjj5pd-d9Hxzsy9N9BimYYsFAbI7QUklSwiqNeU4TYvjupe2IHeqJk3kzpykZ1LjPBpSlf6fvONytq~8MTXFvyDMNRa2ZrVHDOxBVwz60zq2ItVtmcF385mmSnpWakCk4nqGDdjA-Ohzu6rKgr-yR74eA3rqClhFao8P1rOvwATnO7oSsBpMZkFjOpKA~jDozbMc8AFwv0tn0bTSjcKgmAuAsklozjExKaFLRWH3~VljVOMK8A__",
        view: "https://celebrated-wisp-5e7e34.netlify.app/",
        git: "https://github.com/hiren3107/Our_Works/tree/main/Webpages/Consul"
      },
      {
        src: "https://media-hosting.imagekit.io//ef92b9a2d1144070/Courses.png?Expires=1836041145&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=tUNR9ocRM0QCGqi~fjXtBm0wpHQOn-~Z56u~lbQHWH0V9cilGvYUHMzgQfI5P2RRTx9bUmeEhTTlE3B9u5uyU36yzAfdqsW33fyNNWhUSCdZl4a2wvi22mJYEHHHZqkQ2yRCexn7v5eNvMORmtMv8pnG5UPX2i6PVug7jktDfGyigZgXtBwmjg92xjsczBD664~8EBlR9cmmNoA5lFQVR7DbH38yfQs9P9JyUahimZphWIFTFUf9vfs7Kwn6nI3w7eiGabwz39Al7atJEMWrTJDm~VYO2Xf6Q5ZAZKuIIuj6KWP0uXsiiUAMRtjttl~O9lj6nJyQLpaDS6p8D-NBwg__",
        view: "https://incredible-madeleine-9a7ae7.netlify.app/",
        git: "https://github.com/hiren3107/Our_Works/tree/main/Webpages/Courses"
      },
      {
        src: "https://media-hosting.imagekit.io//7532ff56b5ab4c56/dogger.png?Expires=1836041145&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=VKsHnuSB74j1Up5xYJFGS3TFPCJw7KXwF-jQpPtDGfPs7KS5IIFYLqn8tEchso8rdNokk-AbO7h~9KIxsJedmsBRsiJ1zHWujFn83CTi9GR85LBLUVcnwZUqAcljBpBopyR30Jm-5WGk2kvOwNydRjlEXWIQRy9vKLKfucXn70kunsRAK51VjM~zhsoze4BLtOCoieYGijTYjYsZT5kwo4TSA9qWDHTFKPQ4lEe-8m2Y8xh~N5XkStuCQ21zP4GIOVRQhN-1mdNEUOKju1IJWkvuOF8XqJVxzApCynlY0pGZbmK~LGcpirmhqq2NoBEVpIoUcYkgvzZeSlD6xVRbJQ__",
        view: "https://astonishing-brigadeiros-42b96b.netlify.app/",
        git: "https://github.com/hiren3107/Our_Works/tree/main/Webpages/dogger"
      },
      {
        src: "https://media-hosting.imagekit.io//8e0a7164c70d4dc6/Engineears.png?Expires=1836041145&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=vQZJdDi3Doi~-so4IrCcp2bUbR0FzMVCuP31mvfQNZrfRdDPazi5X8NPHkVaCJhHKD2-tbq7ol1eLL~XISzBtsiy-xuT5NYy~lsEVaeVGQkfVPj48k2ZVPlodbEOnPvKf~nTBUlEqQxRgZtLeprrWsyckJOWzE1rj~rO30o3AiBSi7zxefj09yXRrnnvuLwJYxzDocYVi0mshmO0UFc3rNhAXdiL9ZoQoqa6eU5f2CcIM6ulyFHK17nTCFVxKszHM2dogKXsufWfHk2Dn~rQbS7OnpBp-IFWU46cApzq~34yYkItEzStNNRIlkkPQZzBHx-PTJnbzyGN6rMbt7ow5w__",
        view: "https://lambent-gelato-c567fd.netlify.app/",
        git: "https://github.com/hiren3107/Our_Works/tree/main/Webpages/Engineears"
      },
      {
        src: "https://media-hosting.imagekit.io//c1079e137cb44cd5/Eventasia.png?Expires=1836041145&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=v6Nl3ZmDw3IiEs7dyj0qVNJyUrliUsH7gQ~i4ii9i0ojefDnjGGODpHRMlocP9dGXry9rV3sr7kxO6a-WjZ22g50~C52rkqlIkr5~jaxuXG69OHgWYA45MgpMkG8vblaZHwmcYkN5cZJOk9RWBAbNltAoBi~DQdh3ZNaP~LjXs15zGUBViA6fw5xUa~VRL~WbyU-mtp9sBspBPGtdBCSYggxIhp8F-iGD2-t8JS0kf5s5kNIrw8Yq7M-WsCrOGzHFi76kWAlJEor-8v6aruWPljn4A2jmgccSZcD9PoT~NVR6sIraJbSr40--8Gw~2PSbhFiwG001q449S9cqxSCdw__",
        view: "https://deft-tulumba-818002.netlify.app/",
        git: "https://github.com/hiren3107/Our_Works/tree/main/Webpages/Eventasia"
      },
      {
        src: "https://media-hosting.imagekit.io//5427f465d7284b1a/Framework.png?Expires=1836041145&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=UVdN7cvzoU2XopbeRRoBeS41V~jfxq~kZTXbZK0FmUzVB3EuFPgwhzEAyD9DilHKlPUh0Q1YcqDBNzcO2N5qx26L00qIlGjxUmTLHa22Si4j~NyZgPeT14sKNm5IbYGL7fEwDoB~b8-3OcOOXWg-P1E0Zm7qkSy7a7d7oKLXJRxfVP087Ergkn7Wn5qVlDRTTjUs1flhgBgmQfO64GxZJ9yuODNZE5dyQ3ScNnZxb3JMsbaHXaSUGc142R5dNHnqHyXPKQo0ePzzyT1mq3-bW7wFJ62B7h4Xr2D1GSrcJWIjOqQcVrvz9XHAqyCb3v83n8L9j4pMY4jUQKzPwOIa~A__",
        view: "https://luxury-caramel-c16d9b.netlify.app/",
        git: "https://github.com/hiren3107/Our_Works/tree/main/Webpages/Framework"
      },
      {
        src: "https://media-hosting.imagekit.io//4bc6caa2293c4ed4/Gaming.png?Expires=1836041145&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=L~dkbzRFLQxJLb9QJFCwl~ywdzU-UywFlAUGw-kfyPX2HrmnPl53eaojHa9ohAhAiCV1mst~v8Bi6ddIbRKzcTpJwyqP8x7gZB3ZsyneHBrLKON8bv1-F57~1wVuT~-yW3AySk8veQkMSVgqccXQbkCPdnG03Sli1X5YH6eFqm8zVxoVZ9~sDjcWb6BUwNpOoxv7-7ZRr10al8myi2s7OXOgKWr8IWSn30AF1hVFdMRhyiSG5jjT~iR9YyFUClRDywg1xBlq69qjFUa79eDR7zeaSwBph5enOnn6Hntlt912rXguXtgmkLeocueJIQj8Qb2efkmEUjjjkOWhLYTtbg__",
        view: "https://cheerful-dieffenbachia-765c79.netlify.app/",
        git: "https://github.com/hiren3107/Our_Works/tree/main/Webpages/Gaming"
      },
      {
        src: "https://media-hosting.imagekit.io//c954886d6fba4a86/Horse%20Club.png?Expires=1836041145&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=cr9l-JHvgjn1aDdnyT0SK1lvQwumj47hWBVpklyhEoswos0rz0NBCq-WHZwdQmB4hRm6CKvs79Ar5anZ~FoyailDdB4-3VBP2dyh2CSqJkJimaEVNnET0TvcCW5lZuKIGjGfWZBUJRMSa8Np36cwrIqYIWbg3-KYnQrTG6Zx2tW7EUA3FfznHbo~juksqepM~u-GTY7RgNUFA3rqahW3-fxI53exRvcImLLOgY~kfGog4OOjPiLuPtu4-FQ9bz-qM7VDosrv1nufyX7OSuKFaFWgkkD2xvPoH3iEVH3hugTFfEPtR3OyOKiArPgvEEr~ZamVr5ekvkDsuqIzFyt89Q__",
        view: "https://inquisitive-puppy-381672.netlify.app/",
        git: "https://github.com/hiren3107/Our_Works/tree/main/Webpages/Horse%20Club"
      },
      {
        src: "https://media-hosting.imagekit.io//36fae9d062524164/Konato.png?Expires=1836041145&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=ifRXvcT1vBhfFU-m8vJQcJ4Z93Rs5RjOS2I0g4Qh9KI30EDnN1lKZPLwz~4QdJ-4d7O87vGFv5HnWX~3oYT7XTF~j5vdO~IGEzS~o3HsnAK1S8j0qnHxu7wUggeBtzfIm-jY10B~D2ML65ZR2BL6WU9mZZGu0j8PNQL~PjZc4rJnkK0ztJnNyxvLjHZA1UHnJMxtNqt141r71-HATWFTZXcTcohWoIXov2WKNkwmdsPxXXu7achl4aQD3VV7hGtAMHEZsKeTYlOGHISb7ChD9AOXNJAHId~BZNPrRb0DRDHyyryX9vPa~ZQVMq1btJplhJbME-sOWQLusTQnRkU9Ug__",
        view: "https://comforting-shortbread-47f032.netlify.app/",
        git: "https://github.com/hiren3107/Our_Works/tree/main/Webpages/Konato"
      },
      {
        src: "https://media-hosting.imagekit.io//4fcd33eaef674376/Lawyer.png?Expires=1836041145&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=fa6A7rRRbZfVRnB9ltcIa8avOZc-kJlzpuP8aG2jIxxLmG8ryDW1vhS5CADIzI991JCaX6N93MfTC7B48Q7ftVUpmqMMh-gLu82WgcxRDjE5bAPDg9WyaNINB8ftk-LUQxwF7e-ZW7RVUZie2qSQbMyOS2Gz6ycGJrwSbRt6psl4fb5RWg29cvafdaPZHqVxUP5Eno186znR-BtiqKHihy4CC4jKRfxo~9-QcyPLko1wQjn~g7wKhH4f7vrjg00vMiYVtMSW09n75vGx1NhyxTJKH5s0X-j3IA2~uM9-bL6Wdu~lwjU0QUDk1PNIKh-7gB02vrA8zW8ScV-Z2qdDwA__",
        view: "https://fabulous-meerkat-092d8b.netlify.app/",
        git: "https://github.com/hiren3107/Our_Works/tree/main/Webpages/Lawyer"
      },
      {
        src: "https://media-hosting.imagekit.io//3bc2679ed4394736/Listed.png?Expires=1836041145&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=KxfeDBIooxzN4nWqkQf-iHLWXlhyraaHln7dBIKxfzmJnKFwIeb6EeIVeOR5Kw8CvXw-18rXyYmDQI0L1meiWVhYSRGZkhRKzkuPqTvF319wDGKSQ~VSq1LPfny7k7JbRGJgtJ0CmVj6WXy3tfQCSR4iMCYA9Llv9GSgEWtPRsI~THfTSoqF4vQCOuMCLYOkxUik1LHTIiIbtcPNVujEIM7LoCnRYad14bfMNl-WmdXYzGMg6uGHKswi~b5QUnAmsJy9Sdt1yx8EeKLDwHwHTUHvS94s4LIeLq4fdGi3PQef1GuFS7B6y6ksxk7ebj4tF7xOzCns7VAE9O-Mox2eZg__",
        view: "https://reliable-biscuit-cde12d.netlify.app/",
        git: "https://github.com/hiren3107/Our_Works/tree/main/Webpages/Listed"
      },
      {
        src: "https://media-hosting.imagekit.io//c5f97d81ca22478a/Monday.png?Expires=1836041145&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=uYXbCMzOkhcMXMuF0BreZlytO0webzM3qR3iSZBQQPBHWb60c2armxPLkI-fLMlY2nu~G91JbdVzUCXVRUOOFUnAqe3ms04qdMNRoOQKpRCWiKfAWuuWVvNDM1heBqknr2HCHc2mB2qjLIjWzUGm9FvVLjU7M1f1F-jKkGp-g73bJnSChkw3vsBciGrUcpkgiCS0bgto7drtIrj-2DYeI7g0gH8aa-fqIVo7YpTutgGeAWB4JoQ-EQMUOJLcC3bNzCHhzKpKRDAC0FF47bbD8aaKvnQWwjZNblmCY1ONzgTY4YJDrBHO-xrwahzeuH2s0nZ8EV4qkJm-MGJBhJS0Ow__",
        view: "https://glittery-kataifi-079017.netlify.app/",
        git: "https://github.com/hiren3107/Our_Works/tree/main/Webpages/Monday"
      },
      {
        src: "https://media-hosting.imagekit.io//7cbea421e79e47ac/Mosh.png?Expires=1836041145&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=IROJbpnYlFqO1FwLHVbPfbIi5bXu58r3ctD6z7GuOqowkmCi9jT6Eyoj17yHw-Cq-qYiur10trrETd5XuG~drQnlw-pelysu0oPpMvwnnL841kzP6jjKNY~45lmaR1hSjFLqwYsr~9C1lY1VrZabz6fS-~5~kAiwIJJm9-83pXS9pp~M5eUq6uzRGxEZMUfVsXfaX56vUA5IiPRd~BftauAF1Sxm4AR1KcQMBLHV~BtIVkzN65PnWyWNiTeToykTpV~NxkAua6UGLAG6ehU-Rk1heYXevByxvDlnxKbqV5xuSg2ENM4hjNTY6RREZU-ER4e3CAn835bUmgEfdtYuJA__",
        view: "https://chipper-capybara-40c247.netlify.app/",
        git: "https://github.com/hiren3107/Our_Works/tree/main/Webpages/Mosh"
      },
      {
        src: "https://media-hosting.imagekit.io//5bace5fabb934d77/Nftku.png?Expires=1836041145&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=FocoC~L~wH64MHU~d1CegrZtJQop9uNwhhUyy1RcTkPVYmw9uk2XSN9~VuPDUAVMJmTdd-ljsxbCqsrgCVDuu80SiZVqyG60s1kc5IOz4PDQwXZ9p8DEGWCGBnGQHwc6EfKiHIdG67oO1SS2vr9Rn5pRa9RsfBPwXYYqqTSD8bdquTZLeuuVgJ53gjtSbPqypBdlnU7NkUMnfs-QN2IOKNV4HNwonPdMEgF1i6wZvSmov4GT3s-lf5NwJmj0UBD9FynFr9C0T814NzO6Ih0IGQEz45oiS4Xuq50MuVZBXA2ulSGT4qH~ah5dp5W8oYcXXPZF4y7I9LnjousjBFJoTg__",
        view: "https://whimsical-pasca-94cda9.netlify.app/",
        git: "https://github.com/hiren3107/Our_Works/tree/main/Webpages/Nftku"
      },
      {
        src: "https://media-hosting.imagekit.io//df92826c43a94f0b/Photografer.png?Expires=1836041145&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=pcYP-aHo7Jh5xXnZEmz3ibRJPO71uH4Un6hEq0IFso9CCcFSw~-6pPOB9zKGSHfVSGOUMpo9JPwknJrUtOlinSULGsxoxZqUGof41QGaOOkpB30uRRz-cHroTr8Zd3ZNMgmxpGKwlkCNaIwIoX4~JJtqoWdjjMRbSVik~PbdeBgZRHykU50~S7k5TCyI2DzCeDe-qJp4b0XZpzXRF-Ku-VjC~eC9JsClf1PCCExgU8CzIuxcnRUGw7a008PPmOw7mFN4AnVuNxZr36hyv18uGqYLi0eK7PZQEUztLTEcuKtEqv6mxAahgJpuhUt45cjfIDYh7q9i-sr-2f4JBBV2~g__",
        view: "https://luxury-hotteok-185b56.netlify.app/",
        git: "https://github.com/hiren3107/Our_Works/tree/main/Webpages/Photografer"
      },
      {
        src: "https://media-hosting.imagekit.io//441960d1bd424d01/Re-born.png?Expires=1836041145&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=pG45KTLcfW0Imdv9CgBv1gkEMVrqReNGvQDrztNERulPmCnUv9W8AS00~L8D~YsPmVEYJoz7RnxxQXkOpVONFoagSAOgts6aZvQJeEMYg3hNm-jRgf8p2N~Bm-5uMfb4xolnlaxKUv-alMhpZlEM9yDs8KxdqRVxorzfs5jdOowR6R-lOjc2o4XR-vjBQ0BtRThY2KhLOJc1yo9kOCzdEuyCcqFECyksyQCBO59E32MDGSGERDvL5UBlht3~YPhSWaEAr64m4TjaErw6UVTyJPD~kmdUOEvknJmZiTeTf~mLjQ20woljqywKat-KpuCmlXe1vDPqnye4X1xi75bzGA__",
        view: "https://bejewelled-bublanina-17836d.netlify.app/",
        git: "https://github.com/hiren3107/Our_Works/tree/main/Webpages/Re-born"
      },
      {
        src: "https://media-hosting.imagekit.io//7d07e5ffe6dc4831/Seoweb%20%20web-1.png?Expires=1836041145&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=jIczUA5SxUSKkFGTYkSTNx6Vu9UCYYBw3iohJMzooe6vbfvUhbO502BrlMcHJ3nEbOkyq75V7e8K-mu78PLXs5Up7ghJmcj5-xnKY030E41oUAEBhjiHxIabN0QZ9yS5065UMhkTImeWT2HlP8bYF1~3scwDuNanwl9qrvV1ZtyrqTyexTuUlEqbbVu4xT0eignVCe~8sMZ1X1gVhsVdqXr-u-jN7PjEf2z6knoRqI3jj0oZKzSCPbRRrU9PTFyBNQ6nT6LRqpGmmrkxdyubLb2Ha2q5wWsSNSavnat3SLVsoFF0WfvkPnkmycDQ1VwEfIwqPIs7bd18oOkge2J1sg__",
        view: "https://gleeful-tarsier-8bc437.netlify.app/",
        git: "https://github.com/hiren3107/Our_Works/tree/main/Webpages/Seoweb%20%20web-1"
      },
      {
        src: "https://media-hosting.imagekit.io//ba410eec05d84690/Shapely%20Demo.png?Expires=1836041145&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=24BTV50nJof9h~JYajEjAGk1IoYkn1rqoavHAOJx7YFgT0ze6tkK-7MvxDlG~cf08nCrx4Nc4FrcZliqBMGgjB~1Mm7Aktt1k4f7bGUra9VYuqo6edaoVx2gct82AkZCmBtBAgqf6n8oCr3HfIXU9o7l3GGS~cKaFZNDuO1iEs7f-YM2KVS7ID5VrYcdWu8GBPidmvBGaLkICU5S6JqcmfHZ8ersHVsKJcmLY0A~~btgwQPD6QgsbgcHT2WcikXo7aS6WJkxcllyp4oSK0y1yXxhI~bpDG8A2f7Qr5FfbjS6AiiKYeN7x6wz840eP65fROPvwhk1waD5b0cLUUKquw__",
        view: "https://jolly-semolina-72f390.netlify.app/",
        git: "https://github.com/hiren3107/Our_Works/tree/main/Webpages/Shapely%20Demo"
      },
      {
        src: "https://media-hosting.imagekit.io//cd7c56cea7b7449f/Shion%20house.png?Expires=1836041145&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=hi4Ca4c9lZM4Dh6eNeNMqxlxXeEv0KeysrmdOIqC68QHmM7LHJMCv7zE8xnwGLTQhLsj7cx5zrz77~nVOeeGqBIT2b~crICVmgngXi9HHrMzRWCXfqH1gy~-SnsiVd7DjivoUUlUo2cVHrktVNf2XlDHuGYamFO4UdeF98CGkQDOgU8~tP7AJ2kjlVax41N6vhq8DCF29AVbPd3LDMc-U5XF3Ed4bXx1H4QYbPs-TYMPSjj5A2nIS1Rs9JhoGXHqD4Lxk4BbjS~FHvilmZgLA9fcw97vBWXrf9TH5cqAPuVuoNImY-JubxTZeAkH8pyuUY-F9WQfSfrHtjMGvS0olQ__",
        view: "https://frabjous-melba-e98d73.netlify.app/",
        git: "https://github.com/hiren3107/Our_Works/tree/main/Webpages/Shion%20house"
      },
      {
        src: "https://media-hosting.imagekit.io//4f762b20d46f4d58/skater.png?Expires=1836041145&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=L179Limda8ay6ugSqPcs4jKvMJWGiRkXfBGosdNIor8jzg2P6G8BnU0VSKrTtHrmXKk7yQ2ufJeqDUHDt0TOI-UR-6Fey2ldjfZnpoxI1xEPf~A9GEfK3Oey9D66HpJrXNuyRk12hH1GzK2n7MqIMPV0TX7qdseXY5JgWGkxMGkHkruBrfRToTtzowiBPgxYbybf-MiNNAnsVxcjCem8MRtMuAoYZI2QNjo3zJmRU0QwPnw5xoY7H06zXNPz2j0cF9DoLOsbla--mo-rGUyGMPiLTg87Zasyc7RLsxWLMXmF~0aR32EKBZlvHOyaVLZDuRiHRIWIpieJxI6QNEyOsQ__",
        view: "https://visionary-figolla-1ad832.netlify.app/",
        git: "https://github.com/hiren3107/Our_Works/tree/main/Webpages/skater"
      },
      {
        src: "https://media-hosting.imagekit.io//0947af7d45344744/Time%20zone.png?Expires=1836041145&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=lpEcwtHsKnf-G4ZfWaq6QjjqexuI5J3F6OFepYj7864ZvYcKa0ZdImN9S62bCELF1tPRnqZsiO9rnSo37TJMPQw6OyhI3W2Pht4UxcsDc9-x2CpJonm1G80ioJ-jCjFLGXa6l0LIYfl7F4u8ZK9LjYzkHyuDvd2aOdOVciGKlB0hGEDq~3CuGGrrd1MfDBVyPyKxCU3F90AcpbpnLiWr09SHpK8awux0dbyRYmMECgkVhcQjOL0BaKFRZ6P-3B3cDomtfIpg333LoxMgQcPMMO-31eYwpY65M1JIqd2CENWQNwtG5g5h14hGQE2cUU9w1x0z-QrZclI~R4dW5qR9zQ__",
        view: "https://dashing-bonbon-506bb1.netlify.app/",
        git: "https://github.com/hiren3107/Our_Works/tree/main/Webpages/Time%20zone"
      },
      {
        src: "https://media-hosting.imagekit.io//23c90e8efe1f4616/Tralive.png?Expires=1836041145&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=L7rU2irZ5TV9-1JBjlP-vlEiemYQjAlKChf9evT~fLPVvRLEJ1TWqSBYkptjjDC4ZNwu6Y87z4ha4Cx85115f21RrI1eZuh5CyvTBlXJwPGhYkpsHO1dIa6n9wpiTUepRUNrHiWQCnmfjXO57MO2KvJ0e3h2-0nZjMoVrS-5TEbtjia4nivwBXtuEcbnHIduZtKPICmIuOm3QlovHZuTZrI47K9RYd2YPtCjH4rknx46JofDLZzU1UWsTSsK4LeSNRx933cO6e7yoYKf~A7DU1D~FgGqILK~6A9cA6QJQ6bdwFmvH4t3L14~pgjS1wecuc0ihZz4h8nO2uxsDIw9lQ__",
        view: "https://thunderous-gaufre-ed82c3.netlify.app/",
        git: "https://github.com/hiren3107/Our_Works/tree/main/Webpages/Tralive"
      },
      {
        src: "https://media-hosting.imagekit.io//ebbb96d2506d49e6/Transportion.png?Expires=1836041145&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=x4AjYADNjNsaM7tV2xOh7LrOVjyPJppYvVwCYjI3hsKGPfSgnQQsEqXD2OyvD7ZqRNuE~rjdodg~yvKDaH47uL3bIYJbIghhM0IwuZmSvv0w4FZ49qfbw7wMgAkdTmn9vegneXYCUEuSteekK3rcFzDVCVKmCXMAziNfxMNUj0BUFiaVQwpDTNFCE8RTP~Luk-IaxcZ-CB-2CDUeDP8evzXCGzII08oDtLWUk5mKcznCIS3OKc5v3iMnsnK-UXY31mIczAFb8ImyxvezU01u03vgVBlyE1Pl7hCKjbygwxNMUdmhPYRoOi5gLdj5cfS14cw7TsEWP7KutmMFCLWb4A__",
        view: "http://fancy-kringle-28e516.netlify.app/",
        git: "https://github.com/hiren3107/Our_Works/tree/main/Webpages/Transportion"
      },
      {
        src: "https://media-hosting.imagekit.io//de790a2758a045b1/Wplms.png?Expires=1836041145&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=IKj-IubCqLnfeQXZxg2WJHerkCwzMfaOJAcSJMN4ONe9Maq5iBKemQNzwrheCWGXr-G3s8QEEUr~SAE1s7fRwDQEsdRY8V7p~49aV61IKcsACo0~RzYgumggDQtsgiFuBG0Dp3yUze7-kX2inpqLhPw~Hp6iUv8fp1lrOnV--VEwKUH7tBd41zfuScJoFKf8J1sNfis-YG-~TZBglRj0WhTVl2HmaM4gmR11qUIKh-c9hMeT4JTirJPKkcPYRLFOT4IqjGEzb8~Rq1G2nVS5B0Rt2Waw7uxRTuUKXzEXdauKvhgzMhv4uapmEpyUzscOprBztNd43EuYl2uVe4ckMg__",
        view: "https://ornate-smakager-784982.netlify.app/",
        git: "https://github.com/hiren3107/Our_Works/tree/main/Webpages/Wplms"
      }
    ],
    websites: [
      {
        src: "https://media-hosting.imagekit.io//ca1b3972cf944b1b/boat%20clone.png?Expires=1836040824&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=a0iy0hcvqGKQS5DLwIEpCZEVoI0VBLhClnOkm~68oLxriVUnEvSSYgunkqbL5n4yeYiXEAnuGSoA4dvycUNcAf4owOMtqyOxgSP5pxDz2N9VUd53ViqjAiUqhj-~U6VtN8wpro1Gg-UrzpjZldP2~IV4Z92wIPafxg4-0VTWWvGmw~pvOoR3zyuxe-AATWff69X91VkutHsbHci4DWIY8-07pQOCXh9H1t4UePoS3HRer2aR-vyJyq6znnsMeW4BSYIuitn9olkR5E1ICpPTlReLuu4V2HD75gVEBwzPt6g3kKGaXo5XYSC9xH7y48EqvyIDONcRSPXy7kfooqA0pQ__",
        view: "https://botclone.netlify.app",
        git: "https://github.com/hiren3107/Boat_Clone"
      },
      { 
        src: "https://media-hosting.imagekit.io//b270922ace5843fe/flayers.png?Expires=1836040929&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=onZO9wIXlvpzxtrjhMamjJ3JSlSDoYCnN76OXbMijDt-Yy~HO~7zBVOReMKRWUc6t-cbjZzLMFLgqwVEGV5pWPtr13Nz7EjgqgdyyUuYYV~reSVrD-FrYic37fFG96h5Jyqc2axdr5qKznM~k03bxeVlRbxC9O8C9~W~8CuqUy03y5CVG42eUR7-igW8tUjAgJN2bWoUPxLdxtVX5sqWxcV2FggIgs0m04ppksJmRbGTCLVg9Uejte2YnOts3bKBzESryBydoJE16GAqsEutnqKO2hB2~mztO1S1Z15Fx9h8Wig5ZNLYZQ-5D0sfDeyd9j-JLCY98ADCdTogycDB0A__",
        view: "https://elaborate-panda-f38d9c.netlify.app/",
        git: "https://github.com/hiren3107/Java-Script/tree/main/Website/Flyers"
      },
      { 
        src: "https://media-hosting.imagekit.io//3dc727d6b8804773/GTA%205.png?Expires=1836042321&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=yyJ2p5zB~QUpOFQkJHp6BBrwGBEiFSubyJ-5VMAzaGu0g~iEsJnHRv6HOMvGFiOz17lwXDMemC0ZEMOnqiXeteYSQJHsE0QvoPvZQuYpwa202~UbYM-EoyXWNIV6~M1BsJpjH8haOtRXn-qRtY316m5u19U4kEOh67AyXz-XjOiYaz~-sxXtBRAXjAz33qCN4SeRXLYfjfJB5Y3ma6KdkG-12EA36d5-n30mH1dcsrJ~nxqAufJNJcxbG~NEBxvvxCViG3HudUwPbqTfck-RNp-~v3DcaV9c8t4ByfNbZn0DIATBvb2l146-lCiN6RwAn-i0o~VQXveriIblr9-Frg__",
        view: "https://animated-starburst-1fe586.netlify.app/",
        git: "https://github.com/hiren3107/Our_Works/tree/main/Website/Gta%205"
      }, 
      { 
        src: "https://media-hosting.imagekit.io//bd9d2df25ca14f08/Player%20X.png?Expires=1836042321&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=mT9-vnMVeeS9LBdryrk1rLsVkdP8vnsuy1cb36~UasYugphX9A1HiFCwZVloqyWa59vrwCY2jo7khVYTVLO9g1PNHB5q19OUCwxgxq3OUQPoaouhTCrPg9PmZGZOs5~7FuLvSZUxrfs1oOPM6vSi~ReHZCSK8tDpnEpIQ5FnebMOYpYvDtmUinYvoWNdozwjse4HXDVn76hdymGcLYMuWlMGV3SaDzjd8X~jjWkU5hYB~UBQByR1OMcvp6~ZyZ02FEd-V7rmuyouisUue8mPsbssO55ywemHdMHpIFCT3mon6RwGGNgdQWfpTmSfSLyx83xyM6RM0ePxEzhNaU8tIg__",
        view: "https://jovial-sundae-3985bc.netlify.app/",
        git: "https://github.com/hiren3107/Our_Works/tree/main/Website/Player%20X"
      }
    ],
    adminpanels: [
      { 
        src: "https://media-hosting.imagekit.io//02697fde675c49b0/adminpanel.png?Expires=1836040822&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=BYkraPdMaaO8VyG5e~46nz2lt~H7fw6dzj3~RXZL8e3g9MsKhGkCIz~-9hRYxybvFkTTodmbqAG8j6Lr5SCBZWq~T5wA8g28kCG0cx6cZk0A5sRtQOrt8t5ilt7pk02NtWU3ivOIejx9oNz83fM7HhDNmyuO8-E8lQklsdnR5nGi-WX1Xqvrgs4zEAG9ZH9w4smtM7~lujOHEo1bIhKB7VtsnzsE~H81GKYGHSBJkE3gNRntb0~tU9iCT8aBp6ykHFk4S20Vcs~Q7UWOo7lIcOLAqQlO4hVAUzzXNstaThjEVkWaWJKvf68tEIofIhi~YpHhAJ1RWNnhDpmLVnOzGg__",
        view: "https://hirenadminpanel.netlify.app/",
        git: "https://github.com/hiren3107/NXT_WAVE_ADMINPANEL"
      },
      { 
        src: "https://media-hosting.imagekit.io//9d778ad6e14b4546/Adminpanel%20Jquary.png?Expires=1836042795&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=Z0ih6KPVRuWpU7EBd3P7Jpfu~hr01XKeHU~JfqNhmS-xf4A2MUDYlv8EBUrlmz9BVaU49a4WwuKpQx~PX-gwuTpZWXeTT7yLs-2JHkmL3QsEFDdz-9UyLX3HUQjBU3emO8T00H-oIi~R7wshlQ0tfmTY3ttH7D8jJmbNQ~lJWnRdZ03W~LAF0uYtzmuzzYE4J~PBqVp-r-Z571nogbjLTJ3MwH743Ddw3Ga9iJaZxEa5wuhkzTYNLkjE5tUEjvfVMLDu9m9-8MKm4dI350Vgs9yuKrUiAz9Mq575JxwE3vcDLeImeIbSadyuAKKlvec~rJDwAnNzecwpZWMJRC0lrg__",
        view: "https://effervescent-seahorse-1da51d.netlify.app/",
        git: "https://github.com/hiren3107/Our_Works/tree/main/Adminpanel/Admin%20Panel%20Jquary"
      }
    ],
  };

  return (
    <motion.div 
    className="min-h-screen bg-[#0c0c1d] p-5 flex flex-col items-center"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
  >
    {/* Navbar */}
    <nav className="w-full flex justify-center mb-6">
      {Object.keys(sections).map((section) => (
        <button
          key={section}
          onClick={() => setActiveSection(section)}
          className={`px-4 py-2 mx-2 rounded-lg text-white transition-all duration-300 ${
            activeSection === section
              ? "bg-[#6a4aff]"
              : "bg-gray-600 hover:bg-gray-500"
          }`}
        >
          {section.charAt(0).toUpperCase() + section.slice(1)}
        </button>
      ))}
    </nav>

    {/* Projects Display */}
    <motion.div 
      className="w-[90%] md:w-[70%]"
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="text-3xl font-bold text-center text-white mb-6">
        {activeSection.charAt(0).toUpperCase() + activeSection.slice(1)}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-3 gap-4 overflow-y-auto max-h-[70vh] p-2">
        {sections[activeSection].map((el, index) => (
          <motion.div
            key={index}
            className="border shadow-lg rounded-lg p-4 flex flex-col items-center bg-white h-full transition-transform transform hover:scale-102 hover:shadow-2xl hover:bg-[#f8f8f8] hover:border-[#6742a3ff] duration-300 ease-in-out"
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={el.src}
              alt="Project"
              className="w-full h-48 object-cover rounded-lg mb-3 transition-all duration-300 transform hover:scale-105"
            />
            <div className="flex gap-2 flex-grow justify-between mt-4">
              <a href={el.view} target="_blank" rel="noopener noreferrer">
                <button className="bg-gradient-to-r from-[#6a4aff] to-[#a24cff] text-white px-4 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                  View
                </button>
              </a>
              <a href={el.git} target="_blank" rel="noopener noreferrer">
                <button className="bg-gradient-to-r from-[#ff8c00] to-[#ffb800] px-4 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                  GitHub
                </button>
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </motion.div>
  );
}

export default Project;
