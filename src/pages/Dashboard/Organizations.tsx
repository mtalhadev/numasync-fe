import { Add } from 'iconsax-react';
import { useTranslation } from 'react-i18next';
import CustomButton from 'src/components/atoms/Button';
import SearchBar from 'src/components/atoms/SearchBar';
import SelectInput from 'src/components/atoms/Select';
import Text from 'src/components/atoms/Text';
import CustomTable from 'src/components/molecules/Table';
import {
  OrganizationTableColumns,
  OrganizationTableRows,
} from 'src/data/dummyData';
import { cn } from 'src/utils/cn';
import {
  pagesSubTitleFontClasses,
  pagesTitleFontClasses,
  UserActions,
} from 'src/utils/constants';

const Organizations = () => {
  const { t } = useTranslation();

  return (
    <div>
      <div className="mb-8 flex items-center justify-between">
        <div>
          <Text containerTag="h1" className={cn(pagesTitleFontClasses)}>
            {t('organizations')}
          </Text>

          <Text containerTag="h4" className={cn(pagesSubTitleFontClasses)}>
            {t('theseOrganizationsHaveAccessToEntitiesLinkedInYourAccount')}
          </Text>
        </div>

        <CustomButton
          leadingIcon={<Add size="22" />}
          className="text-sm"
          onClick={() => {}}
        >
          {t('inviteOrganization')}
        </CustomButton>
      </div>

      <div className="flex justify-between">
        <SearchBar classNames={{ inputWrapper: 'w-72' }} />

        <div className="w-44">
          <SelectInput
            label={t('action')}
            options={UserActions}
            variant="bordered"
            value={''}
            onChange={() => {}}
            size="sm"
          />
        </div>
      </div>

      <div className="my-5">
        <CustomTable
          columns={OrganizationTableColumns}
          rows={OrganizationTableRows}
        />
      </div>
    </div>
  );
};

export default Organizations;
