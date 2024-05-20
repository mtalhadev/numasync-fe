import { DocumentUpload } from 'iconsax-react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import CustomButton from 'src/components/atoms/Button';
import SearchBar from 'src/components/atoms/SearchBar';
import Text from 'src/components/atoms/Text';
import CustomTable from 'src/components/molecules/Table';
import UploadDocumentSidePanel from 'src/components/organisms/UploadDocumentSidePanel';
import { DocumentsTableColumns, DocumentsTableRows } from 'src/data/dummyData';
import { dropDownMenus } from 'src/types/dropDownTypes';
import { cn } from 'src/utils/cn';
import {
  pagesSubTitleFontClasses,
  pagesTitleFontClasses,
} from 'src/utils/constants';

const Documents = () => {
  const { t } = useTranslation();
  const [isUploadDocumentPanelOpen, setIsUploadDocumentPanelOpen] =
    useState<boolean>(false);

  const ActionMenu: dropDownMenus[] = [
    {
      title: t('view'),
      key: t('view'),
      onClick: () => {},
    },
    {
      title: t('rollback'),
      key: t('rollback'),
      onClick: () => {},
    },
    {
      title: t('cancel'),
      key: t('cancel'),
      color: 'danger',
      onClick: () => {},
    },
  ];

  return (
    <div>
      <div className="mb-8 flex items-center justify-between">
        <div>
          <Text containerTag="h1" className={cn(pagesTitleFontClasses)}>
            {t('documents')}
          </Text>

          <Text containerTag="h4" className={cn(pagesSubTitleFontClasses)}>
            {t('manageAndTrackYourDocumentsHere')}
          </Text>
        </div>

        <div className="flex gap-3">
          <CustomButton
            leadingIcon={<DocumentUpload size="22" />}
            className="text-sm"
            onClick={() => setIsUploadDocumentPanelOpen(true)}
          >
            {t('uploadDocument')}
          </CustomButton>
        </div>
      </div>

      <SearchBar classNames={{ inputWrapper: 'w-72' }} />

      <div className="my-5">
        <CustomTable
          columns={DocumentsTableColumns}
          rows={DocumentsTableRows}
          selectionMode="multiple"
          customActionMenu={ActionMenu}
        />
      </div>

      {/* Side Panels */}
      <UploadDocumentSidePanel
        isOpen={isUploadDocumentPanelOpen}
        setIsOpen={setIsUploadDocumentPanelOpen}
      />
    </div>
  );
};

export default Documents;
