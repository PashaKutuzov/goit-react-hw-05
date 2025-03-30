import { Formik, Form, Field, ErrorMessage } from "formik";
import toast, { Toaster } from 'react-hot-toast';

export default function SearchBar({ onSubmit }) {

    const handleSubmit = (values, actions) => {
      if (!values.topic.trim()) {
        toast.error("Please enter a search term!");
        return;
      }
        console.log(values.topic);
        onSubmit(values.topic);
        actions.resetForm();
    };
  return (
    <>
    <Toaster position="top-right" reverseOrder={false} />
    <Formik
      initialValues={{
        topic: ""
      }}
      onSubmit={handleSubmit}
    >
      <Form>
        <div>
          <Field
            type="taxt"
            name="topic"
            placeholder="Search images and photos"
          />
        </div>
        <button className="searchBtn" type="submit">Submit</button>
      </Form>
    </Formik></>
  );
}