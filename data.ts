import {RiComputerLine} from "react-icons/ri";
import {IService, ISkill, ITooltipIcons} from "./type";
import {FaAws, FaJava, FaReact, FaTools} from "react-icons/fa";
import {BsCircleFill, BsBrushFill} from "react-icons/bs";
import {
    SiAdobeillustrator, SiAdobephotoshop, SiArduino, SiBlender, SiC, SiCplusplus, SiCss3, SiHtml5,
    SiJavascript, SiSiemens, SiSpring, SiStorybook, SiTypescript, SiUnity, SiMicrosoftoffice, SiWindows
} from "react-icons/si";
import {TbBrandKotlin} from "react-icons/tb";
import {GrMysql} from "react-icons/gr";

export const services: IService[] = [
    {
        title: "Programming languages & Frameworks",
        about: "This section accomplishes some programing languages and frameworks I've studied and worked with over the last years ",
        Icon: RiComputerLine,
    },
    {
        title: "Backend Development",
        about: "This section accomplishes some programing languages and frameworks I've studied and worked with over the last years ",
        Icon: FaTools,
    },
]

export const languages: ISkill[] = [
    {
        name: 'Python',
        level: '50%',
        Icon: BsCircleFill
    },
    {
        name: 'Java Script',
        level: '70%',
        Icon: BsCircleFill
    },
    {
        name: 'React',
        level: '65%',
        Icon: BsCircleFill
    },
    {
        name: 'Java',
        level: '65%',
        Icon: BsCircleFill
    },
    {
        name: 'Kotlin',
        level: '80%',
        Icon: BsCircleFill
    },
    {
        name: 'SpringBoot',
        level: '65%',
        Icon: BsCircleFill
    },
    {
        name: 'C',
        level: '40%',
        Icon: BsCircleFill
    },
    {
        name: 'C++',
        level: '50%',
        Icon: BsCircleFill
    },
]

export  const tools: ISkill[] = [
    {
        name:'Photoshop',
        level: '85%',
        Icon: BsCircleFill
    },
    {
        name:'Paint Tool Sai',
        level: '90%',
        Icon: BsCircleFill
    },
    {
        name:'Illustrator',
        level: '40%',
        Icon: BsCircleFill
    },
    {
        name:'Figma',
        level: '50%',
        Icon: BsCircleFill
    },
    {
        name:'Blender',
        level: '30%',
        Icon: BsCircleFill
    },
    {
        name:'Unity',
        level: '30%',
        Icon: BsCircleFill
    },
    {
        name:'Lader (PLC)',
        level: '70%',
        Icon: BsCircleFill
    },
]
export const illustrationIcons: ITooltipIcons[] = [
    {
        tooltip:'PaintToolSai',
        Icon: BsBrushFill,
    },
    {
        tooltip:'Photoshop',
        Icon: SiAdobephotoshop,
    },
    {
        tooltip:'Illustrator',
        Icon: SiAdobeillustrator,
    },
]

export const hotmartIcons: ITooltipIcons[] = [
      {
           tooltip:'Kotlin',
            Icon: TbBrandKotlin
      },
       {
          tooltip:'Java',
           Icon: FaJava
        },
        {
            tooltip:'SpringBoot',
            Icon: SiSpring
        },
        {
            tooltip:'Amazon Web Services',
            Icon: FaAws
        },
        {
            tooltip:'MySQL',
            Icon: GrMysql
        },
        {
            tooltip:'JavaScript',
            Icon: SiJavascript
        },
        {
            tooltip:'TypeScript',
            Icon: SiTypescript
        },
        {
            tooltip:'React',
            Icon: FaReact
        },
        {
            tooltip:'Storybook',
            Icon: SiStorybook
        },

]

export const collegeIcons: ITooltipIcons[] = [
        {
            tooltip:'Siemens(CLP-Lader)',
            Icon: SiSiemens,
        },
        {
            tooltip:'C',
            Icon: SiC,
        },
        {
            tooltip:'C++',
            Icon: SiCplusplus,
        },
        {
            tooltip:'JavaScript',
            Icon: SiJavascript,
        },
        {
            tooltip:'HTML5',
            Icon: SiHtml5,
        },
        {
            tooltip:'CSS3',
            Icon: SiCss3,
        },
        {
            tooltip:'Unity',
            Icon: SiUnity,
        },
        {
            tooltip:'Blender',
            Icon: SiBlender,
        },
        {
            tooltip:'Arduino',
            Icon: SiArduino,
        },
]

export const schoolIcons: ITooltipIcons[] = [
    {
        tooltip:'Office (Word, Exel and PowerPoint)',
        Icon: SiMicrosoftoffice,
    },
    {
        tooltip:'Windows',
        Icon: SiWindows,
    },
]