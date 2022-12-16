const menu = [
  {
    name: "Home",
    path: "/",
    hasSubItem: false
  },
  {
    name: "Blogs",
    hasSubItem: true,
    children: [
      {
        name: "React",
        path: "/reactLearning.html"
      },
      {
        name: "Java",
        path: "/javaLearning.html"
      },
      {
        name: "LFU",
        path: "/algorithmLearning.html"
      },
    ]
  },
  {
    name: "About",
    path: "/about.html",
    hasSubItem: false
  },
  {
    name: "Album",
    path: "/album.html",
    hasSubItem: false
  }
];

export default menu;