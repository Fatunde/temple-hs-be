import Input from "@/components/Input";
import Button from "@/components/Button";
import CustomLink from "@/components/Link";
import { useRegisterUserMutation } from "@/store/api/auth.api";
import { setToken, setUser } from "@/store/slice/auth.slice";
import { useAppDispatch } from "@/hooks/reduxHooks";
import { useState } from "react";

interface IFormValues {
  email: string;
  password: string;
  first_name: string;
  last_name: string;
  age: string;
}
const Register = () => {
  const dispatch = useAppDispatch();
  const [data, setData] = useState<IFormValues>({
    email: "",
    password: "",
    first_name: "",
    last_name: "",
    age: "",
  });

  const [registerUser, { isLoading, isError }] = useRegisterUserMutation();

  /*const handleLogin = async (values: IFormValues) => {
    try {
      const res = await registerUser(values).unwrap();
      console.log(res);

        sessionStorage.setItem();
        dispatch(setUser(res.data));
       dispatch(setToken(encryptedToken));
    } catch (error) {
      console.log(error);
    }
  };*/

  const handleChange = (field: string, value: string) => {
    setData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className='m-auto w-1/3 text-center'>
      <img className='m-auto mt-20' src='/images/temple-icon.svg' alt='image' />

      <div className='mt-20'>
        <h4 className='text-4xl font-bold text-neutral'>Create an account</h4>
        <p className='text-base mt-5 inline-flex text-center'>
          You are a couple of clicks away from the best access to medical care
        </p>
        <form className='mt-8'>
          <Input
            label='Email address'
            type='email'
            placeHolder='johndoe@xyz.com'
            onChange={(e) => handleChange("email", e.target.value)}
            required
          />
          <br />
          <Input label='Date of birth' type='date' required />
          <br />
          <Input
            label='Password'
            type='password'
            placeHolder='********'
            required
            onChange={(e) => handleChange("date_of_birth", "password")}
          />
          <div className='mt-8 flex justify-end align-middle'>
            <Button type='submit' className='ml-4'>
              Create Account
            </Button>
          </div>
          <div className='w-1/2 m-auto text-center mt-16'>
            <hr />
            <div className='flex justify-center items-center '>
              <p className='text-xs'>Already a member?</p>
              <CustomLink href='/login' className='text-xs text-primary'>
                Sign in
              </CustomLink>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
