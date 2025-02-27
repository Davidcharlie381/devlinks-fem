import React, { FormEvent, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link2Icon } from "lucide-react";
import { Form, Link, useSubmit } from "@remix-run/react";
import { ActionFunction } from "@remix-run/node";
import { FormFields } from "./_protected.details";

export const action: ActionFunction = async ({request}) => {
  const formData =  await request.formData();
  const firstName = formData.get("firstName") as string;
  const lastName = formData.get("lastName") as string;
  const email = formData.get("email") as string;

  console.log({firstName, lastName, email,});

  return true;

}

export default function AuthPage() {
  const [loginFormError, setLoginFormError] = useState<FormFields | null>(null);
  const [signupFormError, setSignupFormError] = useState<FormFields | null>(
    null
  );

  const submit = useSubmit();

  const handleLogin = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    const errors: FormFields = {
      
      email: null,
      password: null
    };
  
    {
  
      if (!email) {
        errors.email = "Enter email";
      }
  
      if (!password) {
        errors.password = "Enter password";
      }
    }
  
    if (errors.email || errors.password) {
      return setLoginFormError((prev) => ({
        ...prev,
        email: errors.email,
        password: errors.password
      }));
    }
    setLoginFormError(null);

    submit(event.currentTarget);
  };

  const handleSignup = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const firstName = formData.get("firstName") as string;
    const lastName = formData.get("lastName") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    const errors: FormFields = {
      firstName: null,
      lastName: null,
      email: null,
      password: null
    };
  
    {
      if (!firstName) {
        errors.firstName = "Enter first name";
      }
  
      if (!lastName) {
        errors.lastName = "Enter last name";
      }
  
      if (!email) {
        errors.email = "Enter email";
      }
  
      if (!password) {
        errors.password = "Enter password";
      }
    }
  
    if (errors.firstName || errors.lastName || errors.email || errors.password) {
      return setSignupFormError((prev) => ({
        ...prev,
        firstName: errors.firstName,
        lastName: errors.lastName,
        email: errors.email,
        password: errors.password
      }));
    }
    setSignupFormError(null);

    submit(event.currentTarget);
  };

  return (
    <>
      <Link
        to="/"
        className="font-bold text-2xl flex justify-center items-center gap-1 p-5"
      >
        <Link2Icon
          size={28}
          className="bg-indigo-700 rounded-xl text-white block w-10 h-10 py-3"
        />
        <span className="">devlinks</span>
      </Link>
      <h1 className="text-center text-3xl font-bold mt-5">
        Welcome to devlinks
      </h1>
      <p className="text-sm text-gray-500 mt-2 mb-8 text-center">
        Login to your account or signup below
      </p>
      <div className="grid place-content-center">
        <div className="flex w-[360px] md:max-w-md items-center justify-center bg-gray-100 mt-10">
          <Card className="w-full p-6 shadow-lg rounded-2xl bg-white">
            <Tabs defaultValue="login" className="w-full">
              <TabsList className="grid grid-cols-2 mb-4">
                <TabsTrigger value="login">Login</TabsTrigger>
                <TabsTrigger value="signup">Sign Up</TabsTrigger>
              </TabsList>

              <TabsContent value="login">
                <div>
                  <CardContent>
                    <Form onSubmit={handleLogin} method="POST">
                      <label
                        htmlFor="email"
                        className="block text-sm text-gray-500"
                      >
                        Email*
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        className="block bg-white focus:border-indigo-700 outline-none mb-1"
                        style={{
                          border: loginFormError?.email ? "1px solid red" : "",
                        }}
                      />
                      {loginFormError?.email && (
                        <span className="text-sm text-red-500">
                          {loginFormError.email}
                        </span>
                      )}
                      <label
                        htmlFor="password"
                        className="block text-sm text-gray-500 mt-2"
                      >
                        Password*
                      </label>
                      <Input
                        id="password"
                        type="password"
                        placeholder="Enter your password"
                        className="block bg-white focus:border-indigo-700 outline-none mb-1"
                        style={{
                          border: loginFormError?.password
                            ? "1px solid red"
                            : "",
                        }}
                      />
                      {loginFormError?.password && (
                        <span className="text-sm text-red-500">
                          {loginFormError.password}
                        </span>
                      )}
                      <Button
                        size="lg"
                        className="bg-indigo-700 hover:bg-indigo-700/90 w-full mt-4"
                      >
                        Login
                      </Button>
                    </Form>
                  </CardContent>
                </div>
              </TabsContent>

              <TabsContent value="signup">
                <div>
                  <CardContent>
                    <Form onSubmit={handleSignup} method="POST">
                      <label
                        htmlFor="firstName"
                        className="block text-sm text-gray-500"
                      >
                        First Name*
                      </label>
                      <Input
                        id="firstName"
                        type="text"
                        placeholder="Enter your first name"
                        className="block bg-white focus:border-indigo-700 outline-none mb-1"
                        style={{
                          border: signupFormError?.firstName
                            ? "1px solid red"
                            : "",
                        }}
                      />
                      {signupFormError?.firstName && (
                        <span className="text-sm text-red-500">
                          {signupFormError.firstName}
                        </span>
                      )}
                      <label
                        htmlFor="lastName"
                        className="block text-sm text-gray-500 mt-2"
                      >
                        Last Name*
                      </label>
                      <Input
                        id="lastName"
                        type="text"
                        placeholder="Enter your last name"
                        className="block bg-white focus:border-indigo-700 outline-none mb-1"
                        style={{
                          border: signupFormError?.lastName
                            ? "1px solid red"
                            : "",
                        }}
                      />
                      {signupFormError?.lastName && (
                        <span className="text-sm text-red-500">
                          {signupFormError.lastName}
                        </span>
                      )}
                      <label
                        htmlFor="email-signup"
                        className="block text-sm text-gray-500 mt-2"
                      >
                        Email*
                      </label>
                      <Input
                        id="email-signup"
                        type="email"
                        placeholder="Enter your email"
                        className="block bg-white focus:border-indigo-700 outline-none mb-1"
                        style={{
                          border: signupFormError?.email ? "1px solid red" : "",
                        }}
                      />
                      {signupFormError?.email && (
                        <span className="text-sm text-red-500">
                          {signupFormError.email}
                        </span>
                      )}
                      <label
                        htmlFor="password-signup"
                        className="block text-sm text-gray-500 mt-2"
                      >
                        Password*
                      </label>
                      <Input
                        id="password-signup"
                        type="password"
                        placeholder="Create a password"
                        className="block bg-white focus:border-indigo-700 outline-none mb-1"
                        style={{
                          border: signupFormError?.password
                            ? "1px solid red"
                            : "",
                        }}
                      />
                      {signupFormError?.password && (
                        <span className="text-sm text-red-500">
                          {signupFormError.password}
                        </span>
                      )}
                      <Button
                        size="lg"
                        className="bg-indigo-700 hover:bg-indigo-700/90 w-full mt-4"
                      >
                        Sign Up
                      </Button>
                    </Form>
                  </CardContent>
                </div>
              </TabsContent>
            </Tabs>
          </Card>
        </div>
      </div>
    </>
  );
}
