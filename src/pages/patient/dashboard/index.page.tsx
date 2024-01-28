import AuthLayout from "@/components/AuthLayout";
import { ReactElement } from "react";
import { NextPageWithLayout } from "@/pages/_app.page";

const Dashboard: NextPageWithLayout = () => {
  return <div>Dashboard</div>;
};

Dashboard.getLayout = function getLayout(page: ReactElement) {
  return <AuthLayout>{page}</AuthLayout>;
};

export default Dashboard;
