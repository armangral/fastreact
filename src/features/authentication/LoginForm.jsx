import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormRowVertical from "../../ui/FormRowVertical";
import Input from "../../ui/Input";

export default function LoginForm() {
  return (
    <Form>
      <FormRowVertical label="Email address">
        <Input
          id="email"
          type="email"
          name="email"
          placeholder="Enter email address"
          autoComplete="username"
        />
      </FormRowVertical>

      <FormRowVertical label="Password">
        <Input
          id="password"
          type="password"
          name="password"
          autoComplete="current-password"
          placeholder="Enter password"
        />
      </FormRowVertical>
      <FormRowVertical>
        <Button size="large">Log in</Button>
      </FormRowVertical>
    </Form>
  );
}
