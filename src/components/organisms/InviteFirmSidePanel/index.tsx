import { FC, useState } from 'react';
import SidePanel from '../SidePanel';
import InputField from 'src/components/atoms/InputField';
import CustomButton from 'src/components/atoms/Button';
import Text from 'src/components/atoms/Text';
import Divider from 'src/components/atoms/Divider';
import { useTranslation } from 'react-i18next';
import { ChildSidePanelsProps } from 'src/types/childSidePanelTypes';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod/src/zod.js';
import { InviteFirm } from 'src/schema/inviteFirm.schema';
import { DummyEmails } from 'src/data/dummyData';
import { SuggestionListItem } from 'src/types/inputTypes';

interface InviteFirmSidePanelProps extends ChildSidePanelsProps {}

const InviteFirmSidePanel: FC<InviteFirmSidePanelProps> = ({
  isOpen,
  setIsOpen,
}) => {
  const { t } = useTranslation();
  const [selectedSuggestions, setSelectedSuggestions] = useState<
    SuggestionListItem[]
  >([]);

  // TODO: Later on change the below state type according to the data
  const [selectedEmails, setSelectedEmails] = useState<SuggestionListItem[]>(
    []
  );

  const {
    control,
    formState: { errors },
  } = useForm<InviteFirm>({ resolver: zodResolver(InviteFirm) });

  return (
    <SidePanel
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      title={t('inviteAccountingFirm')}
      primaryButtonClick={() => {}}
      primaryButtonText={t('saveAndSendInvite')}
    >
      <>
        <div className="flex items-center gap-2">
          <div className="basis-[90%]">
            <Controller
              control={control}
              name="email"
              render={({ field }) => (
                <InputField
                  type="text"
                  placeholder={t('emailsCommaSeparated')}
                  variant="bordered"
                  color="primary"
                  field={field}
                  errors={errors}
                  suggestionsList={DummyEmails}
                  selectedSuggestions={selectedSuggestions}
                  setSelectedSuggestions={setSelectedSuggestions}
                />
              )}
            />
          </div>
          <div className="basis-[10%]">
            <CustomButton
              className="w-full p-0"
              onClick={() => {
                setSelectedEmails(selectedSuggestions);
                setSelectedSuggestions([]);
              }}
            >
              Add
            </CustomButton>
          </div>
        </div>

        <div className="mt-5 flex flex-col">
          {selectedEmails.map(item => (
            <>
              <div
                key={`key - ${item.value}`}
                className="flex items-center justify-between"
              >
                <Text containerTag="p" className="text-sm text-default-500">
                  {item.name}
                </Text>
                <CustomButton
                  color="danger"
                  size="sm"
                  variant="light"
                  onClick={() =>
                    setSelectedEmails(prev =>
                      prev.filter(em => em.value !== item.value)
                    )
                  }
                >
                  Remove
                </CustomButton>
              </div>
              <Divider className="my-4" />
            </>
          ))}
        </div>
      </>
    </SidePanel>
  );
};

export default InviteFirmSidePanel;
