import Input from "@/components/Input";
import { ReactElement } from "react";
import Button from "@/components/Button";
import CustomLink from "@/components/Link";
import { useLoginUserMutation } from "@/store/api/auth.api";
import { setToken, setUser } from "@/store/slice/auth.slice";
import { useAppDispatch } from "@/hooks/reduxHooks";
import { useState, FormEvent } from "react";
import GuestLayout from "@/components/GuestLayout";
import { NextPageWithLayout } from "../_app.page";

interface IFormValues {
  email: string;
  password: string;
}

const Login: NextPageWithLayout = () => {
  const dispatch = useAppDispatch();

  const [data, setData] = useState<IFormValues>({ email: "", password: "" });

  const [loginUser, { isLoading, isError }] = useLoginUserMutation();

  const handleLogin = async (e: FormEvent) => {
    try {
      e.preventDefault();
      const res = await loginUser(data).unwrap();
      const token = res.data.token;
      if (token) {
        sessionStorage.setItem("token", token);
        dispatch(setToken(token));
        dispatch(setUser({ first_name: "Damilare" }));
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleChange = (field: string, value: string) => {
    setData((prev) => ({ ...prev, [field]: value }));
  };
  return (
    <div className='m-auto w-1/3 text-center'>
      <img className='m-auto mt-20' src='/images/temple-icon.svg' alt='image' />

      <div className='mt-20'>
        <h4 className='text-4xl font-bold text-neutral'>Sign In</h4>
        <p className='text-base mt-5 inline-flex text-center'>
          Is this your first time here?{" "}
          <CustomLink href='/sign-up' className='text-primary'>
            Create an account instead
          </CustomLink>
        </p>
        <form className='mt-8' onSubmit={handleLogin}>
          <Input
            label='Email address'
            type='email'
            placeHolder='johndoe@xyz.com'
            required
            onChange={(e) => handleChange("email", e.target.value)}
          />
          <br />
          <Input
            label='Password'
            type='password'
            placeHolder='********'
            onChange={(e) => handleChange("password", e.target.value)}
            required
          />
          <div className='mt-8 flex justify-end align-middle'>
            <div className='w-1/2 flex justify-between items-center'>
              <CustomLink href='/' className='text-xs'>
                Forgot Password?
              </CustomLink>
              <Button type='submit' className='ml-4'>
                Sign In
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

Login.getLayout = function getLayout(page: ReactElement) {
  return <GuestLayout>{page}</GuestLayout>;
};

export default Login;
