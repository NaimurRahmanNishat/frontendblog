import { UseFormRegisterReturn } from "react-hook-form";

interface Props {
    label: string; 
    id: string;
    placeholder: string;
    register?: UseFormRegisterReturn;
  }

const TextAreaField: React.FC<Props> = ({ label, id, placeholder,register }) => {
  return (
    <div>
      <label
        htmlFor="message"
        className="block text-gray-700 text-sm font-bold mb-2"
      >
        {label}
      </label>
      <textarea
        rows={4}
        {...register}
        id={id}
        className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
        placeholder={placeholder}
      ></textarea>
    </div>
  );
};

export default TextAreaField;
