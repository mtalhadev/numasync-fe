import { DocumentDownload, DocumentUpload } from 'iconsax-react';
import { FC } from 'react';
import { useDropzone } from 'react-dropzone';
import { useTranslation } from 'react-i18next';
import Text from 'src/components/atoms/Text';
import { UPLOADFILETYPES } from 'src/utils/enums';

interface FileUploaderProps {
  onDrop: (_acceptedFiles: File[]) => void;
  uploadFileType: UPLOADFILETYPES;
}

const FileUploader: FC<FileUploaderProps> = ({ onDrop, uploadFileType }) => {
  const { t } = useTranslation();

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept:
      uploadFileType === UPLOADFILETYPES.CSV
        ? {
            'text/csv': ['.csv'],
          }
        : uploadFileType === UPLOADFILETYPES.IMAGE
          ? {
              'image/png': ['.png', '.jpg', '.jpeg'],
            }
          : {},
  });

  return (
    <div {...getRootProps()} className="cursor-pointer">
      <input
        // {...getInputProps({ accept: '.csv', type: 'file' })}
        {...getInputProps()}
        type={'file'}
        id={'csvFileInput'}
        // accept={'.csv'}
      />
      <div className="flex flex-col items-center justify-center gap-3 rounded-xl border border-default-200 p-4">
        {isDragActive ? (
          <>
            <div className="animate-bounce rounded-lg border border-default-100 p-2">
              <DocumentDownload size="20" className="text-default-500" />
            </div>
            <Text containerTag="p" className="text-sm text-default-500">
              <span className="font-semibold text-primary">{t('dropHere')}</span>
            </Text>
          </>
        ) : (
          <>
            <div className="rounded-lg border border-default-100 p-2">
              <DocumentUpload size="20" className="text-default-500" />
            </div>
            <Text containerTag="p" className="text-sm text-default-500">
              <span className="font-semibold text-primary">{t('clickToUpload')}</span> {t('orDragAndDrop')}
            </Text>
          </>
        )}
        <Text containerTag="p" className="text-xs text-default-500">
          {t(uploadFileType === UPLOADFILETYPES.CSV ? 'csvMax2MB' : 'imageShouldNotExceed2MB')}
        </Text>
      </div>
    </div>
  );
};

export default FileUploader;
