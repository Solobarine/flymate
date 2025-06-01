import Button from "../button";
import Card from "./blogCard";

const Blogs = () => {
  const blogs = [
    {
      image: "/blogs/news_1.avif",
      author: "Sam Becks",
      date: "08 Sept, 2022",
      title:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio magni animi quaerat.",
      highlight:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, dolor.",
    },
    {
      image: "/blogs/news_2.avif",
      author: "Jenny Stevens",
      date: "06 Apr, 2025",
      title:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio magni animi quaerat.",
      highlight:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, dolor.",
    },
    {
      image: "/blogs/news_3.avif",
      author: "Alan Schniezer",
      date: "14 May, 2023",
      title:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio magni animi quaerat.",
      highlight:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, dolor.",
    },
  ];
  return (
    <section className="px-2 sm:px-4 py-20">
      <div className="flex items-center gap-3 justify-between flex-wrap mb-8">
        <h2 className="text-4xl font-semibold">Our Latest News</h2>
        <Button>Show More</Button>
      </div>
      <div className="blogs-list">
        {blogs.map((blog, index) => (
          <Card key={index} blog={blog} />
        ))}
      </div>
    </section>
  );
};

export default Blogs;
