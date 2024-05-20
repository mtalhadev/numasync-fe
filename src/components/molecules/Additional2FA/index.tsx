import React, { useState } from 'react';

// Assets
import { GoogleAuth, TestMsg } from 'assets/images';

// Components
import CustomButton from 'src/components/atoms/Button';
import Text from 'src/components/atoms/Text';
import AuthFormScroll from 'src/components/layout/AuthLayout/AuthFormScroll';

// Data
import { LABELS } from 'src/data/labels';

interface IndexProps {
  onNext: () => void;
}

const Additional2FA: React.FC<IndexProps> = ({ onNext }) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleSelection = (option: string) => {
    setSelectedOption(option);
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (selectedOption && selectedOption != '') {
      onNext();
    }
  };

  return (
    <AuthFormScroll>
      <div className="mb-8 text-center">
        <Text containerTag="h5" className="text-2xl font-semibold text-foreground md:text-4xl">
          {LABELS.additionalFA}
        </Text>
        <Text containerTag="p" className="text-base text-default-500 mt-3">
          {LABELS.inOrderToProtectYourAccount}
        </Text>
        <Text containerTag="p" className="text-base text-default-500 mt-4">
          {LABELS.ifYouWishToEnrollInAdditional}
        </Text>
      </div>
      <form className="mt-11">
        <button
          type="button"
          onClick={() => handleSelection('GoogleAuthenticator')}
          className={`flex gap-2 rounded-[14px] text-left border-2 ${selectedOption === 'GoogleAuthenticator' ? ' border-primary shadow-md' : 'border-[#F1F1F2]'} cursor-pointer bg-white p-4`}
        >
          <div className="flex size-12 flex-shrink-0 items-center justify-center rounded-lg bg-default-100">
            <img src={GoogleAuth} alt="google-auth" width={32} height={32} />
          </div>
          <div>
            <Text containerTag="h2" className="text-sm font-semibold text-foreground">
              {LABELS.googleAuthenticator}
            </Text>
            <Text containerTag="p" className="text-xs text-default-500 mt-0.5">
              {LABELS.enhanceSecurityWithTimeSensitive}
            </Text>
          </div>
        </button>
        <button
          type="button"
          onClick={() => handleSelection('TextMessages')}
          className={`flex gap-2 rounded-[14px] text-left border-2 ${selectedOption === 'TextMessages' ? 'border-primary shadow-md' : 'border-[#F1F1F2]'} mt-5 cursor-pointer bg-white p-4`}
        >
          <div className="flex size-12 flex-shrink-0 items-center justify-center rounded-lg bg-default-100">
            <img src={TestMsg} alt="google-auth" width={32} height={32} />
          </div>
          <div>
            <Text containerTag="h2" className="text-sm font-semibold text-foreground">
              {LABELS.textMessages}
            </Text>

            <Text containerTag="p" className="text-xs text-default-500 mt-0.5">
              {LABELS.optForSMS2FA}
            </Text>
          </div>
        </button>
        <CustomButton
          size="lg"
          className="mt-8"
          type="submit"
          onClick={handleSubmit}
          fullWidth={true}
          disabled={selectedOption === null}
        >
          {LABELS.next}
        </CustomButton>
      </form>

      <button
        type="button"
        className="text-sm font-medium text-primary mx-auto block underline underline-offset-4 mt-6"
        onClick={onNext}
      >
        {LABELS.skipForNow}
      </button>
    </AuthFormScroll>
  );
};

export default Additional2FA;
