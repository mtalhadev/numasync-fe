import { useNavigate } from 'react-router-dom';

// i18n
import { useTranslation } from 'react-i18next';

// Components
import CustomButton from 'src/components/atoms/Button';
import Text from 'src/components/atoms/Text';
import CustomPagination from 'src/components/molecules/Pagination';

// Data
import { AccountingFirmDirectoryData } from 'src/data/dummyData';

const AccountingFirmDirectory = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <>
      <div className="mb-8 flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
        <div>
          <Text
            containerTag="h1"
            className="mb-1 text-2xl font-semibold leading-8 text-foreground"
          >
            {t('accountingFirmDirectory')}
          </Text>

          <Text
            containerTag="h4"
            className="text-base font-normal text-default-500"
          >
            {t('SeeThePeopleWhoAreWithUs')}
          </Text>
        </div>

        <div className="flex items-center justify-end gap-3">
          <CustomButton variant="bordered" onClick={() => navigate(-1)}>
            {t('goBack')}
          </CustomButton>
        </div>
      </div>

      <div className="mb-8 flex flex-wrap gap-6">
        {AccountingFirmDirectoryData.map((item, index) => (
          <div
            className="flex w-full flex-col justify-center overflow-hidden rounded-xl border border-default-200 p-5 text-center xs:w-[calc(50%-13px)] md:w-[calc(33%-14px)] xl:w-[calc(25%-19px)]"
            key={index}
          >
            <div className="m-auto mb-4 h-10 w-10 overflow-hidden rounded-full sm:h-12 sm:w-12">
              <img src={item.image} alt="Accounting Firm Directory Icons" />
            </div>
            <Text
              containerTag="h3"
              className="text-sm font-medium text-foreground sm:text-base"
            >
              {item.title}
            </Text>
            <Text
              containerTag="span"
              className="mb-5 truncate text-ellipsis text-xs font-light text-default-500 sm:text-sm"
            >
              {item.description}
            </Text>

            <CustomButton>{t('getInTouch')}</CustomButton>
          </div>
        ))}
      </div>
      <CustomPagination
        totalPages={10}
        currentPage={1}
        setCurrentPage={page => console.log(page)}
        rowsPerPage={10}
        setRowsPerPage={page => console.log(page)}
      />
    </>
  );
};

export default AccountingFirmDirectory;
