import appointment_image from './appointment_img.png'
import header_image from './header_img.png'
import group_profiles from './group_profiles.png'
import prifole_pic from './profile_pic.png'
import contact_image from './contact_image.png'
import about_image from './about_image.png'
import logo from './logo.svg'
import dropdown_icon from './dropdown_icon.svg'
import menu_icon from './menu_icon.svg'
import cross_icon from './cross_icon.png'
import chats_icon from './chats_icon.svg'
import verified_icon from './verified_icon.svg'
import arrow_icon from './arrow_icon.svg'
import info_icon from './info_icon.svg'
import upload_icon from './upload_icon.png'
import stripe_logo from './stripe_logo.png'
import razorpay_logo from './razorpay_logo.png'



import Dermatologist from './Dermatologist.svg'
import Gastroenterologist from './Gastroenterologist.svg'
import General_physician from './General_physician.svg'
import Gynecologist from './Gynecologist.svg'
import Neurologist from './Neurologist.svg'
import Pediatricians from './Pediatricians.svg'

// import appointments_icon from './appointments_icon.svg'
// import add_icon from './add_icon.svg'
// import admin_logo from './admin_logo.svg'
// import cancel_icon from './cancel_icon.svg'
// import doctor_icon from './doctor_icon.svg'
// import home_icon from './home_icon.svg'
// import people_icon from './people_icon.svg'
// import upload_area from './upload_area.svg'
// import list_icon from './list_icon.svg'
// import tick_icon from './tick_icon.svg'
// import earning_icon from './earning_icon.svg'
// import patients_icon from './patients_icon.svg'

import doc1 from './doc1.png'
import doc2 from './doc2.png'
import doc3 from './doc3.png'
import doc4 from './doc4.png'
import doc5 from './doc5.png'
import doc6 from './doc6.png'
import doc7 from './doc7.png'
import doc8 from './doc1.png'
import doc9 from './doc9.png'
import doc10 from './doc10.png'
import doc11 from './doc11.png'
import doc12 from './doc12.png'
import doc13 from './doc13.png'
import doc14 from './doc14.png'
import doc15 from './doc15.png'




export const assets = {
    appointment_image,
    header_image,
    group_profiles,
    prifole_pic,
    contact_image,
    about_image,
    logo,
    dropdown_icon,
    menu_icon,
    cross_icon,
    cross_icon,
    chats_icon,
    verified_icon,
    arrow_icon,
    info_icon,
    upload_icon,
    stripe_logo,
    razorpay_logo,
    // add_icon,
    // admin_logo,
    // appointments_icon,
    // cancel_icon,
    // doctor_icon,
    // upload_area,
    // home_icon,
    // patients_icon,
    // people_icon,
    // list_icon,
    // tick_icon,
    // appointments_icon,
    // earning_icon
}

export const specialityData = [
    {
        speciality: 'Generalp hysician',
        image: General_physician
    },
    {
        speciality: 'Dermatologist',
        image: Dermatologist
    },
    {
        speciality: 'Gynecologist',
        image: Gynecologist
    },
    {
        speciality: 'Pediatricians',
        image: Pediatricians
    },
    {
        speciality: 'Neurologist',
        image: Neurologist
    },
    {
        speciality: 'Gastroenterologist',
        image: Gastroenterologist
    },

]


export const doctors = [
    {
        _id: 'doc1',
        name: 'Dr. Lisa Turner',
        image: doc9,
        speciality: 'Gastroenterologist',
        degree: 'MD, Gastroenterology',
        experience: '5 Years',
        about: 'Dr. Lisa Turner offers extensive care for digestive health, focusing on the early detection, prevention, and treatment of gastrointestinal issues. Her expertise includes managing a range of digestive disorders and implementing strategies to maintain optimal digestive function. Dr. Turner is dedicated to providing personalized care tailored to each patient needs, ensuring effective treatment and improved health outcomes.',
        fees: 130,
        address: {
            line1: '8th Avenue, Digestive Clinic',
            line2: 'South Side, Los Angeles',
        },
    },
    {
        _id: 'doc2',
        name: 'Dr. Amelia Brown',
        image: doc2,
        speciality: 'Gastroenterologist',
        degree: 'MD, Gastroenterology',
        experience: '8 Years',
        about: 'Dr. Amelia Brown is a specialist in diagnosing and treating digestive disorders. She provides patient-centered care to ensure the best possible outcomes for gastrointestinal health. Her expertise focuses on addressing a range of digestive issues with a commitment to personalized treatment plans. Dr. Brown aims to enhance each patient well-being through comprehensive and compassionate care',
        fees: 100,
        address: {
            line1: '25th Street, Baker Street',
            line2: 'Downtown, New York',
        },
    },
    {
        _id: 'doc3',
        name: 'Dr. Susan Clark',
        image: doc3,
        speciality: 'Dermatologist',
        degree: 'MD, Dermatology',
        experience: '6 Years',
        about: 'Dr. Susan Clark is committed to improving skin health through personalized care, focusing on the treatment of various dermatological conditions.',
        fees: 80,
        address: {
            line1: '12th Avenue, Park Lane',
            line2: 'West End, Sydney',
        },
    },
    {
        _id: 'doc4',
        name: 'Dr. John Smith',
        image: doc4,
        speciality: 'General physician',
        degree: 'MBBS, General Medicine',
        experience: '10 Years',
        about: 'Dr. John Smith provides expert medical care in general medicine, emphasizing a holistic approach to health and wellness.',
        fees: 120,
        address: {
            line1: '8th Street, Maple Drive',
            line2: 'Uptown, Chicago',
        },
    },
    {
        _id: 'doc5',
        name: 'Dr. Emma Davis',
        image: doc5,
        speciality: 'Pediatrician',
        degree: 'MD, Pediatrics',
        experience: '5 Years',
        about: 'Dr. Emma Davis is focused on delivering exceptional pediatric care, ensuring the well-being of children from infancy through adolescence.',
        fees: 90,
        address: {
            line1: '4th Avenue, Green Park',
            line2: 'Central, Boston',
        },
    },
    {
        _id: 'doc6',
        name: 'Dr. Michael Johnson',
        image: doc6,
        speciality: 'Neurologist',
        degree: 'MD, Neurology',
        experience: '12 Years',
        about: 'Dr. Michael Johnson has extensive experience in treating neurological disorders, providing tailored care for complex brain and nerve conditions.',
        fees: 150,
        address: {
            line1: '5th Street, Neuro Lane',
            line2: 'East Bay, San Francisco',
        },
    },
    {
        _id: 'doc7',
        name: 'Dr. Sarah Lee',
        image: doc7,
        speciality: 'Pediatricians',
        degree: 'MD, Pediatrics',
        experience: '7 Years',
        about: 'Dr. Sarah Lee is dedicated to the mental and physical health of children, offering compassionate care for pediatric patients of all ages.',
        fees: 110,
        address: {
            line1: '6th Avenue, Wellness Plaza',
            line2: 'Downtown, Miami',
        },
    },
    {
        _id: 'doc8',
        name: 'Dr. David Garcia',
        image: doc8,
        speciality: 'Dermatologist',
        degree: 'MD, Dermatology',
        experience: '9 Years',
        about: 'Dr. David Garcia is an expert in dermatology, specializing in skin cancer treatment and various skin conditions with a focus on patient care.',
        fees: 200,
        address: {
            line1: '7th Street, Cancer Center',
            line2: 'Midtown, Houston',
        },
    },

    {
        _id: 'doc10',
        name: 'Dr. Charles Martinez',
        image: doc10,
        speciality: 'Neurologist',
        degree: 'MD, Neurology',
        experience: '15 Years',
        about: 'Dr. Charles Martinez specializes in the management of intricate neurological disorders, with a particular emphasis on developing and implementing effective treatment plans. His expertise lies in devising tailored strategies to address complex conditions, ensuring optimal outcomes for his patients. Through a comprehensive approach, Dr. Martinez delivers personalized care aimed at improving the quality of life for those with challenging neurological issues.',
        fees: 160,
        address: {
            line1: '9th Street, Hormone Hub',
            line2: 'Old Town, Philadelphia',
        },
    },
    {
        "_id": "doc11",
        "name": "Dr. Maria Lopez",
        "image": doc11,
        "speciality": "Gynecologist",
        "degree": "MD, Obstetrics and Gynecology",
        "experience": "6 Years",
        "about": "Dr. Maria Lopez is an expert in gastrointestinal health, dedicated to providing comprehensive care for various digestive issues and conditions.",
        "fees": 140,
        "address": {
            "line1": "10th Avenue, Respiratory Care",
            "line2": "North District, San Diego"
        }
    },

    {
        _id: 'doc12',
        name: 'Dr. James Wilson',
        image: doc12,
        speciality: 'Pediatricians',
        degree: 'MD, Pediatrics',
        experience: '8 Years',
        about: 'Dr. James Wilson focuses on providing exceptional care for children, from routine check-ups to managing chronic conditions.',
        fees: 150,
        address: {
            line1: '11th Street, Kidney Care Center',
            line2: 'West End, Toronto',
        },
    },
    {
        _id: 'doc13',
        name: 'Dr. Chloe Evans',
        image: doc13,
        speciality: 'General physician',
        degree: 'MBBS, General Medicine',
        experience: '9 Years',
        about: 'Dr. Jennifer White offers comprehensive medical care, focusing on preventative health measures and general wellness.',
        fees: 120,
        address: {
            line1: '12th Avenue, Vision Clinic',
            line2: 'Central Park, Melbourne',
        },
    },
    {
        "_id": "doc14",
        "name": "Dr. Robert King",
        "image": doc14,
        "speciality": "Gynecologist",
        "degree": "MD, Obstetrics and Gynecology",
        "experience": "11 Years",
        "about": "Dr. Robert King is a skilled gynecologist, specializing in women's reproductive health and providing comprehensive care for various gynecological conditions.",
        "fees": 170,
        "address": {
            "line1": "13th Street, Urology Center",
            "line2": "Downtown, Berlin"
        }
    },

    {
        _id: 'doc15',
        name: 'Dr. Jessica Carter',
        image: doc15,
        speciality: 'Dermatologist',
        degree: 'MD, Dermatology',
        experience: '10 Years',
        about: 'Dr. Jessica Carter provides expert dermatological care, specializing in skin health and the treatment of various skin conditions.',
        fees: 180,
        address: {
            line1: '14th Avenue, Arthritis Center',
            line2: 'City Center, Paris',
        },
    },
];
