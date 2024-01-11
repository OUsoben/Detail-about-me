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
                   
                    header1: "Home",
                    header2: "About",
                    header3 : "Projects",
                    header4: "Contact"
                },
                homepage: {
                    h1: " Developer",
                    h2: "Front-End React",
                    p1: "Hi, I'm Ou Soben.A passionate Front-end React Developer based in Phnom penh.",
                    p2: "Technology skills",
                    p3: "My name's Ou soben. I'm 21 years old. I am from Phnom Penh,and I'm Currently a third-year student pursuing a Bachelor's Degree in Computer Science at " , 
                    p4 : "Royal University of Phnom Penh.",
                    p5: "with a passion for Design and Web Development.",
                    p6 : "It All Begins With A Passion.",
                    p7 : "Ou Soben"
                },
                about : { 
                    h1 :"About Me",
                    h2 : "A little about me",
                    p1: "I am very excited to share my personal information with you. I was born in Phnom Penh, Cambodia 18 April 2003, and a passion with Web Development since I was in grade 12. I didn't know much about computers at that time, and currently I am studying in the major of computer science I have the goal to become a full-stack web developer is what I thought.",
                    h3 : "Education",
                    h4 :"2022 Present",
                    h5: "Bachelor of Computer Science",
                    p2 :"Royal University of Phnom",
                    h6: "December 2021",
                    h7: "High School Diploma",
                    p3 :"Russey Keo High School",
                    h8: "Work Experience",
                    h9: "Teacher of Khmer and English, CCDS School, Phnom Penh, Cambodia",
                    p4 :"January 2023 - November 2023",
                    h10: "Pizza Maker, Pasta Corner, Phnom Penh",
                    p5: "February 2022 - January 2023",
                    h11:"Pizza Delivery Driver, The Pizza Company, Phnom Penh",
                    p6: "May 2020 - August 2021"
                },
                project : {
                    h1: "Projects",
                    h2 :"The Sport Store powered by HTML/CSS/Javscript(React) with (Platzi Fake Store API)",
                    p1 : "1 min read",
                    btn: "View more"
                },
                contect :{
                    p1: "Thank You",
                    p2: "Click on the social media platform to contact me. It's helps you to know me more"
                },
                footer : {
                    p1 :" © 2023 All Rights Reserved. Design by " ,
                    h1: "Ou Soben"
                }
            }
        },
        kh:{
            translation : {
              
                navbar:{
                 
                    header1: "ទំព័រដើម",
                    header2: "អំពីខ្ងុំ",
                    header3: "គម្រោង",
                    header4: "ទំនាក់ទំនង",
                
                }   ,
                homepage : { 
                    h2: "អ្នកអភិវឌ្ឍន៍ ",
                    h1: "Front-End React",
                    p1: "សួស្តី ខ្ញុំគឺ អ៊ូ សូបុិន។​ អ្នកបង្កើតកម្មវិធី Front-end React ដែលមានមូលដ្ឋាននៅទីក្រុងភ្នំពេញ។",
                    p2 : "ជំនាញបច្ចេកវិទ្យា",
                    p3: "ខ្ញុំឈ្មោះ អ៊ូ សុបុិន។ ខ្ញុំ​មាន​អាយុ ២១ ឆ្នាំ។ ខ្ញុំមកពីទីក្រុងភ្នំពេញ ហើយបច្ចុប្បន្នខ្ញុំជានិស្សិតឆ្នាំទី៣ កំពុងបន្តបរិញ្ញាបត្រផ្នែកវិទ្យាសាស្ត្រកុំព្យូទ័រ នៅ",
                    p4: "សាកលវិទ្យាល័យភូមិន្ទភ្នំពេញ។ ",
                    p5: "ជាមួយនឹងចំណង់ចំណូលចិត្តក្នុងការរចនា និងការអភិវឌ្ឍន៍គេហទំព័រ។",
                    p6: "ចាប់ផ្តើមជាមួយ ចំណង់ចំណូលចិត្ត",
                    p7 : "អ៊ូ សុបុិន"
                },
                about : { 
                    h1 : "អំពីខ្ងុំ",
                    h2 : "ខ្លះៗអំពីខ្ញុំ",
                    p1:"ខ្ញុំពិតជារំភើបណាស់ក្នុងការចែករំលែកព័ត៌មានផ្ទាល់ខ្លួនរបស់ខ្ញុំជាមួយអ្នក។ ខ្ញុំកើតនៅទីក្រុងភ្នំពេញ ប្រទេសកម្ពុជា ថ្ងៃទី ១៨ ខែមេសា ឆ្នាំ ២០០៣​ ហើយមានចំណង់ចំណូលចិត្តជាមួយ Web Development តាំងពីខ្ញុំរៀនថ្នាក់ទី ១២។ ខ្ញុំមិនដឹងច្រើនអំពីកុំព្យូទ័រទេនៅពេលនោះហើយបច្ចុប្បន្នខ្ញុំកំពុងសិក្សាផ្នែកវិទ្យាសាស្ត្រកុំព្យូទ័រ។ មានគោលដៅដើម្បីក្លាយជាអ្នកអភិវឌ្ឍន៍គេហទំព័រ ​Full-stack ​ជាអ្វីដែលខ្ញុំគិត។",
                    h3: "ប្រវត្តិសិក្សា",
                    h4: "២០២២ បច្ចុប្បន្ន",
                    h5 :"បរិញ្ញាបត្រផ្នែកវិទ្យាសាស្ត្រកុំព្យូទ័រ",
                    p2: "សាកលវិទ្យាល័យភូមិន្ទភ្នំពេញ",
                    h6 : "ខែធ្នូ ឆ្នាំ ២០២១",
                    h7 : "សញ្ញាបត្រមធ្យមសិក្សាទុតិយភូមិ",
                    p3: "វិទ្យាល័យឬស្សីកែវ",
                    h8: "បទពិសោធន៍​ការងារ",
                    h9: "គ្រូបង្រៀនភាសាខ្មែរនិងអង់គ្លេស, CCDS School, Phnom Penh, Cambod",
                    p4: "ខែមករា ឆ្នាំ ២០២៣ - ខែវិច្ឆិកា ឆ្នាំ ២០២៣",
                    h10 : "អ្នកចំអិន Pizza​,  Pasta Corner, Phnom Penh",
                    p5: " ខែកុម្ភៈ ឆ្នាំ ២០២២ - ខែមករា ឆ្នាំ ២០២៣",
                    h11: "អ្នកដឹកជញ្ជូនភីហ្សា, The Pizza Company, Phnom Penh",
                    p6: "ឧសភា ២០២០ - សីហា ២០២១"
                },
                project : {
                    h1 : "គម្រោង",
                    h2: "The Sport Store បានប្រើប្រាស់នូវបច្ចេកវិទ្យា HTML  CSS ​Javscript​​ និង React Framwork ជាមួយនឹង(Platzi Fake Store API)",
                    p1 : "",
                    btn: "មើលបន្ថែម",
                  
                },
                contect :{
                    p1 :"សូមអរគុណ",
                    p2:"ចុចលើវេទិកាប្រព័ន្ធផ្សព្វផ្សាយសង្គមដើម្បីទាក់ទងមកខ្ញុំវាជួយឱ្យអ្នកស្គាល់ខ្ញុំកាន់តែច្រើន"
                },
                footer : {
                    p1: "© 2023 រក្សាសិទ្ធិគ្រប់យ៉ាង។ រចនាដោយ ",
                    h1 :"អ៊ូ​ សុបុិន"
                }
            },
           
        }
    }
})