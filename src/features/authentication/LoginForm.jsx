import { useState } from "react";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormRowVertical from "../../ui/FormRowVertical";
import Input from "../../ui/Input";
import { useLogin } from "./useLogin";

export default function LoginForm() {
  const [email, setEmail] = useState("abcs@yahoo.com");
  const [password, setPassword] = useState("8631");
  const { login, isLoading } = useLogin();

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) return;
    const data = {
      username: email,
      password: password,
    };

    login(data, {
      onSettled: () => {
        setEmail("");
        setPassword("");
      },
    });
  }
  return (
    <Form onSubmit={handleSubmit}>
      <FormRowVertical label="Email address">
        <Input
          id="email"
          type="email"
          name="email"
          value={email}
          placeholder="Enter email address"
          autoComplete="username"
          onChange={(e) => setEmail(e.target.value)}
          disabled={isLoading}
        />
      </FormRowVertical>

      <FormRowVertical label="Password">
        <Input
          id="password"
          type="password"
          name="password"
          value={password}
          autoComplete="current-password"
          placeholder="Enter password"
          onChange={(e) => setPassword(e.target.value)}
          disabled={isLoading}
        />
      </FormRowVertical>
      <FormRowVertical>
        <Button size="large" type="submit" disabled={isLoading}>
          Log in
        </Button>
      </FormRowVertical>
    </Form>
  );
}
