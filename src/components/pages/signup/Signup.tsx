
import { Form, Field, FieldRenderProps } from "react-final-form"

function Signup() {
    const handleSubmit = (values: any) => {
        console.log(values, "eeeeeee")
    }

    interface FormData {
        firstName?: string;
        lastName?: string;
    }
    const validate = (values: any) => {
        const error:Partial<FormData> = {}
        if (!values.firstName) {
            error.firstName = "enter the name"
        }
        if (!values.lastName) {
            error.lastName = "enter the lastaname"
        }
        return error
    }
    return (
        <div>
            <h3>Signup</h3>
            <Form
            onSubmit={handleSubmit}
            validate={validate}
            render={({ handleSubmit, submitting }) => (
                <form onSubmit={handleSubmit}>
                    <Field name="firstName">
                        {({ input, meta }: FieldRenderProps<string, HTMLInputElement>) => (
                            <div className="form-group">
                                <label htmlFor="firstName">First Name</label>
                                <input
                                    {...input}
                                    type="text"
                                    placeholder="First Name"
                                    className="form-control"
                                />
                                {meta.error && meta.touched && (
                                    <p className="w-100 mt-2 rounded-3 alert alert-danger text-danger alert-danger">
                                        {meta.error}
                                    </p>
                                )}
                            </div>
                        )}
                    </Field>
                    <Field name="lastName">
                        {({ input, meta }: FieldRenderProps<string, HTMLInputElement>) => (
                            <div className="form-group">
                                <label htmlFor="lastName">Last Name</label>
                                <input
                                    {...input}
                                    type="text"
                                    placeholder="Last Name"
                                    className="form-control"
                                />
                                {meta.error && meta.touched && (
                                    <p className="w-100 mt-2 rounded-3 alert alert-danger text-danger alert-danger">
                                        {meta.error}
                                    </p>
                                )}
                            </div>
                        )}
                    </Field>
                    <div className="loginbtn item_center">
                        <button
                            className="login-type mb-4"
                            disabled={submitting}
                            type="submit"
                        >
                            Sign Up
                        </button>
                    </div>
                </form>
            )}
        />

        </div>
    )
}

export default Signup