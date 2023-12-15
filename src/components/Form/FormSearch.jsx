import Input from "../UI/Input";

function FormSearch({ className }) {
  return (
    <div>
      <Input
        input={{
          className: `${className} last:rounded-l-lg last:py-2 last:px-4`,
          id: "search",
          type: "text",
        }}
      />
    </div>
  );
}

export default FormSearch;
