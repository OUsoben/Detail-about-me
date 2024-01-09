import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import LanguageDetector from "i18next-browser-languagedetector"

i18n 
.use(initReactI18next)
.use(LanguageDetector)
.init({
    resources :{
        en:{
            translation : {
                hommepage :{

                },
                navbar:{
                    flag : "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Flag_of_Cambodia_%283-2%29.svg/2560px-Flag_of_Cambodia_%283-2%29.svg.png",
                    header1: "Home"
                }
            }
        },
        kh:{
            translation : {
                homepage:{

                },
                navbar:{
                    flag: "https://cdn.britannica.com/25/4825-004-F1975B92/Flag-United-Kingdom.jpg",
                    header1: "ទំព័រដើម"
                }
            }
        }
    }
})