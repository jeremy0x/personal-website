interface InputFieldProps {
  type?: string;
  name: string;
  placeholder: string;
  textarea?: boolean;
  [x: string]: any;
}

export const InputField: React.FC<InputFieldProps> = ({
  type,
  name,
  placeholder,
  textarea = false,
  id,
  ...rest
}) => {
  const uniqueId = `${name}-${Math.random()}`;

  if (textarea) {
    return (
      <div>
        <label htmlFor={uniqueId} className="hidden">
          {placeholder}
        </label>
        <textarea
          name={name}
          id={uniqueId}
          placeholder={placeholder}
          required
          className="w-full border-b border-neutral-700 bg-transparent py-4 text-sm tracking-wider placeholder:text-neutral-400 focus:border-neutral-500 focus:outline-none"
          {...rest}
        />
      </div>
    );
  }

  return (
    <div>
      <label htmlFor={uniqueId} className="hidden">
        {placeholder}
      </label>
      <input
        type={type}
        name={name}
        id={uniqueId}
        placeholder={placeholder}
        required
        className="w-full border-b border-neutral-700 bg-transparent py-4 text-sm tracking-wider placeholder:text-neutral-400 focus:border-neutral-500 focus:outline-none"
        {...rest}
      />
    </div>
  );
};
