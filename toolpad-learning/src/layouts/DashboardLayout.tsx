import { DashboardLayout, PageContainer } from '@toolpad/core';
import {Outlet} from 'react-router';

export default function DashboardLayoutPage() {
  return (
    <DashboardLayout defaultSidebarCollapsed>
      <PageContainer breadcrumbs={[]}>
        <Outlet />
      </PageContainer>
    </DashboardLayout>
  );
}