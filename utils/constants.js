export const navList = [
  "HOME",
  "SPECIALITIES",
  "ABOUT US",
  "LOCATION",
  "CONTACT US",
];

export const socials = [
  {
    title: "Facebook",
    icon: <i class="fa-brands fa-facebook" style={{ color: "" }}></i>,
    link: "https://facebook.com",
  },
  {
    title: "Instagram",
    icon: <i class="fa-brands fa-instagram"></i>,
    link: "https://facebook.com",
  },
  {
    title: "Youtube",
    icon: <i class="fa-brands fa-youtube"></i>,
    link: "https://facebook.com",
  },
  {
    title: "Twitter",
    icon: <i class="fa-brands fa-twitter"></i>,
    link: "https://facebook.com",
  },
];

export const specialities = [
  {
    title: "Heart Surgery",
    desc: "lorem ipsum",
  },
  {
    title: "Heart Surgery",
    desc: "lorem ipsum",
  },
  {
    title: "Heart Surgery",
    desc: "lorem ipsum",
  },
  {
    title: "Heart Surgery",
    desc: "lorem ipsum",
  },
  {
    title: "Heart Surgery",
    desc: "lorem ipsum",
  },
  {
    title: "Heart Surgery",
    desc: "lorem ipsum",
  },
  {
    title: "Heart Surgery",
    desc: "lorem ipsum",
  },
  {
    title: "Heart Surgery",
    desc: "lorem ipsum",
  },
  {
    title: "Heart Surgery",
    desc: "lorem ipsum",
  },
];

export const galleryItems = [
  "/gal1.jpg",
  "/gal2.jpg",
  "/gal3.jpg",
  "/gal4.jpg",
  "/gal5.jpg",
  "/gal6.jpg",
  "/gal7.jpg",
];

export const CTAData = [
  {
    title: "Book Appointment",
    desc: "With Country's leading experts",
    icon: "/book-appointment.svg",
    bg: 'bg-book-appointment'
  },
  {
    title: "Book Health Checkup",
    desc: "All your health checkups under one roof",
    icon: "/hospitals.svg",
    bg: "bg-hospitals"
  },
  {
    title: "Specialities",
    desc: "Our Expertise in healtcare",
    icon: "/specialities.webp",
    bg: "bg-specialities"
  },
  {
    title: "Doctors",
    desc: "Top experts for your's and family's health",
    icon: "/doctors.svg",
    bg: "bg-doctors"
  },
]

import { FaUserDoctor } from "react-icons/fa6";

export const ourServices = [
  {
    title: "orthopaedics",
    icon: <FaUserDoctor className="text-green-dark text-7xl" />
  },
  {
    title: "medicine",
    icon: <FaUserDoctor className="text-green-dark text-7xl" />
  },
  {
    title: "obs & gynae",
    icon: <FaUserDoctor className="text-green-dark text-7xl" />
  },
  // {
  //   title: "Emergency Services",
  //   icon: <FaUserDoctor className="text-green-dark text-7xl" />
  // },
  {
    title: "General Surgery",
    icon: <FaUserDoctor className="text-green-dark text-7xl" />
  }
]

export const doctors = [
  {
    name: "DR. SATYAVIR DHANKHAR",
    img: "/dr-1.png",
    occupation: "",
    degree: "MBBS, MS ORTHO",
    college: "Ex Consultant Civil Hospital Bhiwani",
    department: "orthopaedics",
    specialised: ["Fracture", "Accident/Trauma", "Joint Replacement", "Orthoscopy", "Sport Injury", "Paediatrics Orthopaedics", "Advanced C&ARM Setting", "Ligament Injury Treatment"]
  },
  {
    name: "DR. PRIYA SINGH",
    img: "/dr-2.png",
    occupation: "",
    degree: "MBBS MS GYNE",
    college: "PGIMS ROHTAK",
    department: "gynaecology",
    specialised: ["Normal & Ceasarean Opertaion", "Complicated Pregnancy", "PCOD", "Menstrual Irregularities", "Leukorrhea", "Tubectomy", "Tubectomy", "Uterus Operation", "Ovarian Cysts Treatment", "Hysteroscopy", "Cervix Breast Uterus Cancer Screening", "Infertility Clininc", "Recurrent Abortion Clinic", "Menopause Clinic" ]
  },
  {
    name: "DR. MANDEEP SINGH",
    img: "/dr-3.png",
    occupation: "",
    degree: "MBBS MD (Internal Medicine)",
    college: "Ex Resident SNMC Jodhpur, PGIMS Rohtak",
    department: "General medicine",
    specialised: ["Sugar Treatment", "High BP Treatment", "Asthma Treatment", "Tuberculosis/Pneumonia Treatment", "Chest and Breathing Problem", "Dengue/Malaria", "Paralysis/Seizure", "Emergency Service"]
  },
]