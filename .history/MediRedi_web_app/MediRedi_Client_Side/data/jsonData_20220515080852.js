const courses = [
  {
    "id": "1",
    "image": "https://i.ibb.co/YyDDkFf/course-1.jpg",
    "category": "Digital",
    "title": "Overseas Remote Patients Care",
    "subtitle": "A guide to how to work with clients and patients in the US and Canada remotely",
    "teacher_img": "https://i.ibb.co/L1C5TPh/course-tutor-1.jpg",
    "tutor_name": "Brian Cumin",
    "lessons": "12",
    "price": "74",
    "date": "24 January 2022",
    "review": "4.5",
    "lectures": "14",
    "duration": "6 weeks",
    "enrolled": "20 students",
    "img_bg": "https://i.ibb.co/pxJrTHv/course-big1.jpg",
  },
  {
    "id": "2",
    "image": "https://i.ibb.co/K7qTQfD/course-2.jpg",
    "category": "Digital",
    "title": "Cultural Considerations",
    "subtitle": "A beginner’s guide to designing or renovating interior spaces that pop.",
    "teacher_img": "https://i.ibb.co/jzMTN7m/course-tutor-2.jpg",
    "tutor_name": "Jack Morkel",
    "lessons": "14",
    "price": "64",
    "date": "24 February 2022",
    "review": "4.3",
    "lectures": "12",
    "duration": "5 weeks",
    "enrolled": "15 students",
    "img_bg": "https://i.ibb.co/h1bvfnx/course-big2.jpg",
  },
  {
    "id": "3",
    "image": "https://i.ibb.co/f2ssw1v/course-3.jpg",
    "category": "Economics",
    "title": "Economics historical development",
    "subtitle": "A beginner’s guide to designing or renovating interior spaces that pop.",
    "teacher_img": "https://i.ibb.co/y5hkvVt/course-tutor-3.jpg",
    "tutor_name": "Hilary Ouse",
    "lessons": "18",
    "price": "52",
    "date": "1 March 2022",
    "review": "4.2",
    "lectures": "15",
    "duration": "7 weeks",
    "enrolled": "25 students",
    "img_bg": "https://i.ibb.co/G9nk7hr/course-big3.jpg"
  },
  {
    "id": "4",
    "image": "https://i.ibb.co/JKkKyC2/course-4.jpg",
    "category": "Beginner",
    "title": "Learn algebra the easy way!",
    "subtitle": "A beginner’s guide to designing or renovating interior spaces that pop.",
    "teacher_img": "https://i.ibb.co/1Zs65x0/course-tutor-4.jpg",
    "tutor_name": "Phanta Bear",
    "lessons": "20",
    "price": "42",
    "date": "3 March 2022",
    "review": "4.6",
    "lectures": "18",
    "duration": "8 weeks",
    "enrolled": "30 students",
    "img_bg": "https://i.ibb.co/X8D9hk5/course-big4.jpg"
  },
  {
    "id": "5",
    "image": "https://i.ibb.co/RYvsXmD/course-5.jpg",
    "category": "Economics",
    "title": "Angular the complete guide",
    "subtitle": "A beginner’s guide to designing or renovating interior spaces that pop.",
    "teacher_img": "https://i.ibb.co/y5hkvVt/course-tutor-3.jpg",
    "tutor_name": "Hilary Ouse",
    "lessons": "22",
    "price": "105",
    "date": "3 February 2022",
    "review": "4.7",
    "lectures": "16",
    "duration": "5 weeks",
    "enrolled": "35 students",
    "img_bg": "https://i.ibb.co/vmF8JBR/course-big5.jpg"
  },
  {
    "id": "6",
    "image": "https://i.ibb.co/2kC8y0p/course-6.jpg",
    "category": "IT Specialist",
    "title": "Intelligence analyst course 2022",
    "subtitle": "A beginner’s guide to designing or renovating interior spaces that pop.",
    "teacher_img": "https://i.ibb.co/Gsfqvb8/course-tutor-6.jpg",
    "tutor_name": "Oliver Porter",
    "lessons": "24",
    "price": "85",
    "date": "5 February 2022",
    "review": "4.8",
    "lectures": "17",
    "duration": "9 weeks",
    "enrolled": "38 students",
    "img_bg": "https://i.ibb.co/LrrzfnN/course-big6.jpg"
  },
  {
    "id": "7",
    "image": "https://i.ibb.co/sP5hfV9/course-1.jpg",
    "category": "Design Thinking",
    "title": "Mechanical Engineering and Electrical Engineering Explained.",
    "subtitle": "A beginner’s guide to designing or renovating interior spaces that pop.",
    "teacher_img": "https://i.ibb.co/L1C5TPh/course-tutor-1.jpg",
    "tutor_name": "Brian Cumin",
    "lessons": "26",
    "price": "136",
    "date": "10 December 2021",
    "review": "4.3",
    "lectures": "20",
    "duration": "10 weeks",
    "enrolled": "4.25k students",
    "img_bg": "https://i.ibb.co/qr2Txx9/course-big7.jpg",
    "watching": "44k"
  },
  {
    "id": "8",
    "image": "https://i.ibb.co/K7qTQfD/course-2.jpg",
    "category": "Mechanical",
    "title": "The Challenge Of Global Learning In Public Education.",
    "subtitle": "A beginner’s guide to designing or renovating interior spaces that pop.",
    "teacher_img": "https://i.ibb.co/jzMTN7m/course-tutor-2.jpg",
    "tutor_name": "Jack Morkel",
    "lessons": "28",
    "price": "120",
    "date": "25 December 2021",
    "review": "4.4",
    "lectures": "23",
    "duration": "10 weeks",
    "enrolled": "3.3k students",
    "img_bg": "https://i.ibb.co/YhcWMJD/course-big8.jpg",
    "watching": "56k"
  },
  {
    "id": "9",
    "image": "https://i.ibb.co/f2ssw1v/course-3.jpg",
    "category": "Design Thinking",
    "title": "Mechanical Engineering and Electrical Engineering Explained.",
    "subtitle": "A beginner’s guide to designing or renovating interior spaces that pop.",
    "teacher_img": "https://i.ibb.co/y5hkvVt/course-tutor-3.jpg",
    "tutor_name": "Hilary Ouse",
    "lessons": "30",
    "price": "130",
    "date": "29 December 2021",
    "review": "4.6",
    "lectures": "27",
    "duration": "12 weeks",
    "enrolled": "3.7k students",
    "img_bg": "https://i.ibb.co/WPSJY8V/course-big9.jpg",
    "watching": "36k"
  },
  {
    "id": "10",
    "image": "https://i.ibb.co/JKkKyC2/course-4.jpg",
    "category": "Photography",
    "title": "Statistics Data Scince and Business Analysis.",
    "subtitle": "A beginner’s guide to designing or renovating interior spaces that pop.",
    "teacher_img": "https://i.ibb.co/1Zs65x0/course-tutor-4.jpg",
    "tutor_name": "Phanta Bear",
    "lessons": "32",
    "price": "140",
    "date": "31 January 2022",
    "review": "4.7",
    "lectures": "28",
    "duration": "14 weeks",
    "enrolled": "2.3k students",
    "img_bg": "https://i.ibb.co/SmH6Jdp/course-big10.jpg",
    "watching": "66k"
  },
  {
    "id": "11",
    "image": "https://i.ibb.co/RYvsXmD/course-5.jpg",
    "category": "Python",
    "title": "Machine Learning A-Z: Hands-On Python and java.",
    "subtitle": "A beginner’s guide to designing or renovating interior spaces that pop.",
    "teacher_img": "https://i.ibb.co/y5hkvVt/course-tutor-3.jpg",
    "tutor_name": "Hilary Ouse",
    "lessons": "34",
    "price": "150",
    "date": "14 January 2022",
    "review": "4.8",
    "lectures": "30",
    "duration": "16 weeks",
    "enrolled": "1.2k students",
    "img_bg": "https://i.ibb.co/KwFB9wh/course-big11.jpg",
    "watching": "32k"
  },
  {
    "id": "12",
    "image": "https://i.ibb.co/2kC8y0p/course-6.jpg",
    "category": "Design Thinking",
    "title": "The most complete Design Thinking Course on the Market",
    "subtitle": "A beginner’s guide to designing or renovating interior spaces that pop.",
    "teacher_img": "https://i.ibb.co/Gsfqvb8/course-tutor-6.jpg",
    "tutor_name": "Oliver Porter",
    "lessons": "34",
    "price": "150",
    "date": "24 January 2022",
    "review": "4.1",
    "lectures": "43",
    "duration": "14 weeks",
    "enrolled": "3k students",
    "img_bg": "https://i.ibb.co/y8NSrtz/course-big12.jpg",
    "watching": "24k"
  },
  {
    "id": "13",
    "image": "https://i.ibb.co/6DLRgP7/course-grid-1.jpg",
    "category": "Digital",
    "title": "Non-Degree Seeking Online Design for Learning Environments.",
    "subtitle": "Communia virtutes tutiorem declarat stoicorum sanabat oblivisci nostris tamquam iucunditatem",
    "teacher_img": "https://i.ibb.co/L1C5TPh/course-tutor-1.jpg",
    "tutor_name": "Brian Cumin",
    "lessons": "12",
    "price": "74",
    "date": "17 November 2021",
    "review": "4.2",
    "lectures": "37",
    "duration": "13 weeks",
    "enrolled": "45 students",
    "img_bg": "https://i.ibb.co/6DLRgP7/course-grid-1.jpg",
    "watching": "21k"
  },
  {
    "id": "14",
    "image": "https://i.ibb.co/cYMTqrq/course-grid-2.jpg",
    "category": "Beginner",
    "title": "Language Assessment in the Classroom Course.",
    "subtitle": "Communia virtutes tutiorem declarat stoicorum sanabat oblivisci nostris tamquam iucunditatem",
    "teacher_img": "https://i.ibb.co/jzMTN7m/course-tutor-2.jpg",
    "tutor_name": "Jack Morkel",
    "lessons": "14",
    "price": "59",
    "date": "28 October 2021",
    "review": "4.3",
    "lectures": "40",
    "duration": "15 weeks",
    "enrolled": "18 students",
    "img_bg": "https://i.ibb.co/cYMTqrq/course-grid-2.jpg",
    "watching": "27k"
  },
  {
    "id": "15",
    "image": "https://i.ibb.co/cvsPtpf/course-grid-3.jpg",
    "category": "Design",
    "title": "A framework for keeping up with an ever-evolving profession.",
    "subtitle": "Communia virtutes tutiorem declarat stoicorum sanabat oblivisci nostris tamquam iucunditatem",
    "teacher_img": "https://i.ibb.co/y5hkvVt/course-tutor-3.jpg",
    "tutor_name": "Hilary Ouse",
    "lessons": "26",
    "price": "69",
    "date": "1 March 2022",
    "review": "4.3",
    "lectures": "36",
    "duration": "14 weeks",
    "enrolled": "20 students",
    "img_bg": "https://i.ibb.co/cvsPtpf/course-grid-3.jpg",
    "watching": "26k"
  },
  {
    "id": "16",
    "image": "https://i.ibb.co/GVQGVm4/course-grid-4.jpg",
    "category": "coding",
    "title": "Expertise in a single subject or across a spectrum.",
    "subtitle": "Communia virtutes tutiorem declarat stoicorum sanabat oblivisci nostris tamquam iucunditatem",
    "teacher_img": "https://i.ibb.co/1Zs65x0/course-tutor-4.jpg",
    "tutor_name": "Phanta Bear",
    "lessons": "22",
    "price": "78",
    "date": "13 January 2022",
    "review": "4.4",
    "lectures": "28",
    "duration": "12 weeks",
    "enrolled": "35 students",
    "img_bg": "https://i.ibb.co/GVQGVm4/course-grid-4.jpg",
    "watching": "27k"
  },
  {
    "id": "17",
    "image": "https://i.ibb.co/g9rCmK8/course-grid-5.jpg",
    "category": "Design Thinking",
    "title": "Differentiation for Learning Course - National Learning Centre",
    "subtitle": "Communia virtutes tutiorem declarat stoicorum sanabat oblivisci nostris tamquam iucunditatem",
    "teacher_img": "https://i.ibb.co/y5hkvVt/course-tutor-3.jpg",
    "tutor_name": "Hilary Ouse",
    "lessons": "30",
    "price": "80",
    "date": "8 January 2022",
    "review": "4.5",
    "lectures": "38",
    "duration": "15 weeks",
    "enrolled": "40 students",
    "img_bg": "https://i.ibb.co/g9rCmK8/course-grid-5.jpg",
    "watching": "29k"
  },
  {
    "id": "18",
    "image": "https://i.ibb.co/BTcccYb/course-grid-6.jpg",
    "category": "Medical",
    "title": "Teacher Development: Health Curriculum Course.",
    "subtitle": "Communia virtutes tutiorem declarat stoicorum sanabat oblivisci nostris tamquam iucunditatem",
    "teacher_img": "https://i.ibb.co/Gsfqvb8/course-tutor-6.jpg",
    "tutor_name": "Oliver Porter",
    "lessons": "28",
    "price": "95",
    "date": "20 January 2022",
    "review": "4.6",
    "lectures": "46",
    "duration": "16 weeks",
    "enrolled": "55 students",
    "img_bg": "https://i.ibb.co/BTcccYb/course-grid-6.jpg",
    "watching": "28k"
  },







  // blog data 
  [
    {
      id: 1,
      img: 'https://i.ibb.co/wckc2yj/blog-1.jpg',
      category: 'Uncategorized',
      title: 'How to crack the MCC Qualifying exam 3x faster',
      date: 'Dec 28, 2022',
      views: '1,526 views',
      blog_author: 'Shahnewaz',
      img_bg: 'https://i.ibb.co/s2PByN8/blog-big-8.jpg'
    },
    {
      id: 2,
      img: 'https://i.ibb.co/4Y9WSqs/blog-2.jpg',
      category: 'University',
      title: 'How stay calm for the First time.',
      date: 'Jun 14, 2022',
      views: '1,426 Views',
      blog_author: 'Brian Cumin',
      img_bg: 'https://i.ibb.co/VSMy1G1/blog-big-9.jpg'
    },
    {
      id: 3,
      img: 'https://i.ibb.co/JFW5sjG/blog-3.jpg',
      category: 'HR and L&D',
      title: 'How to deal with client complaints',
      date: 'March 14, 2022',
      views: '1,326 Views',
      blog_author: 'Hilary Ouse',
      img_bg: 'https://i.ibb.co/8dD2Td2/blog-big-10.jpg'
    },
    {
      id: 4,
      img: 'https://i.ibb.co/BPzNBMP/blog-big-1.jpg',
      category: 'Education',
      title: 'How to manage clients over',
      date: 'January 14, 2022',
      views: '1,626 Views',
      blog_author: 'Oliver Porter',
      img_bg: 'https://i.ibb.co/BPzNBMP/blog-big-1.jpg'
    },
    {
      id: 5,
      img: 'https://i.ibb.co/Q9PG9GS/blog-big-2.jpg',
      category: 'Business',
      title: 'A Podpourri of Learning Options: Pods, Hubs, and Microschools',
      date: 'April 14, 2022',
      views: '1,726 Views',
      blog_author: 'Brian Cumin',
      img_bg: 'https://i.ibb.co/Q9PG9GS/blog-big-2.jpg'
    },
    {
      id: 6,
      img: 'https://i.ibb.co/RQjjDcz/blog-big-3.jpg',
      category: 'UX Design',
      title: 'Amplifying Student Voice to Design the Vision for Learning',
      date: 'May 14, 2022',
      views: '1,826 Views',
      blog_author: 'Oliver Porter',
      img_bg: 'https://i.ibb.co/RQjjDcz/blog-big-3.jpg'
    },
    {
      id: 7,
      img: 'https://i.ibb.co/M8THZSb/blog-big-4.jpg',
      category: 'Business',
      title: 'Kicking off 2022 with the Future of Educational Technology Conference',
      date: 'June 14, 2022',
      views: '1,926 Views',
      blog_author: 'Smith',
      img_bg: 'https://i.ibb.co/M8THZSb/blog-big-4.jpg'
    },
    {
      id: 8,
      img: 'https://i.ibb.co/Ns6YBH2/blog-big-5.jpg',
      category: 'Education',
      title: 'A Podpourri of Learning Options: Pods, Hubs, and Microschools',
      date: 'July 15, 2022',
      views: '1,126 Views',
      blog_author: 'Hilary Ouse',
      img_bg: 'https://i.ibb.co/Ns6YBH2/blog-big-5.jpg'
    },
    {
      id: 9,
      img: 'https://i.ibb.co/S0cR3qv/blog-big-6.jpg',
      category: 'Business',
      title: 'A Podpourri of Learning Options: Pods, Hubs, and Microschools',
      date: 'July 15, 2022',
      views: '1,126 Views',
      blog_author: 'Hilary Ouse',
      img_bg: 'https://i.ibb.co/Ns6YBH2/blog-big-5.jpg'
    },
    {
      id: 10,
      img: 'https://i.ibb.co/kc95Q5s/blog-big-7.jpg',
      category: 'UX Design',
      title: 'Classroom adapts for the future of learning',
      date: 'July 15, 2022',
      views: '1,126 Views',
      blog_author: 'Hilary Ouse',
      img_bg: 'https://i.ibb.co/Ns6YBH2/blog-big-5.jpg'
    },
  ],



  [
    {
      id: 1,
      title: 'Global education fall meeting for everyone',
      date: '02 October, 2022',
      review: '4.5',
      time: '10:30am - 12:30pm',
      tutor_img: 'https://i.ibb.co/L1C5TPh/course-tutor-1.jpg',
      tutor_name: 'Brian Cumin',
      location: 'New York, US',
      event_img: '',
      end_time: 'July 26, 2022 12:30 am',
      price: '76',
    },
    {
      id: 2,
      title: 'University seminar series on global health.',
      date: '06 August, 2022',
      review: '4.3',
      time: '11:00am - 12:00pm',
      tutor_img: 'https://i.ibb.co/jzMTN7m/course-tutor-2.jpg',
      tutor_name: 'Jack Morkel',
      location: 'New York, US',
      event_img: '',
      end_time: 'Jun 20, 2022 12:30 am',
      price: '66',
    },
    {
      id: 3,
      title: 'Virtual spring part-time jobs fair for student.',
      date: '18 March, 2022',
      review: '4.4',
      time: ' 09:45am - 11:30pm',
      tutor_img: 'https://i.ibb.co/f2ssw1v/course-3.jpg',
      tutor_name: 'Hilary Ouse',
      location: 'New York, US',
      event_img: '',
      end_time: 'April 20, 2022 12:30 am',
      price: '56',
    },
    {
      id: 4,
      title: 'Scottish creatives to receive funded business.',
      date: '27 October, 2022',
      review: '4.6',
      time: '04:00pm - 06:30pm',
      tutor_img: 'https://i.ibb.co/1Zs65x0/course-tutor-4.jpg',
      tutor_name: 'Phanta Bear',
      location: 'New York, US',
      event_img: '',
      end_time: 'May 20, 2022 12:30 am',
      price: '86',
    },
  ],




  // team
  [
    {
      id: 1,
      team_img: "https://i.ibb.co/t27dKJ6/team-1.jpg",
      name: "Melissa Jones",
      title: "Professor",
      review: "4.5",
      teaches: "Interior Markater",
    },
    {
      id: 2,
      team_img: "https://i.ibb.co/hfXbZr7/team-2.jpg",
      name: "Morgan Key",
      title: "Teacher MBA",
      review: "4.6",
      teaches: "Design Thinking",
    },
    {
      id: 3,
      team_img: "https://i.ibb.co/4KSD2fc/team-3.jpg",
      name: "Andra Flatcher",
      title: "Lead Teacher",
      review: "4.7",
      teaches: "Client Relations",
    },
    {
      id: 4,
      team_img: "https://i.ibb.co/cNvrgQB/team-4.jpg",
      name: "Oliver Porter",
      title: "Photogrepher",
      review: "4.8",
      teaches: "IT Specialist",
    },
  ],



  [
    {
      "id": "1",
      "image": "https://i.ibb.co/YyDDkFf/course-1.jpg",
      "icon_img": "https://i.ibb.co/ph8XZwq/course-paint.png",
      "category": "Design Thinking",
      "title": "Mechanical Engineering and Engineering Explained.",
      "subtitle": "A beginner’s guide to designing or renovating interior spaces that pop.",
      "teacher_img": "https://i.ibb.co/L1C5TPh/course-tutor-1.jpg",
      "tutor_name": "Brian Cumin",
      "lessons": "19",
      "price": "204.36",
      "date": "27 January 2022",
      "review": "2.8",
      "lectures": "14",
      "duration": "6 weeks",
      "enrolled": "20k students",
      "videos":"56",
      "img_bg": "https://i.ibb.co/pxJrTHv/course-big1.jpg",
    },
    {
        "id": "2",
        "image": "https://i.ibb.co/K7qTQfD/course-2.jpg",
        "icon_img": "https://i.ibb.co/BB8msyp/course-book-2.png",
        "category": "Digital",
        "title": "The Challenge Of Global LearningIn Public Education.",
        "subtitle": "A beginner’s guide to designing or renovating interior spaces that pop.",
        "teacher_img": "https://i.ibb.co/jzMTN7m/course-tutor-2.jpg",
        "tutor_name": "Jack Morkel",
        "lessons": "14",
        "price": "105.52",
        "date": "24 February 2022",
        "review": "4.3",
        "lectures": "15",
        "duration": "5 weeks",
        "enrolled": "15k students",
        "img_bg": "https://i.ibb.co/h1bvfnx/course-big2.jpg",
        "videos":"66",
    },
    {
      "id": "3",
      "image": "https://i.ibb.co/f2ssw1v/course-3.jpg",
      "icon_img": "https://i.ibb.co/BB8msyp/course-book-2.png",
      "category": "Marketing",
      "title": "Become a UI/UX Designer Everything You need To Know.",
      "subtitle": "A beginner’s guide to designing or renovating interior spaces that pop.",
      "teacher_img": "https://i.ibb.co/y5hkvVt/course-tutor-3.jpg",
      "tutor_name": "Hilary Ouse",
      "lessons": "30",
      "price": "52",
      "date": "1 March 2022",
      "review": "4.2",
      "lectures": "15",
      "duration": "7 weeks",
      "enrolled": "25k students",
      "img_bg": "https://i.ibb.co/G9nk7hr/course-big3.jpg",
      "videos": "44",
    },
  ]
]

export default courses;