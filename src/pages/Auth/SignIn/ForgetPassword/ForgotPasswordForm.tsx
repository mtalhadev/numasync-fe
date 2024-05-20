import React from 'react';
import { useNavigate } from 'react-router-dom';

// React Hook Form
import { Controller, SubmitHandler, useForm } from 'react-hook-form';

// Zod
import { zodResolver } from '@hookform/resolvers/zod';

// Components
import CustomButton from 'src/components/atoms/Button';
import InputField from 'src/components/atoms/InputField';
import SecoundaryButton from 'src/components/atoms/SecondaryButton';
import Text from 'src/components/atoms/Text';
import AuthLayout from 'src/components/layout/AuthLayout';

// Data
import { ERROR } from 'src/data/errors';
import { LABELS } from 'src/data/labels';

// Schema
import {
  ForgetPasswordSchemaType,
  forgetPasswordSchema,
} from 'src/schema/forgetPassword.schema';

// Types
import { LINKS } from 'src/data/links';
import { ForgetPasswordFormData } from 'types/form/forgetPassword';

interface IndexProps {
  currentStep?: number;
  onNext?: () => void;
  goToStep?: (_step: number) => void;
  setForgetEmail: (_email: string) => void;
}

const ForgotPasswordForm: React.FC<IndexProps> = ({ setForgetEmail }) => {
  const navigate = useNavigate();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<ForgetPasswordSchemaType>({
    resolver: zodResolver(forgetPasswordSchema),
    mode: 'onTouched',
  });

  const onSubmit: SubmitHandler<ForgetPasswordSchemaType> = (
    data: ForgetPasswordFormData
  ) => {
    setForgetEmail(data.email);
  };

  return (
    <AuthLayout key="forgetPasswordForm">
      <div className="mx-auto w-full">
        <Text
          containerTag="h3"
          className="text-text-xl text-center font-semibold text-foreground md:text-4xl"
        >
          {LABELS.forgetPassword}
        </Text>

        <Text
          containerTag="p"
          className="mt-3 text-center text-base text-default-500"
        >
          {LABELS.noWorriesWillSendYouRestInstruction}
        </Text>

        <form className="mt-8" onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="email"
            control={control}
            rules={{
              required: ERROR.emailisrequired,
            }}
            render={({ field }) => (
              <InputField
                label={LABELS.email}
                name="email"
                field={field}
                errors={errors}
              />
            )}
          />

          <CustomButton type="submit" fullWidth className="mb-6 mt-8">
            {LABELS.resetPassword}
          </CustomButton>

          <div className="flex items-center justify-center">
            <SecoundaryButton
              type="button"
              size="sm"
              onClick={() => navigate(LINKS.LOGIN)}
            >
              {LABELS.backToLogIn}
            </SecoundaryButton>
          </div>
        </form>
      </div>
    </AuthLayout>
  );
};

export default ForgotPasswordForm;
