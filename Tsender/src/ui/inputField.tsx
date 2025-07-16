import React from "react";

// 定义组件接收的属性类型
interface InputFieldProps {
  label: string;
  placeholder: string;
  value: string;
  type: string;
  large?: boolean;
  onChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

// 输入字段组件
const InputField: React.FC<InputFieldProps> = ({
  label,
  placeholder,
  value,
  type,
  large,
  onChange,
}) => {
  // 根据 large 属性决定使用 input 还是 textarea
  const InputElement = large ? "textarea" : "input";

  return (
    <div className="mb-4">
      {/* 标签 */}
      <label
        htmlFor={label}
        className="block text-gray-700 text-sm font-bold mb-2"
      >
        {label}
      </label>
      {/* 输入框或文本域 */}
      <InputElement
        id={label}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
          large ? "h-32" : ""
        }`}
      />
    </div>
  );
};

export default InputField;
