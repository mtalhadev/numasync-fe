import React, { ReactNode } from 'react';

// Next UI
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from '@nextui-org/react';

// Components
import CustomButton from '../Button';

// i18n
import { useTranslation } from 'react-i18next';

interface PopUpModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit?: () => void;
  title?: string;
  buttonLabel?: string;
  submitButtonColor?:
    | 'primary'
    | 'default'
    | 'secondary'
    | 'success'
    | 'warning'
    | 'danger'
    | undefined;
  children: ReactNode;
}

const PopUpModal: React.FC<PopUpModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  title,
  buttonLabel,
  submitButtonColor,
  children,
}) => {
  const { t } = useTranslation();

  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onClose}
      size="lg"
      motionProps={{
        initial: { opacity: 0, scale: 0.3 },
        animate: { opacity: 1, scale: 1 },
        exit: { opacity: 0, scale: 0.3 },
        transition: { duration: 0.1, ease: 'easeOut' },
      }}
    >
      <ModalContent>
        {onClose => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              {title || 'Model'}
            </ModalHeader>
            <ModalBody>{children}</ModalBody>
            <ModalFooter>
              <CustomButton
                variant="light"
                className="text-foreground"
                onClick={onClose}
              >
                {t('close')}
              </CustomButton>
              <CustomButton onClick={onSubmit} color={submitButtonColor}>
                {buttonLabel || t('confirm')}
              </CustomButton>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default PopUpModal;
