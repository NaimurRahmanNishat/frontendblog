import InputField from "./InputField";
import TextAreaField from "./TextAreaField";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
    title: string;
    description: string;
    authorName: string;
    authorImage: string;
    image: string;
  };

const AddBlog = () => {
  const {
    register,
    handleSubmit,
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const blogData = {
        title: data.title,
        description: data.description,
        image: data.image,
        author:{
            name:data.authorName,
            image:data.authorImage,
        }
    }
    console.log(blogData);
  };
  return (
    <div className="container mx-auto max-w-7xl px-4 py-24">
      <h2 className="text-2xl font-bold mb-6">Add New Blog</h2>
      {/* form */}
      <div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white max-w-3xl space-y-4 p-6 rounded-lg shadow-md"
        >
          <InputField
            label="Blog Title"
            id="title"
            placeholder="Blog Title"
            type="text"
            register={register("title", { required: true })}
          />
          {/* text area */}
          <TextAreaField
            label="Blog Description"
            id="description"
            placeholder="Blog Description"
            register={register("description", { required: true })}
          />

          <InputField
            label="Author Name"
            id="authorName"
            placeholder="Author Name"
            type="text"
            register={register("authorName", { required: true })}
          />
          <InputField
            label="Author Image URL"
            id="authorImage"
            placeholder="Author Image URL"
            type="url"
            register={register("authorImage", { required: true })}
          />
          <InputField
            label="Blog Image URL"
            id="image"
            placeholder="Blog Image URL"
            type="url"
            register={register("image", { required: true })}
          />

          <div>
            <button
              type="submit"
              className="w-full bg-secondery text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              Add Blog
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddBlog;
