/**
 * Projects Data
 * 
 * To add or update projects, simply edit this array.
 * Each project needs: id, name, client, location, status, category, description.
 * Optional fields: scope (array), image (path), completedDate (string).
 * 
 * status must be either 'running' or 'completed'
 */

const projects = [
    {
        id: 'hs-towers-electrification',
        name: 'Electrification of HS Towers',
        client: 'HS Towers',
        location: 'Perumpilavu, Thrissur',
        status: 'completed',
        category: 'Electrical',
        description: 'We successfully completed the electrical infrastructure installation at HS Towers, delivering a reliable and efficient 50 kW electrical power system for the commercial building. The project involved the supply, installation, and commissioning of a complete electrical distribution system, designed to meet the operational power requirements of the facility.\n\nOur scope of work included the installation of a main electrical panel, Automatic Transfer Switch (ATS), and multiple Distribution Boards (DBs) to ensure safe and efficient power distribution across the building. The system was carefully designed to enhance electrical safety, reliability, and ease of maintenance.\n\nTo ensure uninterrupted power supply for the commercial facility, we also supplied and installed a 40 kVA generator as a backup power solution. The generator is fully integrated with the ATS, enabling automatic power transfer during utility power failures, minimizing downtime and ensuring continuous operations.\n\nThis project demonstrates our expertise in commercial electrical installation, power distribution systems, generator backup solutions, and electrical panel installation, delivering dependable power infrastructure for modern commercial buildings.',
        scope: [
            'Main electrical panel installation',
            'Automatic Transfer Switch (ATS) setup',
            'Multiple Distribution Boards (DBs) wiring',
            '50 kW load commissioning',
            '40 kVA generator supply & installation',
            'ATS-generator integration for automatic power transfer',
        ],
        image: '/images/projects/Electrical Panel Installaion.jpg',
        completedDate: 'January 2025',
    },
    {
        id: 'rahul-ajith-kumar-renovation',
        name: 'Residential Renovation – Electrical & Plumbing',
        client: 'Rahul Ajith Kumar',
        location: 'Kadashamkadavu, Thrissur',
        status: 'completed',
        category: 'Electrical and Plumbing',
        description: 'We carried out the electrical and plumbing works for a single-bedroom unit on the first-floor level as part of a residential renovation project in Kadashamkadavu, Thrissur. The scope focused on creating a modern, functional, and well-lit living space while upgrading the plumbing system for improved performance and comfort.\n\nThe electrical installation included profile lighting, ceiling lights, and integrated wardrobe lighting, designed to enhance the interior ambience and provide efficient illumination throughout the room. Special attention was given to toilet lighting, ensuring adequate brightness and a clean, modern look within the bathroom space.\n\nThe plumbing work involved the installation of a concealed cistern system, water closet, and a shower panel, creating a streamlined and space-efficient bathroom setup. To ensure consistent water pressure and reliable water supply, a pressure pump system was also installed and integrated with the plumbing network.\n\nThis renovation project highlights our capability to deliver complete residential electrical and plumbing solutions, combining functionality, modern design, and reliable infrastructure for comfortable everyday living.',
        scope: [
            'Profile lighting, ceiling lights & wardrobe lighting',
            'Toilet lighting installation',
            'Concealed cistern & water closet installation',
            'Shower panel setup',
            'Pressure pump system integration',
        ],
        image: '/images/projects/Rahul Ajithkumar.jpeg',
        completedDate: 'February 2026',
    },
];

export default projects;
