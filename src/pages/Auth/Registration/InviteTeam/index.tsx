import { useEffect, useState } from 'react';

// Icons
import { ArrowDown2, CloseCircle } from 'iconsax-react';

// i18n
import { useTranslation } from 'react-i18next';

// React Router
import { useNavigate } from 'react-router-dom';

// Components
import Text from 'src/components/atoms/Text';
import CustomButton from 'src/components/atoms/Button';
import AuthLayout from 'src/components/layout/AuthLayout';
import CustomDropdown from 'src/components/atoms/Dropdown';

// Data
import { InviteTeamDropDown, InviteTeamMembers } from 'src/data/dummyData';
import { LABELS } from 'src/data/labels';
import { LINKS } from 'src/data/links';

// Types
import { TeamMember } from 'src/types/inviteTeamTypes';

// Utils
import { showToast } from 'src/utils/toast';

// Regex
import { emailRegex } from 'src/utils/regex';

const InviteTeam = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const [email, setEmail] = useState<string | null>(null);
  const [selectedRole, setSelectedRole] = useState<string>('');

  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);

  const handleSubmit = () => {
    navigate(LINKS.SETUP_COMPLETE);
  };

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
    <AuthLayout key="inviteTeam">
      <div className="mb-8 text-center">
        <Text
          containerTag="h5"
          className="text-2xl font-semibold text-foreground md:text-4xl"
        >
          {t('inviteTeamMembers')}
        </Text>

        <Text
          containerTag="p"
          className="mt-3 text-base font-light text-default-500"
        >
          {t('extendAnInvitationToYourTeamMember')}
        </Text>
      </div>

      <div className="mb-6 w-full">
        <div className="flex w-full items-center gap-4">
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

            <div className="flex items-center gap-2 text-sm text-foreground ">
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
              <CloseCircle
                size="16"
                className="cursor-pointer text-danger-500"
                onClick={() =>
                  setTeamMembers(prev =>
                    prev.filter(item => item.email !== member.email)
                  )
                }
              />
            </div>
          </div>
        ))}
      </div>

      <CustomButton size="lg" type="submit" fullWidth onClick={handleSubmit}>
        {t('inviteAndNext')}
      </CustomButton>
      <button
        type="button"
        className="mx-auto mt-6 block text-sm font-medium text-primary underline underline-offset-4"
        onClick={handleSubmit}
      >
        {LABELS.skip}
      </button>
    </AuthLayout>
  );
};

export default InviteTeam;
