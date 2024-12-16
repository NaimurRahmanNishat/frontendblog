import { Link } from "react-router-dom";

interface Blog {
    createdAt: string | number | Date;
    _id: string;
    title: string;
    content: string;
    description: string;
    image: string;
    author: Author;
    date: string;
  };

  interface BlogCardProps {
    blog: Blog;
  };

  interface Author{
    name: string;
    image: string;
  };

const BlogCard: React.FC<BlogCardProps> = ({blog}) => {
  return (
    <div className="border rounded-lg p-4 bg-white shadow-md">
      <Link to={`/blogs/${blog?._id}`}>
        <img src={blog.image} alt="" className="w-full h-48 object-cover mb-4 hover:scale-105 transition-all duration-200 cursor-pointer rounded-md"/>
      </Link>
      <div>
        <p className="bg-secondery/5 inline-block text-sm text-secondery px-3 py-1">Technology</p>
        <Link to={`/blogs/${blog?._id}`}>
          <h3 className="text-xl font-semibold text-gray-800 hover:text-secondery mb-2">{blog.title}</h3>
        </Link>
        <p className="text-gray-500">{`${blog.description.substring(0, 150)}`}...</p>
        <div className="mt-4 flex items-center">
          <img src={blog.author.image} alt="" className="size-10 rounded-full mr-3"/>
          <div>
            <p className="text-sm text-gray-600">{blog.author.name}</p>
            <p className="text-sm text-gray-600">
              {
                blog?.date ? <span>{new Date(blog.date).toLocaleDateString()}</span> : 
                <span>{new Date(blog.createdAt).toLocaleDateString()}</span>
              }
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogCard;