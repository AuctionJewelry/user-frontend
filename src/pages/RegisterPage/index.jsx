import {
  Button,
  DatePicker,
  Flex,
  Form,
  Input,
  InputNumber,
  Typography,
} from 'antd';
import { Link } from 'react-router-dom';
const { Title } = Typography;

export const Register = () => {
  const disabledDate = (current) => {
    return current && current > new Date();
  };
  const handleSubmit = (values) => {
    console.log(values);
  };
  return (
    <Flex vertical className='overflow-hidden'>
      <Flex
        className='w-full z-10 bg-white py-5 lg:px-[100px] px-10 gap-5'
        justify='left'
        align='center'
      >
        <Title style={{ marginBottom: '0' }} className='font-serif ' level={3}>
          <Link className='!text-black' to={'/'}>
            JEWELRY AUCTION
          </Link>
        </Title>
        <Title
          style={{ marginBottom: '0' }}
          className='font-serif !my-auto'
          level={3}
        >
          Sign up
        </Title>
      </Flex>
      <div className='w-[100vw] h-[91dvh] lg:py-5 flex justify-center items-center relative'>
        <img
          src='https://i.pinimg.com/originals/ff/9c/20/ff9c204f62b65141a988cde3c7b1484f.jpg'
          className='absolute top-0 left-0 z-1 w-full h-screen'
        />
        <Flex className='bg-white relative w-full lg:w-fit'>
          <img
            className='hidden lg:block'
            src='https://sahirajewelrydesign.com/cdn/shop/products/tara-clover-necklace-sahira-jewelry-design-290449_grande.jpg?v=1648775322'
          />
          <Flex
            gap={20}
            vertical
            className='relative bg-white rounded lg:w-full lg:px-5 lg:py-4 px-2 w-full'
          >
            <Title level={3} className='!my-5 !font-serif'>
              Sign up your account
            </Title>
            <Form
              initialValues={{
                remember: true,
              }}
              autoComplete='off'
              layout='vertical'
              className='!font-sans'
              labelCol={{
                span: 24,
              }}
              onFinish={handleSubmit}
            >
              <div className='lg:grid lg:grid-cols-2 lg:gap-5'>
                {/* Full name */}
                <Form.Item
                  label='Fullname'
                  name='fullname'
                  rules={[
                    {
                      required: true,
                      message: 'Please input your username!',
                    },
                  ]}
                  className='!m-0'
                >
                  <Input className='rounded-none border-0 border-b-[1px] border-black focus:border-b-[1px] focus:border-b-black' />
                </Form.Item>
                {/* Email */}
                <Form.Item
                  label='Email'
                  name='email'
                  rules={[
                    {
                      required: true,
                      message: 'Please input your password!',
                    },
                  ]}
                  className='!m-0'
                >
                  <Input
                    type='email'
                    className='rounded-none border-0 border-b-[1px] border-black focus:border-b-[1px] focus:border-b-black'
                  />
                </Form.Item>
                {/* Phone number */}
                <Form.Item
                  label='Phone number'
                  name='phone'
                  rules={[
                    {
                      required: true,
                      message: 'Please input your password!',
                    },
                  ]}
                  className='!m-0'
                >
                  <InputNumber
                    controls={false}
                    type='number'
                    min={0}
                    className='rounded-none w-full border-0 border-b-[1px] border-black focus:border-b-[1px] focus:border-b-black'
                  />
                </Form.Item>
                {/* Date of birth */}
                <Form.Item
                  label='Date of birth'
                  name='dob'
                  rules={[
                    {
                      required: true,
                      message: 'Please input your Date of birth!',
                    },
                  ]}
                  className='!m-0'
                >
                  <DatePicker
                    format={'DD/MM/YYYY'}
                    disabledDate={disabledDate}
                  />
                </Form.Item>
                {/* Address */}
                <Form.Item
                  label='Address'
                  name='address'
                  rules={[
                    {
                      required: true,
                      message: 'Please input your password!',
                    },
                  ]}
                  className='!m-0 col-span-2'
                >
                  <Input
                    type='text'
                    className='rounded-none border-0 border-b-[1px] border-black focus:border-b-[1px] focus:border-b-black'
                  />
                </Form.Item>
                {/* Password */}
                <Form.Item
                  label='Password'
                  name='password'
                  rules={[
                    {
                      required: true,
                      message: 'Please input your username!',
                    },
                  ]}
                  className='!m-0'
                >
                  <Input.Password className='rounded-none border-0 border-b-[1px] border-black focus:border-b-[1px] focus:border-b-black' />
                </Form.Item>
                {/* Cnfirmed Password */}
                <Form.Item
                  name='confirm'
                  label='Confirm Password'
                  dependencies={['password']}
                  hasFeedback
                  rules={[
                    {
                      required: true,
                      message: 'Please confirm your password!',
                    },
                    ({ getFieldValue }) => ({
                      validator(_, value) {
                        if (!value || getFieldValue('password') === value) {
                          return Promise.resolve();
                        }
                        return Promise.reject(
                          new Error(
                            'The new password that you entered do not match!'
                          )
                        );
                      },
                    }),
                  ]}
                >
                  <Input.Password className='rounded-none border-0 border-b-[1px] border-black focus:border-b-[1px] focus:border-b-black' />
                </Form.Item>
              </div>

              {/* Submit */}
              <Form.Item className='w-full !m-0'>
                <Button
                  className='w-full bg-[#946257] font-serif hover:!bg-[#946257] hover:!shadow-none'
                  type='primary'
                  htmlType='submit'
                >
                  Sign up
                </Button>
              </Form.Item>
            </Form>
            <Link to={'/login'} className='text-center'>
              I already have account
            </Link>
          </Flex>
        </Flex>
      </div>
    </Flex>
  );
};