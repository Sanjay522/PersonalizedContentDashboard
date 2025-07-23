import PreferencesForm from '@/component/PreferencesForm';

export default function SettingsPage() {
  return (
    <div className="max-w-2xl mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-4">Settings</h1>
      <PreferencesForm />
    </div>
  );
}
