// Hooks
import { useState } from 'react';

// i18n
import { useTranslation } from 'react-i18next';

// Components
import Text from 'src/components/atoms/Text';
import CustomButton from 'src/components/atoms/Button';
import Divider from 'src/components/atoms/Divider';
import CustomTable from 'src/components/molecules/Table';
import SavedMode from './SavedMode';

// Dummy Data
import {
  BillingInvoicesTableColum,
  BillingInvoicesTableRows,
} from 'src/data/dummyData';
import EditMode from './EditMode';
import { PlanTypes } from 'src/types/commonTypes';

const Billing = () => {
  const { t } = useTranslation();
  const [isEditMode, setIsEditMode] = useState<boolean>(false);
  const [selectedPlan, setSelectedPlan] = useState<PlanTypes>();
  const [selectedAddOn, setSelectedAddOn] = useState<PlanTypes>();

  return (
    <>
      <div className="mb-5 mt-8 flex items-center justify-between">
        <div>
          <Text
            containerTag="h1"
            className="mb-1 text-lg font-semibold leading-8 text-foreground"
          >
            {t('plans')}
          </Text>

          <Text
            containerTag="h4"
            className="text-sm font-normal text-default-500"
          >
            {t('updateOrPickPlanThatWorksBestForYou')}
          </Text>
        </div>

        {isEditMode ? (
          <div className="flex gap-3">
            <CustomButton
              className="text-sm"
              variant="bordered"
              onClick={() => setIsEditMode(false)}
            >
              {t('cancel')}
            </CustomButton>
            <CustomButton
              className="text-sm"
              onClick={() => setIsEditMode(false)}
            >
              {t('update')}
            </CustomButton>
          </div>
        ) : (
          <CustomButton className="text-sm" onClick={() => setIsEditMode(true)}>
            {t('edit')}
          </CustomButton>
        )}
      </div>

      <Divider className="mb-6 mt-5" />

      {isEditMode ? (
        <EditMode
          selectedPlan={selectedPlan}
          setSelectedPlan={setSelectedPlan}
          selectedAddOn={selectedAddOn}
          setSelectedAddOn={setSelectedAddOn}
        />
      ) : (
        <SavedMode selectedPlan={selectedPlan} />
      )}

      <Divider className="my-8" />

      <div>
        <Text
          containerTag="h1"
          className="mb-1 text-lg font-semibold leading-8 text-foreground"
        >
          {t('invoices')}
        </Text>

        <Text
          containerTag="h4"
          className="text-sm font-normal text-default-500"
        >
          {t('trackAndManageYourInvoicesHere')}
        </Text>
      </div>

      <Divider className="my-6" />

      <CustomTable
        columns={BillingInvoicesTableColum}
        rows={BillingInvoicesTableRows}
        showPagination={false}
      />
    </>
  );
};

export default Billing;
