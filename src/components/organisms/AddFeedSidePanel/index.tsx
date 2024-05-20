import { FC, useCallback, useMemo, useState } from 'react';

// i18n
import { useTranslation } from 'react-i18next';

// Types
import { RadioItemType } from 'src/types/radioGroupTypes';
import { ChildSidePanelsProps } from 'src/types/childSidePanelTypes';

// Utils
import { BANKACCOUNTTYPE } from 'src/utils/enums';
import { FeedDropdownOptions } from 'src/utils/constants';

//  React Hook Form
import { Controller, useForm } from 'react-hook-form';

// zod
import { zodResolver } from '@hookform/resolvers/zod/src/zod.js';

// Schema
import { AddNewFeed } from 'src/schema/addNewFeed.schema';

// Components
import SidePanel from '../SidePanel';
import InputField from 'src/components/atoms/InputField';
import CustomButton from 'src/components/atoms/Button';
import SelectInput from 'src/components/atoms/Select';
import Text from 'src/components/atoms/Text';
import Divider from 'src/components/atoms/Divider';
import CustomRadioGroup from 'src/components/atoms/Radio';

// Icons
import { ArrowLeft, Link1 } from 'iconsax-react';
import { ExistingBankAccounts } from 'src/data/dummyData';
import { BankAccountTypes } from 'src/types/commonTypes';
import { cn } from 'src/utils/cn';

interface AddFeedSidePanelProps extends ChildSidePanelsProps {}

const AddFeedSidePanel: FC<AddFeedSidePanelProps> = ({ isOpen, setIsOpen }) => {
  const { t } = useTranslation();
  const [selectedAccountOption, setSelectedAccountOption] = useState<string>(
    BANKACCOUNTTYPE.EXISTING
  );
  const [connectBank, setConnectBank] = useState<boolean>(false);
  const [selectedAccount, setSelectedAccount] =
    useState<BankAccountTypes | null>();

  const {
    control,
    watch,
    formState: { errors },
  } = useForm({ resolver: zodResolver(AddNewFeed) });

  const RadioGroupOptions: RadioItemType[] = useMemo(
    () => [
      {
        value: BANKACCOUNTTYPE.EXISTING,
        title: t('existingAccount'),
        description: t('selectAnExistingBankAccountFromYourChartOfAccounts'),
      },
      {
        value: BANKACCOUNTTYPE.NEW,
        title: t('newAccount'),
        description: t('createANewBankInChartOfAccounts'),
      },
    ],
    [t]
  );

  const onSubmit = useCallback(() => {
    setConnectBank(true);
  }, []);

  const handleAccountSelection = useCallback(
    (bankAccount: BankAccountTypes) => {
      setSelectedAccount(prev => {
        if (prev?.accountNumber === bankAccount.accountNumber) {
          return null;
        } else {
          return bankAccount;
        }
      });
    },
    []
  );

  return (
    <SidePanel
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      title={!connectBank ? t('addNewFeed') : t('connectBankToFeed')}
      primaryButtonClick={onSubmit}
      primaryButtonText={t('save')}
    >
      {!connectBank ? (
        <>
          <Text
            containerTag="p"
            className="mb-3 text-sm font-semibold text-foreground"
          >
            {t('whatKindOfFeedWillThisBe')}
          </Text>
          <Controller
            name="feedType"
            control={control}
            render={({ field }) => (
              <SelectInput
                label={t('selectFeedType')}
                options={FeedDropdownOptions}
                variant="bordered"
                field={field}
                errors={errors}
              />
            )}
          />

          <Divider className="my-6" />

          {watch('feedType') && (
            <>
              <Text
                containerTag="p"
                className="mb-3 text-sm font-semibold text-foreground"
              >
                {t('whatAccountWillTheTransactionsFromThisBankBeImportingTo')}
              </Text>

              <CustomRadioGroup
                options={RadioGroupOptions}
                selected={selectedAccountOption}
                setSelected={setSelectedAccountOption}
              />
            </>
          )}

          {selectedAccountOption === BANKACCOUNTTYPE.NEW ? (
            <div className="my-5 flex flex-col gap-5">
              <Controller
                name="accountCode"
                control={control}
                render={({ field }) => (
                  <InputField
                    type="text"
                    placeholder={t('accountCode')}
                    name="accountCode"
                    field={field}
                    errors={errors}
                  />
                )}
              />
              <Controller
                name="accountName"
                control={control}
                render={({ field }) => (
                  <InputField
                    type="text"
                    name="accountName"
                    placeholder={`${t('accountName')} ${t('egBankOfAmeria')}`}
                    field={field}
                    errors={errors}
                  />
                )}
              />
            </div>
          ) : selectedAccountOption === BANKACCOUNTTYPE.EXISTING &&
            watch('feedType') ? (
            <div className="mt-4 flex cursor-pointer flex-col gap-2">
              {ExistingBankAccounts.map(bank => (
                <div
                  key={bank.bankName}
                  className={cn(
                    'flex items-center justify-between rounded-xl border border-default-200 bg-default-50 px-4 py-3',
                    selectedAccount?.accountNumber === bank.accountNumber &&
                      'border-primary-500'
                  )}
                  onClick={() => handleAccountSelection(bank)}
                >
                  <div className="flex flex-col justify-center gap-1">
                    <Text
                      containerTag="h6"
                      className="text-sm font-semibold text-foreground"
                    >
                      {t('bank')}
                    </Text>
                    <Text containerTag="p" className="text-xs text-default-400">
                      {t(`${bank.bankName}`)}
                    </Text>
                  </div>
                  <div className="flex flex-col justify-center gap-1">
                    <Text
                      containerTag="h6"
                      className="text-sm font-semibold text-foreground"
                    >
                      {t('accountNo')}
                    </Text>
                    <Text containerTag="p" className="text-xs text-default-400">
                      {bank.accountNumber}
                    </Text>
                  </div>
                  <div className="flex flex-col justify-center gap-1">
                    <Text
                      containerTag="h6"
                      className="text-sm font-semibold text-foreground"
                    >
                      {t('routingNo')}
                    </Text>
                    <Text containerTag="p" className="text-xs text-default-400">
                      {bank.routingNumber}
                    </Text>
                  </div>
                </div>
              ))}
            </div>
          ) : null}
        </>
      ) : (
        <>
          <div className="flex items-center gap-2">
            <ArrowLeft
              size={18}
              className="cursor-pointer"
              onClick={() => setConnectBank(false)}
            />
            <Text
              containerTag="p"
              className="text-sm font-semibold text-foreground"
            >
              {t('bankConnection')}
            </Text>
          </div>

          <CustomButton
            className="mt-3"
            leadingIcon={
              <Link1 size="24" className="text-primary-foreground" />
            }
          >
            {t('connectBankAccount')}
          </CustomButton>
        </>
      )}
    </SidePanel>
  );
};

export default AddFeedSidePanel;
