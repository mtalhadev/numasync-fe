import { FC, useCallback } from 'react';
import { ChildSidePanelsProps } from 'src/types/childSidePanelTypes';
import SidePanel from '../SidePanel';
import { useTranslation } from 'react-i18next';
import Text from 'src/components/atoms/Text';
import FileUploader from 'src/components/molecules/FileUploader';
import { UPLOADFILETYPES } from 'src/utils/enums';

interface ImportCSVSidePanelProps extends ChildSidePanelsProps {}

const ImportCSVSidePanel: FC<ImportCSVSidePanelProps> = ({ isOpen, setIsOpen }) => {
  const { t } = useTranslation();

  const onDrop = useCallback((acceptedFiles: File[]) => {
    console.log(acceptedFiles);
    // Do something with the files
  }, []);

  return (
    <SidePanel
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      title={t('import')}
      primaryButtonClick={() => {}}
      primaryButtonText={t('import')}
    >
      <>
        <FileUploader onDrop={onDrop} uploadFileType={UPLOADFILETYPES.CSV} />

        <Text containerTag="p" className="mt-5 text-base font-semibold text-foreground">
          {t('importEntitiesUsingTheFollowingFormat')}
        </Text>
        <Text containerTag="p" className="mt-1 cursor-pointer text-sm font-medium text-primary underline">
          {t('downloadCSVSample')}
        </Text>
      </>
    </SidePanel>
  );
};

export default ImportCSVSidePanel;
