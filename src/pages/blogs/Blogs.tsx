import Banner from "../../components/Banner";
import BlogList from "./BlogList";


const Blogs = () => {
  return (
    <section className="container max-w-7xl mx-auto px-4 py-3">
      <Banner/>
      <BlogList/>
    </section>
  )
}

export default Blogs;