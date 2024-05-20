import { FC, useState, useEffect } from 'react';

// i18n
import { useTranslation } from 'react-i18next';

// Types
import { ChildSidePanelsProps } from 'src/types/childSidePanelTypes';
import { TeamMember } from 'src/types/inviteTeamTypes';

// React Hook Form
import { InviteTeamMembers, InviteTeamDropDown } from 'src/data/dummyData';

// Utils
import { showToast } from 'src/utils/toast';

// Regex
import { emailRegex } from 'src/utils/regex';

// Icons
import { ArrowDown2 } from 'iconsax-react';

// Components
import Text from 'src/components/atoms/Text';
import SidePanel from '../SidePanel';
import CustomButton from 'src/components/atoms/Button';
import TextArea from 'src/components/atoms/TextArea';
import CustomDropdown from 'src/components/atoms/Dropdown';

interface InviteEntityOrganizationProps extends ChildSidePanelsProps {}

const InviteEntityUser: FC<InviteEntityOrganizationProps> = ({
  isOpen,
  setIsOpen,
}) => {
  const { t } = useTranslation();

  const [email, setEmail] = useState<string | null>(null);
  const [selectedRole, setSelectedRole] = useState<string>('');

  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);

  const handleAdd = () => {
    // Check if the email is already in use
    const emailExists = teamMembers.some(member => member.email === email);
    if (emailExists) {
      showToast({
        message: 'Email already exists',
        type: 'error',
      });
      return;
    }

    // Validate the input fields

    if (!email) {
      showToast({
        message: 'Email is required',
        type: 'error',
      });
      return;
    }

    if (!emailRegex.test(email)) {
      showToast({
        message: 'Invalid email format',
        type: 'error',
      });
      return;
    }

    if (!selectedRole) {
      showToast({
        message: 'Role is required',
        type: 'error',
      });
      return;
    }

    setTeamMembers(teamMembers => [
      ...teamMembers,
      { email, role: selectedRole },
    ]);
    showToast({
      message: 'Team member added successfully',
      type: 'success',
    });
    setEmail('');
    setSelectedRole('');
  };

  useEffect(() => {
    setTeamMembers(InviteTeamMembers);
  }, []);

  return (
    <SidePanel
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      title={t('inviteUsers')}
      primaryButtonClick={() => {
        setIsOpen(false);
      }}
      primaryButtonText={t('Save & Invite')}
      width="w-[450px]"
    >
      <div className="mb-6 flex w-full items-center gap-4">
        <div className="flex w-full overflow-hidden rounded-xl border border-default-200">
          <div className="w-full p-1">
            <input
              type="text"
              placeholder="Email"
              className="w-full border-none bg-transparent px-3 py-2 text-base outline-none placeholder:font-light"
              value={email || ''}
              onChange={e => setEmail(e.target.value)}
              onKeyPress={e => {
                if (e.key === 'Enter') {
                  handleAdd();
                }
              }}
            />
          </div>

          <div className="flex select-none items-center gap-1 bg-default-100 px-3 py-3 text-sm text-default-500">
            <CustomDropdown
              selected={selectedRole}
              setSelected={(value: Set<string>) => {
                const role = value.values().next().value;
                setSelectedRole(role);
              }}
              dropDownButton={
                <div className="flex max-w-16 items-center justify-center gap-1">
                  <span className="truncate text-ellipsis">
                    {selectedRole || t('role')}
                  </span>
                  <ArrowDown2 size={16} />
                </div>
              }
              dropDownMenus={InviteTeamDropDown}
            />
          </div>
        </div>

        <CustomButton size="md" onClick={handleAdd}>
          {t('add')}
        </CustomButton>
      </div>

      <div className="mb-8">
        <TextArea
          placeholder={t('clientMessage')}
          field={{
            value: '',
            onChange: () => {},
            onBlur: () => {},
            name: 'message',
          }}
        />
      </div>

      <div className="scrollbar mb-8 flex max-h-60 flex-col gap-4 overflow-auto">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="flex items-center justify-between border-b border-default-100 pb-4"
          >
            <Text
              containerTag="h6"
              className="text-sm font-normal text-default-500"
            >
              {member.email}
            </Text>

            <div className="flex items-center gap-1 text-sm text-foreground ">
              <CustomDropdown
                selected={member.role}
                setSelected={(value: Set<string>) => {
                  const role = value.values().next().value;
                  const updatedMembers = teamMembers.map(item => {
                    if (item.email === member.email) {
                      return { ...item, role };
                    }
                    return item;
                  });
                  setTeamMembers(updatedMembers);
                }}
                dropDownButton={
                  <div className="flex items-center justify-center gap-1">
                    {member.role} <ArrowDown2 size={16} />
                  </div>
                }
                dropDownMenus={InviteTeamDropDown}
              />
            </div>
          </div>
        ))}
      </div>
    </SidePanel>
  );
};

export default InviteEntityUser;
