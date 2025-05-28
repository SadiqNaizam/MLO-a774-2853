import React from 'react';
import MainAppLayout from '@/components/layout/MainAppLayout';
import LoginForm from '@/components/Authentication/LoginForm';

/**
 * IndexPage serves as the main authentication page for the application.
 * It utilizes MainAppLayout to provide the overall page structure and
 * centers the LoginForm component within a card-like interface.
 */
const IndexPage: React.FC = () => {
  return (
    <MainAppLayout>
      <LoginForm />
    </MainAppLayout>
  );
};

export default IndexPage;
