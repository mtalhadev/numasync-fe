import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// i18n
import { useTranslation } from 'react-i18next';

// Components
import CustomButton from 'src/components/atoms/Button';
import Text from 'src/components/atoms/Text';
import InputField from 'src/components/atoms/InputField';
import Chip from 'src/components/atoms/Chip';
import EntityOverviewChart from 'src/components/molecules/EntityOverviewCharts';
import Divider from 'src/components/atoms/Divider';

// Zod
import { zodResolver } from '@hookform/resolvers/zod';

// React Hook Form
import { Controller, useForm } from 'react-hook-form';

// Schema
import {
  entityOverviewSchema,
  entityOverviewType,
} from 'src/schema/entityOverview.schema';

// Icons
import { Call, Location, Sms } from 'iconsax-react';

// Data
import { LINKS } from 'src/data/links';

const Overview = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [tags, setTags] = useState<string[]>([]);
  const [groups, setGroups] = useState<string[]>([]);

  const {
    handleSubmit,
    control,
    setValue,
    getValues,
    formState: { errors },
  } = useForm<entityOverviewType>({
    resolver: zodResolver(entityOverviewSchema),
    mode: 'onTouched',
  });

  const handleUpdate = handleSubmit(data => {
    console.log(data);
  });

  return (
    <>
      <div className="mt-8 flex flex-col justify-between  gap-5 sm:flex-row sm:items-center">
        <div>
          <Text
            containerTag="h2"
            className="mb-1 text-lg font-semibold text-foreground"
          >
            {t('entityOverview')}
          </Text>

          <Text containerTag="h5" className="text-sm text-default-500">
            {t('updateYourOrganizationDetailshere')}
          </Text>
        </div>

        <div className="flex items-center justify-end gap-3">
          <CustomButton
            variant="bordered"
            onClick={() => navigate(LINKS.ENTITIES)}
          >
            {t('cancel')}
          </CustomButton>
          <CustomButton onClick={handleUpdate}>{t('update')}</CustomButton>
          {/* <CustomButton>{t('edit')}</CustomButton> */}
        </div>
      </div>

      <Divider className="my-5" />

      <form action="">
        <div className="flex max-w-[850px] flex-col gap-3 sm:flex-row sm:gap-8">
          <Text
            containerTag="h3"
            className="text-xs font-medium text-foreground sm:w-60 sm:text-sm"
          >
            {t('entityName')}
          </Text>
          <div className="w-full">
            <Controller
              name="entityName"
              control={control}
              render={({ field }) => (
                <InputField
                  className={{
                    inputWrapper: '!h-11',
                  }}
                  name="entityName"
                  field={field}
                  errors={errors}
                  placeholder={t('enterEntityName')}
                />
              )}
            />
          </div>
        </div>

        <Divider className="my-5" />

        <div className="flex max-w-[850px] flex-col gap-3 sm:flex-row sm:gap-8">
          <Text
            containerTag="h3"
            className="text-xs font-medium text-foreground sm:w-60 sm:text-sm"
          >
            {t('entityEmail')}
          </Text>
          <div className="w-full">
            <Controller
              name="entityEmail"
              control={control}
              render={({ field }) => (
                <InputField
                  className={{
                    inputWrapper: '!h-11',
                  }}
                  leadingIcon={<Sms size="20" />}
                  name="entityEmail"
                  field={field}
                  errors={errors}
                  placeholder={t('enterEntityEmail')}
                />
              )}
            />
          </div>
        </div>

        <Divider className="my-5" />

        <div className="flex max-w-[850px] flex-col gap-3 sm:flex-row sm:gap-8">
          <Text
            containerTag="h3"
            className="text-xs font-medium text-foreground sm:w-60 sm:text-sm"
          >
            {t('entityAddress')}
          </Text>
          <div className="w-full">
            <Controller
              name="entityAddress"
              control={control}
              render={({ field }) => (
                <InputField
                  className={{
                    inputWrapper: '!h-11',
                  }}
                  leadingIcon={<Location size="20" />}
                  name="entityAddress"
                  field={field}
                  errors={errors}
                  placeholder={t('enterEntityAddress')}
                />
              )}
            />
          </div>
        </div>

        <Divider className="my-5" />

        <div className="flex max-w-[850px] flex-col gap-3 sm:flex-row sm:gap-8">
          <Text
            containerTag="h3"
            className="text-xs font-medium text-foreground sm:w-60 sm:text-sm"
          >
            {t('entityPhoneNumber')}
          </Text>
          <div className="w-full">
            <Controller
              name="entityPhoneNumber"
              control={control}
              render={({ field }) => (
                <InputField
                  className={{
                    inputWrapper: '!h-11',
                  }}
                  leadingIcon={<Call size="20" />}
                  name="entityPhoneNumber"
                  type="number"
                  field={field}
                  errors={errors}
                  placeholder={t('enterEntityPhoneNumber')}
                />
              )}
            />
          </div>
        </div>

        <Divider className="my-5" />

        <div className="flex max-w-[850px] flex-col gap-3 sm:flex-row sm:gap-8">
          <Text
            containerTag="h3"
            className="text-xs font-medium text-foreground sm:w-60 sm:text-sm"
          >
            {t('tags')}
          </Text>
          <div className="w-full">
            <Controller
              name="tags"
              control={control}
              render={({ field }) => (
                <InputField
                  className={{
                    inputWrapper: '!h-11',
                  }}
                  onKeyPress={e => {
                    if (e.key === 'Enter' && getValues('tags') !== '') {
                      getValues('tags');
                      setTags([...tags, getValues('tags') as string]);
                      setValue('tags', '');
                    }
                  }}
                  name="tags"
                  field={field}
                  errors={errors}
                  placeholder={t('tags')}
                />
              )}
            />

            <div className="mt-2 flex flex-wrap gap-2">
              {tags?.map((tag, index) => (
                <Chip
                  onClose={() => {
                    const newTags = tags.filter((_, i) => i !== index);
                    setTags(newTags);
                  }}
                  key={index}
                >
                  {tag}
                </Chip>
              ))}
            </div>
          </div>
        </div>

        <Divider className="my-5" />

        <div className="flex max-w-[850px] flex-col gap-3 sm:flex-row sm:gap-8">
          <Text
            containerTag="h3"
            className="text-xs font-medium text-foreground sm:w-60 sm:text-sm"
          >
            {t('groups')}
          </Text>
          <div className="w-full">
            <Controller
              name="groups"
              control={control}
              render={({ field }) => (
                <InputField
                  className={{
                    inputWrapper: '!h-11',
                  }}
                  onKeyPress={e => {
                    if (e.key === 'Enter' && getValues('groups') !== '') {
                      getValues('groups');
                      setGroups([...groups, getValues('groups') as string]);
                      setValue('groups', '');
                    }
                  }}
                  name="groups"
                  field={field}
                  errors={errors}
                  placeholder={t('groups')}
                />
              )}
            />

            <div className="mt-2 flex gap-2 ">
              {groups?.map((group, index) => (
                <Chip
                  onClose={() => {
                    const newGroups = groups.filter((_, i) => i !== index);
                    setGroups(newGroups);
                  }}
                  key={index}
                >
                  {group}
                </Chip>
              ))}
            </div>
          </div>
        </div>

        <Divider className="my-5" />
      </form>

      <EntityOverviewChart />
    </>
  );
};

export default Overview;
