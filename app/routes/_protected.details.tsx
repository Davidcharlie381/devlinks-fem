import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ActionFunction } from "@remix-run/node";
import { Form, useSubmit } from "@remix-run/react";
import { Camera } from "lucide-react";
import { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react";


export const loader = async () => {
  // const users = await prisma.user.findMany();
  //     console.log(users);
  return true;
}

export const action: ActionFunction = async ({request}) => {
  const formData =  await request.formData();
  const firstName = formData.get("firstName") as string;
  const lastName = formData.get("lastName") as string;
  const email = formData.get("email") as string;

  console.log({firstName, lastName, email,});

  return true;

}

export type FormFields = {
  firstName?: string | null;
  lastName?: string | null;
  email?: string | null;
  password?: string | null
};

export default function ProfileDetails() {
  const [formError, setFormError] = useState<FormFields | null>(null);
  const [imageUrl, setImageUrl] = useState("/def-pfp.jpeg");

  const fileInputRef = useRef<HTMLInputElement>(null);
  const submit = useSubmit();

  useEffect(() => {
    const fetchUsers = async () => {
      
    }
    fetchUsers();
  }, [])

  useEffect(() => {
    if (formError) {
      console.log(formError);
    }
  }, [formError]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const firstName = formData.get("firstName") as string;
    const lastName = formData.get("lastName") as string;
    const email = formData.get("email") as string;

    const errors: FormFields = {
      firstName: null,
      lastName: null,
      email: null,
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
    }
  
    if (errors.firstName || errors.lastName || errors.email) {
      return setFormError((prev) => ({
        ...prev,
        firstName: errors.firstName,
        lastName: errors.lastName,
        email: errors.email,
      }));
    }

    setFormError(null);

    submit(event.currentTarget);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const image = event.target.files?.[0];
    if (image) {
      setImageUrl(URL.createObjectURL(image));
    }
  };

  return (
    <div className="relative">
      <div className="bg-white h-9 sticky top-0 z-10 w-full" />
      <div className="pt-1 px-6">
        <h1 className="font-bold text-3xl">Profile Details</h1>
        <p className="text-sm text-gray-500 mt-2 mb-8">
          Add your details to create a personal touch to your profile.
        </p>
        <div className="bg-gray-100 rounded-xl p-4 pb-6 mb-8 md:grid grid-cols-7 items-center space-y-2">
          <p className="col-span-3 text-sm text-gray-500">Profile picture</p>
          <Button
            onClick={() => fileInputRef.current?.click()}
            className="h-36 w-36 p-0 group relative hover:bg-transparent overflow-hidden bg-transparent rounded-xl col-span-2"
          >
            <img src={imageUrl} className="w-full h-full" />
            <div className="absolute bg-opacity-0 group-hover:bg-opacity-50 inset-0 bg-black grid duration-300 transition-all place-content-center place-items-center">
              <Camera className="opacity-0 group-hover:opacity-100" />
              <span className="opacity-0 group-hover:opacity-100">
                Click to Upload
              </span>
            </div>
          </Button>
          <input
            onChange={handleChange}
            type="file"
            name=""
            ref={fileInputRef}
            className="hidden"
            id=""
          />
          <p className="col-span-2 text-sm text-gray-500">
            *Image must be below 1024x1024px. Use PNG, JPG or BMP format.
          </p>
        </div>
        <Form onSubmit={handleSubmit} method="POST">
          <div className="bg-gray-100 rounded-xl p-4 pb-6 mb-8 md:grid grid-cols-7 items-center space-y-2">
            <label
              htmlFor="firstName"
              className="md:col-span-3 block text-sm text-gray-500"
            >
              First name*
            </label>
            <div className="md:col-span-4 ">
              <Input
                id="firstName"
                name="firstName"
                className="block bg-white focus:border-indigo-700 outline-none"
                placeholder="John Doe"
                style={{
                  border: formError?.firstName ? "1px solid red" : "",
                }}
              />
              {formError?.firstName && (
                <span className="text-sm text-red-500">
                  {formError.firstName}
                </span>
              )}
            </div>

            <label
              htmlFor="lastName"
              className="md:col-span-3 block text-sm text-gray-500"
            >
              Last name*
            </label>
            <div className="md:col-span-4 ">
              <Input
                id="lastName"
                name="lastName"
                className="md:col-span-4 block bg-white focus:border-indigo-700 outline-none"
                placeholder="John Doe"
                style={{
                  border: formError?.lastName ? "1px solid red" : "",
                }}
              />
              {formError?.lastName && (
                <span className="text-sm text-red-500">
                  {formError.lastName}
                </span>
              )}
            </div>

            <label
              htmlFor="email"
              className="md:col-span-3 block text-sm text-gray-500"
            >
              Email
            </label>
            <div className="md:col-span-4 ">
              <Input
                id="email"
                name="email"
                type="email"
                className="md:col-span-4 block bg-white focus:border-indigo-700 outline-none"
                placeholder="John Doe"
                style={{
                  border: formError?.email ? "1px solid red" : "",
                }}
              />
              {formError?.email && (
                <span className="text-sm text-red-500">{formError.email}</span>
              )}
            </div>
          </div>
          <div className="bg-white flex items-center justify-end h-20 sticky bottom-0 w-full">
            <Button size="lg" className="bg-indigo-700 hover:bg-indigo-700/90">
              Save
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}
