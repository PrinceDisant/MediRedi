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
    "title": "Life in Newfoundland",
    "subtitle": "A beginner’s guide to Life in Canada",
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
      title: 'How to manage clients overseas',
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