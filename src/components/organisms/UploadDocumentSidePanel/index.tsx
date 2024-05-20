import { FC, useCallback, useState } from 'react';
import { ChildSidePanelsProps } from 'src/types/childSidePanelTypes';
import SidePanel from '../SidePanel';
import { useTranslation } from 'react-i18next';
import FileUploader from 'src/components/molecules/FileUploader';
import { Controller, useForm } from 'react-hook-form';
import InputField from 'src/components/atoms/InputField';
import { zodResolver } from '@hookform/resolvers/zod/src/zod';
import { UploadDocument } from 'src/schema/uploadDocument.schema';
import SelectInput from 'src/components/atoms/Select';
import {
  DummyEntitiesSuggestions,
  DummySelectOptions,
} from 'src/data/dummyData';
import Divider from 'src/components/atoms/Divider';
import { UPLOADFILETYPES } from 'src/utils/enums';
import { SuggestionListItem } from 'src/types/inputTypes';

interface ImportCSVSidePanelProps extends ChildSidePanelsProps {}

const UploadDocumentSidePanel: FC<ImportCSVSidePanelProps> = ({
  isOpen,
  setIsOpen,
}) => {
  const { t } = useTranslation();
  const [showSuggestions, setShowSuggestions] = useState(true);
  const {
    control,
    formState: { errors },
    setValue,
  } = useForm<UploadDocument>({ resolver: zodResolver(UploadDocument) });

  const onDrop = useCallback((acceptedFiles: File[]) => {
    console.log(acceptedFiles);
    // Do something with the files
  }, []);

  const setSelectedEntity = (entity: SuggestionListItem) => {
    setValue('entity', entity.name);
    setShowSuggestions(false);
  };

  return (
    <SidePanel
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      title={t('uploadDocument')}
      primaryButtonClick={() => {}}
      primaryButtonText={t('submit')}
    >
      <div className="flex flex-col gap-4">
        <Controller
          name="entity"
          control={control}
          render={({ field }) => (
            <InputField
              type="text"
              label={t('entity')}
              name="entity"
              field={field}
              errors={errors}
              selectedSuggestionVariant="single"
              suggestionsList={DummyEntitiesSuggestions}
              setSelectedSuggestion={setSelectedEntity}
              showSuggestions={showSuggestions}
              setShowSuggestions={setShowSuggestions}
            />
          )}
        />

        <Controller
          name="chartOfAccounts"
          control={control}
          render={({ field }) => (
            <SelectInput
              options={DummySelectOptions}
              label={t('chartOfAccountsLedgerNames')}
              field={field}
            />
          )}
        />

        <Divider />

        <FileUploader onDrop={onDrop} uploadFileType={UPLOADFILETYPES.CSV} />
      </div>
    </SidePanel>
  );
};

export default UploadDocumentSidePanel;
