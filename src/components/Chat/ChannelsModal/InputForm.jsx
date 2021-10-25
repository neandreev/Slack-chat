import { Formik, Form } from 'formik';

export default ({ channelName = '', onSubmit, testid }) => {
  console.log(channelName);
  
  return <Formik
    initialValues={{ channelName }}
    onSubmit={onSubmit}
  >
    {() => (
      <Form>
        <input
          className="form-control"
          data-testid={testid}
          type="text"
          name="channelName"
        />
      </Form>
    )}
  </Formik>
};