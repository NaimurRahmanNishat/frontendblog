import { UseFormRegisterReturn } from "react-hook-form";

interface Props {
    label: string; 
    id: string;
    placeholder: string;
    type: string;
    register?: UseFormRegisterReturn;
  }
  
  const InputField: React.FC<Props> = ({ label, id, placeholder, type, register }) => {
    return (
      <div>
        <label
          htmlFor={id}
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          {label}
        </label>
        <input
          {...register}
          type={type}
          placeholder={placeholder}
          id={id}
          className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
      </div>
    );
  };
  
  export default InputField;
  